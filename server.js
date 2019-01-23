const express = require("express"),
  logger = require("morgan"),
  cors = require("cors"),
  helmet = require("helmet"),
  jwt = require("jsonwebtoken");
require("dotenv").config();

const SERVER = express();
const PORT = process.env.PORT || 3030;

// add routes here
const UserRoutes = require("./routers/UserRoutes");

SERVER.use(express.json(), cors(), helmet(), logger("dev"));

// use routes here
SERVER.use("/api/auth", UserRoutes);

SERVER.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
