// routes/authRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/user")

const router = express.Router();
const JWT_SECRET = "your_jwt_secret_here";

// Register
router.post(
  "/register",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
    body("name").trim().escape(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;

    try {
      const existing = await User.findOne({ email });
      if (existing) return res.status(400).json({ message: "User already exists" });

      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hash });

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
      res.cookie("token", token, { httpOnly: true });
      res.json({ user });
    } catch (err) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
);

// Login
router.post(
  "/login",
  [body("email").isEmail().normalizeEmail(), body("password").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
      res.cookie("token", token, { httpOnly: true });
      res.json({ user });
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  }
);

// Logout
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

module.exports = router;
