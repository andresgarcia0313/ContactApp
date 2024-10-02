const express = require("express");
const router = express.Router();
const User = require("../model/User");
const authMiddleware = require("../middleware/authMiddleware");

// Crear un nuevo usuario (registro)
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener todos los usuarios (protección de la ruta)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
