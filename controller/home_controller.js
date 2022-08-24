const Habit = require("../models/habit");
const User = require("../models/user");
//---- find all habit and show it to home page
module.exports.home = function (req, res) {
  Habit.find({ user: req.user }, function (err, allhabits) {
    if (err) {
      console.log("Error in finding habits fro db");
      return;
    }
    return res.render("home", {
      title: "Home",
      allHabits: allhabits,
    });
  });
};

module.exports.login = function (req, res) {
  return res.render("login");
};
module.exports.signup = function (req, res) {
  return res.render("signup");
};

module.exports.createUser = async function (req, res) {
  try {
    console.log(req.body);
    let user = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    });
    return res.redirect("/login");
  } catch (e) {
    console.log(e);
    return;
  }
};

module.exports.createSession = async function (req, res) {
  return res.redirect("/");
};

module.exports.logout = function (req, res) {
  req.logout(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    return res.redirect("/");
  });
};
