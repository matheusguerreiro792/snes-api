const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const romController = require("../controllers/romController");
const imageController = require("../controllers/imageController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

// Auth Routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/renewToken", authenticate, authController.renewToken);

// User Routes
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

// Rom Routes
router.get("/roms", romController.getRoms);
router.post(
  "/roms",
  authenticate,
  authorize(["admin"]),
  romController.createRom
);
router.get("/roms/:id", romController.getRom);
router.put(
  "/roms/:id",
  authenticate,
  authorize(["admin"]),
  romController.updateRom
);
router.delete(
  "/roms/:id",
  authenticate,
  authorize(["admin"]),
  romController.deleteRom
);

router.get("/roms/:romId/images", romController.getImagesByRom);
router.post(
  "/roms/:romId/images",
  authenticate,
  authorize(["admin"]),
  romController.createImageToRom
);
router.put(
  "/roms/:romId/images/:id",
  authenticate,
  authorize(["admin"]),
  romController.updateImageByRom
);
router.delete(
  "/roms/:romId/images/:id",
  authenticate,
  authorize(["admin"]),
  romController.deleteImageByRom
);

// Image Routes
router.get("/images", imageController.getImages);

module.exports = router;
