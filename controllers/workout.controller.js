const Workout = require("../models/workout.model");

const getWorkout = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the workouts" });
  }
};

// const getWorkout = async (req, res) => {
//   try {
//     const workout = await Workout.find().populate("exercises");

//     if (!workout) {
//       return res.status(404).json({ error: "Workout not found" });
//     }

//     res.json(workout);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "An error occurred while retrieving the workout" });
//   }
// };

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

//   module.exports = getWorkoutById;

const createWorkout = async (req, res) => {
  try {
    const workout = new Workout({
      workoutName: req.body.workoutName,
      workoutTime: req.body.workoutTime,
      workoutLevel: req.body.workoutLevel,
      workoutMuscle: req.body.workoutMuscle,
      workoutEquipment: req.body.workoutEquipment,
      workoutDescription: req.body.workoutDescription,
      exercises: req.body.exercises,
      createdAt: req.body.createdAt,
    });

    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the workout" });
  }
};

// module.exports = createWorkout;

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

//   module.exports = updateWorkout;

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

//   module.exports = deleteWorkout;

module.exports = {
  getWorkout,
  createWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
