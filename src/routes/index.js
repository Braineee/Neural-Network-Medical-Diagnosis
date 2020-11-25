const express = require("express");
const router = express.Router();

router.get("/", (res) => res.send("Medical Diagnosis API v1"));

module.exports = router;