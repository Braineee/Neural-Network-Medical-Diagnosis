const MakeFetchAllSymptom = ({ symptomDao }) => {
  const fetchAllSymptom = async (symptomData) => {

    // fetch all symptom data
    const allSymptom = await symptomDao.fetchAll();

    // return the symptom data
    return allSymptom;
  }

  return fetchAllSymptom;
}

module.exports = MakeFetchAllSymptom;