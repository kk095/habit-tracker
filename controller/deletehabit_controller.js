const Habit = require("../models/habit");

module.exports.delete = async function (req, res) {
  //---- find the requested habit and delete it from db
  try {
    let id = req.query.id;
    let habit = await Habit.findByIdAndDelete(id);
    return res.redirect("back");
  } catch (e) {
    console.log(e);
    return;
  }
};
