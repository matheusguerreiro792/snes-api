const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const romRoutes = require("./romRoutes");
const imageRoutes = require("./imageRoutes");

router.use("", authRoutes);
router.use("", userRoutes);
router.use("", romRoutes);
router.use("", imageRoutes);

module.exports = router;
