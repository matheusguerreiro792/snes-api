const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token is not valid" });
  }
};

authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = { authenticate, authorize };
