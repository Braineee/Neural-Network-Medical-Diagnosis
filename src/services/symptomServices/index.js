const symptomDao = require('../../data-access/symptomDao');
const makeCreateSymptom = require('./create-symptom.service');
const makeFetchAllSymptom = require('./fetch-all-symptom.service');

// Build the create symptom service (inject the symptomDao)
const createSymptomService = makeCreateSymptom({ symptomDao });
const fetchAllSymptomService = makeFetchAllSymptom({ symptomDao });

// bundle the symptomServices
const symptomServices = Object.freeze({ createSymptomService, fetchAllSymptomService });

module.exports = symptomServices;