const express = require("express");
const router = express.Router();
const romController = require("../controllers/romController");

router.get("/roms", romController.getRoms);
router.post("/roms", romController.createRom);

module.exports = router;
