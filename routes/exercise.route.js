const {
  getExercise,
  createExercise,
  getExerciseById,
  updateExercise,
  deleteExercise,
} = require("../controllers/exercise.controller");
const router = require("express").Router();

router.get("/", getExercise);
router.get("/:id", getExerciseById);
router.post("/", createExercise);
router.put("/:id", updateExercise);
router.delete("/:id", deleteExercise);

module.exports = router;
