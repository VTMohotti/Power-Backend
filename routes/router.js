const {
  getWorkout,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workout.controller");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/workouts", getWorkout);
router.get("/workouts/:id", getWorkoutById);
router.post("/workouts", createWorkout);
router.put("/workouts/:id", updateWorkout);
router.delete("/workouts/:id", deleteWorkout);

module.exports = router;
