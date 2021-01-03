const makeUserDao = ({ symptomModel }) => {

  const userDao = {

    async findByUuid(symptom_uuid) {
      const result = await symptomModel.findOne({ where: { symptom_uuid }, attributes: { exclude: ['id'] } });
      return result;
    },

    async fetchAll() {
      const result = await symptomModel.findAll({ attributes: { exclude: ['id'] } });
      return result;
    },

    async insert(symptomData) {
      const result = await symptomModel.create(symptomData);
      if (result) return true;
      return false;
    },

    async update(symptomData) {
      const update = await symptomModel.update(symptomData, { where: { symptom_uuid: symptomData.symptom_uuid } });
      if (update) return true;
      return false;
    },

    async remove(symptomData) {
      return "Not implemented";
    }
    
  }

  return userDao;
}

module.exports = makeUserDao;