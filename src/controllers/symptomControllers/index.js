const HTTPStatus = require("../../utils/http-status.util");
const symptomServices = require('../../services/symptomServices');
const makeCreateSymptomController = require('./create-symptom.controller');
const makeFetchAllSymptomController = require('./fetch-all-symptom.controller');

// Services
const createSymptomService = symptomServices.createSymptomService;
const fetchAllSymptomService = symptomServices.fetchAllSymptomService;

// Controllers
const createSymptomController = makeCreateSymptomController({ createSymptomService, HTTPStatus });
const fetchAllSymptomController = makeFetchAllSymptomController({ fetchAllSymptomService, HTTPStatus });

const symptomController = Object.freeze({ createSymptomController, fetchAllSymptomController });

module.exports = symptomController;