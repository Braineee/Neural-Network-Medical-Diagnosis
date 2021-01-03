const express = require('express');
const makeCallBack = require('../utils/express-callback.util');
const symptomController = require('../controllers/symptomControllers');
const { connectDbMiddleware, verifyUserMiddleware } = require('../middlewares');

const router = express.Router();

router.post("/create", [ connectDbMiddleware, verifyUserMiddleware ], makeCallBack(symptomController.createSymptomController));
router.get("/fetch/all", [ connectDbMiddleware, verifyUserMiddleware ], makeCallBack(symptomController.fetchAllSymptomController));

module.exports = router;
