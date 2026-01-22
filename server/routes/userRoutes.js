const express = require("express");
const router = express.Router();
const { protect, sellerOnly } = require("../middleware/authMiddleware");

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});
router.get("/seller-dashboard", protect, sellerOnly, (req, res) => {
  res.json({ message: "Welcome Seller" });
});

module.exports = router;
