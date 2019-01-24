const express = require("express");
const router = express.Router();
const User = require("../data/helpers/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "this is my awesome secret";

const generateToken = id => {
  const payload = { id };
  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secret, options);
};

function protected(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Token does not exist" });
  }
}

router.post("/register", (req, res) => {
  const { user } = req.body;
  // check if username exists and password is greater than 7 chars
  if (user.username.length && user.password.length > 7) {
    // hash password with bcryptjs
    user.password = bcrypt.hashSync(user.password, 14);
    // access DB helpers to register
    User.register(user)
      .then(ids => {
        const id = ids[0];
        // fetch the user with the id that is returned
        User.getUser(id)
          .then(registered => {
            res.status(201).json(registered);
          })
          .catch(err => res.status(500).json({ error: "bad id" }));
      })
      .catch(err => res.status(500).json({ error: "username/password bad" }));
  } else {
    res.status(400).json({
      message: "Please make sure you have a username and a password(length > 7)"
    });
  }
});

router.post("/login", (req, res) => {
  const { password, username } = req.body.user;
  User.login(username)
    .then(user => {
      if (user) {
        const pass = user.password;
        // check if client and db 'password' match
        bcrypt.compare(password, pass, (err, result) => {
          if (result) {
            const token = generateToken(user.id);
            res.json({ id: user.id, token });
          } else {
            res.status(401).send("You shall not pass!");
          }
        });
      }
    })
    .catch(err => res.status(500).json({ error: "You shall not pass!" }));
});

router.get("/users", protected, (req, res) => {
  User.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res.status(500).json({ message: "Try again later." });
    });
});

module.exports = router;
