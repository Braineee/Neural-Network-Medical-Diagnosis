const HTTPStatus = require("../../utils/http-status.util");
const diagnosisServices = require('../../services/diagnosisServices');
const makeDiagnoseController = require('./diagnose.controller');

const diagnoseService = diagnosisServices.diagnoseService;

const diagnoseController = makeDiagnoseController({ diagnoseService, HTTPStatus });

const diagnosisControllers = Object.freeze({
  diagnoseController,
});

module.exports = diagnosisControllers;