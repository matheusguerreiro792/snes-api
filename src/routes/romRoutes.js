const express = require("express");
const router = express.Router();
const romController = require("../controllers/romController");
const authenticate = require("../middlewares/auth");

router.get("/roms", romController.getRoms);
router.post("/roms", authenticate, romController.createRom);
router.get("/roms/:id", romController.getRom);
router.put("/roms/:id", authenticate, romController.updateRom);
router.delete("/roms/:id", authenticate, romController.deleteRom);

module.exports = router;
