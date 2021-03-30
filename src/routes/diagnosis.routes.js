const express = require('express');
const makeCallBack = require('../utils/express-callback.util');
const diagnosisControllers = require('../controllers/diagnosisControllers');
const { connectDbMiddleware, /*verifyUserMiddleware*/ } = require('../middlewares');

const router = express.Router();

router.post("/diagnose", [ connectDbMiddleware, /*verifyUserMiddleware*/ ], makeCallBack(diagnosisControllers.diagnoseController));

module.exports = router;