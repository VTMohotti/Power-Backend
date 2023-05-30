const bcrypt = require("bcrypt");
const User = require("../models/user.model");

exports.registerUser = async (req, res) => {
  try {
    const {
      userEmail,
      userPassword,
      userImage,
      userGender,
      userAge,
      userHeight,
      userWeight,
      userGoal,
      userLevel,
      userBmi,
    } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    // Create a new user
    const newUser = new User({
      userEmail,
      userPassword: hashedPassword,
      userImage,
      userGender,
      userAge,
      userHeight,
      userWeight,
      userGoal,
      userLevel,
      userBmi,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    // Find the user by email
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Passwords match, authentication successful
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


