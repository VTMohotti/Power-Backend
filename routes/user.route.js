const {loginUser, registerUser} = require("../controllers/user.controller");
const router = require("express").Router();

// Register a new user
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
