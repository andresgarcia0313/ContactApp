const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  if (req.path === "/api/auth/login") {
    return next(); // No se valida el token en /login, continúa con el siguiente middleware
  }

  const token = req.header("Authorization")?.split(" ")[1]; // Token viene como "Bearer <token>"

  if (!token) {
    return res
      .status(401)
      .json({ message: "No hay token, autorización denegada" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token no válido" });
  }
}

module.exports = authMiddleware;
