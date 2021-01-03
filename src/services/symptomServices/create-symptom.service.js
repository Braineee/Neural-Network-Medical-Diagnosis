const SymptomEntity = require('../../entities/symptomEntities');

const MakeCreateSymptom = ({ symptomDao }) => {
  const createSymptom = async (symptomData) => {
    // create a new symtom
    const symptom = await new SymptomEntity(symptomData).create();

    console.log(symptom.getSymptomUuid());

    // check if symptom exists
    const symptomIdExists = await symptomDao.findById(symptom.getSymptomId());
    const symptomNameExists = await symptomDao.findByName(symptom.getSymptomName());

    if (symptomIdExists) throw new Error('This symptom already exists');
    if (symptomNameExists) throw new Error('This symptom already exists');
    

    // store the new symptom
    const storeSymptom = await symptomDao.insert({
      symptom_uuid: symptom.getSymptomUuid(),
      symptom_id: symptom.getSymptomId(),
      symptom_name: symptom.getSymptomName(),
      symptom_description: symptom.getSymptomDescription(),
    });

    // check if the symptom was stored
    if (!storeSymptom) throw new Error("Symptom was not created.");

    // fetch the new symptom data
    const newSymptom = await symptomDao.findByUuid(symptom.getSymptomUuid());

    // return the symptom data
    return newSymptom;
  }

  return createSymptom;
}

module.exports = MakeCreateSymptom;