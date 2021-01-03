const express = require('express');
const makeCallBack = require('../utils/express-callback.util');
const levelController = require('../controllers/levelControllers');
const { connectDbMiddleware, verifyUserMiddleware } = require('../middlewares');

const router = express.Router();

router.get("/fetch/all", [ connectDbMiddleware, verifyUserMiddleware ], makeCallBack(levelController.fetchAllLevelController));

module.exports = router;
