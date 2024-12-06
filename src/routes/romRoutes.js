const express = require("express");
const router = express.Router();
const romController = require("../controllers/romController");
const { authenticate, authorize } = require("../middlewares/auth");

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

module.exports = router;
