const Excercise = require("../models/exercise.model");

const getExercise = async (req, res) => {
  try {
    const exercises = await Excercise.find();
    res.json(exercises);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the exercises" });
  }
};

const getExerciseById = async (req, res) => {
  try {
    const exercise = await Excercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ error: "Excercise not found" });
    }
    res.json(exercise);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the exercise" });
  }
};

const createExercise = async (req, res) => {
  try {
    const exercise = new Excercise({
      exerciseId: parseInt(req.body.exerciseId),
      exerciseName: req.body.exerciseName,
      exerciseTime: req.body.exerciseTime,
      exerciseRepCount: parseInt(req.body.exerciseRepCount),
      exerciseLevel: req.body.exerciseLevel,
      exerciseMuscle: req.body.exerciseMuscle,
      exerciseEquipment: req.body.exerciseEquipment,
      exerciseDescription: req.body.exerciseDescription,
      createdAt: req.body.createdAt,
    });

    const savedExercise = await exercise.save();
    res.status(201).json(savedExercise);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the exercise" });
  }
};

const updateExercise = async (req, res) => {
  try {
    const exercise = await Excercise.findByIdAndUpdate(
      req.params.id,
      {
        workoutId: req.params.workoutId,
        exerciseId: req.params.exerciseId,
        exerciseName: req.params.exerciseName,
        exerciseTime: req.params.exerciseTime,
        exerciseRepCount: req.params.exerciseRepCount,
        exerciseLevel: req.params.exerciseLevel,
        exerciseMuscle: req.params.exerciseMuscle,
        exerciseEquipment: req.params.exerciseEquipment,
        exerciseDescription: req.params.exerciseDescription,
        createdAt: req.body.createdAt,
      },
      { new: true }
    );

    if (!exercise) {
      return res.status(404).json({ error: "Excercise not found" });
    }

    res.json(exercise);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the exercise" });
  }
};

const deleteExercise = async (req, res) => {
  try {
    const exercise = await Excercise.findByIdAndRemove(req.params.id);

    if (!exercise) {
      return res.status(404).json({ error: "Excercise not found" });
    }

    res.json({ message: "Excercise deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the exercise" });
  }
};

module.exports = {
  getExercise,
  createExercise,
  getExerciseById,
  updateExercise,
  deleteExercise,
};
