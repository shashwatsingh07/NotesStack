const express = require("express");
const router = express.Router();

// test user route
router.get("/test", (req, res) => {
  res.json({ message: "User route working" });
});

module.exports = router;
