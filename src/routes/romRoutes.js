const express = require("express");
const romController = require("../controllers/romController");
const {
  authenticateToken,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const router = express.Router();

router.post(
  "/",
  authenticateToken,
  authorizeRoles(["admin"]),
  romController.createRom
);
router.get("/", authenticateToken, romController.getRoms);
router.put(
  "/:id",
  authenticateToken,
  authorizeRoles(["admin"]),
  romController.updateRom
);
router.delete(
  "/:id",
  authenticateToken,
  authorizeRoles(["admin"]),
  romController.deleteRom
);

module.exports = router;
