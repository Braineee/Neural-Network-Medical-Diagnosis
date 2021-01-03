const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const guestRoutes = require("./guest.routes");
const symptomRoutes = require("./symptom.routes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/guests", guestRoutes);
router.use("/symptoms", symptomRoutes);

router.get("/", (req, res) => res.send("Medical Diagnosis API v1"));

module.exports = router;