const jwt = require("jsonwebtoken");

const { User } = require("../models");

module.exports = {
  authenticateToken: (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  },

  authorizeRoles: (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.sendStatus(403);
    }
    next();
  },
};
