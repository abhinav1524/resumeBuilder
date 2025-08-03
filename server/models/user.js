// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  isPremium: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
