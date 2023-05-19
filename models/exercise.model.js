const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  exerciseId: {
    type: Number,
  },
  exerciseName: {
    type: String,
  },
  exerciseTime: {
    type: String,
  },
  exerciseRepCount: {
    type: Number,
  },
  exerciseLevel: {
    type: String,
  },
  exerciseMuscle: {
    type: String,
  },
  exerciseEquipment: {
    type: String,
  },
  exerciseDescription: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
