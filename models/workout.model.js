const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  workoutName: {
    type: String,
  },
  workoutTime: {
    type: String,
  },
  workoutLevel: {
    type: String,
  },
  workoutMuscle: {
    type: String,
  },
  workoutEquipment: {
    type: String,
  },
  workoutDescription: {
    type: String,
  },
  workoutImgUrl: {
    type: String,
  },
  workoutVideoUlr: {
    type: String,
  },
  workoutRepCount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
