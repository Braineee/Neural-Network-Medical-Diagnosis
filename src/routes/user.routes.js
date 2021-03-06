const express = require('express');
const { connectDbMiddleware, verifyUserMiddleware } = require('../middlewares');
const makeCallBack = require('../utils/express-callback.util');
const userControllers = require('../controllers/userControllers');

const router = express.Router();

router.put("/update/profile", [ connectDbMiddleware, verifyUserMiddleware ], makeCallBack(userControllers.updateUserController));

module.exports = router;
