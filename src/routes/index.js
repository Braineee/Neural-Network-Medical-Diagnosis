const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const guestRoutes = require("./guest.routes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/guests", guestRoutes);

router.get("/", (req, res) => res.send("Medical Diagnosis API v1"));

module.exports = router;