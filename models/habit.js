const mongoose = require("mongoose");

//----Defining schema structure (document/Schema)
const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  days: [],
});

//---- collection
const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
