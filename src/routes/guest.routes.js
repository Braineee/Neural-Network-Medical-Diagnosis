const express = require('express');
const makeCallBack = require('../utils/express-callback.util');
const guestController = require('../controllers/guestController');

const router = express.Router();

router.post("/register", makeCallBack(guestController.registerGuestController));

module.exports = router;
