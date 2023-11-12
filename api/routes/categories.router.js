const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h>Welcome to categories get endPoit!</h>");
});

module.exports = router;
