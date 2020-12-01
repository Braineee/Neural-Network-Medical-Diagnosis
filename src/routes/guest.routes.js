const express = require('express');
const makeCallBack = require('../utils/express-callback.util');
const guestControllers = require('../controllers/guestControllers');

const router = express.Router();

router.post("/register", makeCallBack(guestControllers.registerGuestController));

module.exports = router;
