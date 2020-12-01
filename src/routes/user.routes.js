const express = require('express');
const makeCallBack = require('../utils/express-callback.util');
const userControllers = require('../controllers/userControllers');

const router = express.Router();

router.put("/update/profile", makeCallBack(userControllers.updateUserController));

module.exports = router;
