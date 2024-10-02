const express = require("express");
const connectDB = require("./config/db");
const authMiddleware = require("./middleware/authMiddleware");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
require("dotenv").config();
app.use(express.static("view"));
app.use(authMiddleware);
connectDB();

const userRoutes = require("./controller/user");
const contactRoutes = require("./controller/contact");
const groupRoutes = require("./controller/group");
const authRoutes = require("./controller/auth");

app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/auth", authRoutes); // Ruta para autenticación

app.listen(PORT, () => {
  console.log(`Ejecutando en http://localhost:${PORT} 🚀`);
});
