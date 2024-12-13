const express = require("express");
const router = express.Router();
const romController = require("../controllers/romController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

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

module.exports = router;
