const Workout = require("../models/workout.model");

const getWorkout = async (req, res) => {
  try {
    const workouts = await Workout.find();
    const response = { workout: workouts };
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the workouts" });
  }
};

const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the workout" });
  }
};

const createWorkout = async (req, res) => {
  try {
    const workoutData = { ...req.body, createdAt: new Date() };
    const workout = new Workout(workoutData);

    const savedWorkout = await workout.save();
    const response = [{ ...savedWorkout }];
    res.status(201).json({ workout: response });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the workout" });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      {
        workoutName: req.body.workoutName,
        workoutTime: req.body.workoutTime,
        workoutLevel: req.body.workoutLevel,
        workoutMuscle: req.body.workoutMuscle,
        workoutEquipment: req.body.workoutEquipment,
        workoutDescription: req.body.workoutDescription,
        createdAt: req.body.createdAt,
      },
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the workout" });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndRemove(req.params.id);

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json({ message: "Workout deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the workout" });
  }
};

module.exports = {
  getWorkout,
  createWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
