const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  workoutId: {
    type: Number,
  },
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
