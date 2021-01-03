const express = require('express');
const makeCallBack = require('../utils/express-callback.util');
const symptomControllers = require('../controllers/symptomControllers');
const { connectDbMiddleware, verifyUserMiddleware } = require('../middlewares');

const router = express.Router();

router.post("/create", [ connectDbMiddleware, verifyUserMiddleware ], makeCallBack(symptomControllers.createSymptomController));
router.get("/fetch/all", [ connectDbMiddleware, verifyUserMiddleware ], makeCallBack(symptomControllers.fetchAllSymptomController));

module.exports = router;
