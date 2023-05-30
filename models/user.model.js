const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
  },
  userPassword: {
    type: String,
  },
  userImage: {
    type: String,
  },
  userGender: {
    type: String,
  },
  userAge: {
    type: Number,
  },
  userHeight: {
    type: Number,
  },
  userWeight: {
    type: Number,
  },
  userGoal: {
    type: String,
  },
  userLevel: {
    type: String,
  },
  userBmi: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
