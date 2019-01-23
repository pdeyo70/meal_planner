const DB = require("../../dbConfig");

module.exports = {
  register: user => {
    return DB("user").insert(user);
  },
  getUser: id => {
    return DB("user")
      .where("id", id)
      .select("id", "username", "department");
  },
  getUsers: () => {
    return DB("user");
  },
  login: username => {
    return DB("user")
      .where("username", username)
      .first();
  }
};
