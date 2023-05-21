const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
    scheduleId: {
    type: Number,
  },
  scheduleName: {
    type: String,
  },
  scheduleGoal: {
    type: String,
  },
  scheduleDescription: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
  workouts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout",
    },
  ],
});

module.exports = mongoose.model("Schedule", ScheduleSchema);