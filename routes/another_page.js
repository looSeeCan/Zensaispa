const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/another_page", (req, res) => {
  res.send("This is another Page");
});

module.exports = router;
