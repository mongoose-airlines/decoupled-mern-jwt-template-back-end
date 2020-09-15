const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res) {
  User.find({}).then((users) => res.json(users));
}