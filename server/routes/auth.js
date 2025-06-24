const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Login endpoint hit", req.body);

  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ username }, "SECRET_KEY", { expiresIn: "1h" });
    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Invalid login or password" });
  }
});

module.exports = router;
