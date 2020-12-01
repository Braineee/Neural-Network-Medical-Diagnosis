const express = require('express');
const { connectDbMiddleware } = require('../middlewares');
const makeCallBack = require('../utils/express-callback.util');
const guestControllers = require('../controllers/guestControllers');

const router = express.Router();

router.post("/register", [ connectDbMiddleware ], makeCallBack(guestControllers.registerGuestController));

module.exports = router;
