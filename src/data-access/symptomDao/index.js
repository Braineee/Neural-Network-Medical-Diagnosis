const database = require("../../models");
const makeSymptomDataAccess = require("./symptom.dao");

const symptomModel = database.Symptoms;

const symptomDataAccess = makeSymptomDataAccess({ symptomModel })

module.exports = symptomDataAccess;
