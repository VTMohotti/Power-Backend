const {loginUser, registerUser, getAllUsers, getUserById} = require("../controllers/user.controller");
const router = require("express").Router();

// Register a new user
router.post("/register", registerUser);
// Login a user
router.post("/login", loginUser);
// Get all users
router.get("/", getAllUsers);
// Get user by ID
router.get("/:id", getUserById);

module.exports = router;
