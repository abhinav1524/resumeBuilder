// routes/googleAuth.js
const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    // set JWT cookie
    const token = jwt.sign({ id: req.user._id }, "your_jwt_secret_here", { expiresIn: "7d" });
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard");
  }
);

module.exports = router;
