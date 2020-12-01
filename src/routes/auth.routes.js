const express = require('express');
const makeCallBack = require('../utils/express-callback.util');
const authControllers = require('../controllers/authControllers');

const router = express.Router();

router.post("/signin", makeCallBack(authControllers.signInController));

module.exports = router;