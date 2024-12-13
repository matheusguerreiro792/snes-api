const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

router.get(
  "/users",
  authenticate,
  authorize(["admin"]),
  userController.getUsers
);
router.get("/users/me", authenticate, userController.getUser);
router.put("/users/me", authenticate, userController.updateUser);
router.put(
  "/users/:id/roleUpdate",
  authenticate,
  authorize(["admin"]),
  userController.updateUserRole
);
router.delete("/users/me", authenticate, userController.deleteUser);

module.exports = router;
