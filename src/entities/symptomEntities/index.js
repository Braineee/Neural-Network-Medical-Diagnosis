const { v4: uuidv4 } = require('uuid');
const symptomEntity = require('./symptom.entity');
const createSymptomSchema = require('../../schemas/symptomSchemas/create.schema');

async function validateCreateSymptomData(body) {
  return await createSymptomSchema.validate(body);
}

async function validateCreateSymptomData(body) {
  return await createSymptomSchema.validate(body);
}

async function validateUpdateSymptomData(body) {
  return "Not implemented";
}

function getUuid() {
  return uuidv4();
}

const MakeSymptomEntity = symptomEntity({ getUuid, validateCreateSymptomData, validateUpdateSymptomData });

module.exports = MakeSymptomEntity;