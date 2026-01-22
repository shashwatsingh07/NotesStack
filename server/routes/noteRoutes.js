const express = require("express");
const router = express.Router();
const { protect, sellerOnly } = require("../middleware/authMiddleware");
const { createNote, getNotes } = require("../controllers/noteController");

router.post("/", protect, sellerOnly, createNote);
router.get("/", getNotes);

module.exports = router;
