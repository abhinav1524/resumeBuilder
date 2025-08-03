    // middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const JWT_SECRET = "your_jwt_secret_here";

const protect = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch {
    return res.status(401).json({ message: "Token invalid" });
  }
};

module.exports = protect;
