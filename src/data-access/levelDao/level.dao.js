const makeLevelDao = ({ levelModel }) => {

  const levelDao = {

    async findByUuid(level_uuid) {
      const result = await levelModel.findOne({ where: { level_uuid }, attributes: { exclude: ['id'] } });
      return result;
    },

    async findBydigit(level_digit) {
      const result = await levelModel.findOne({ where: { level_digit }, attributes: { exclude: ['id'] } });
      return result;
    },

    async findByLevel(level) {
      const result = await levelModel.findOne({ where: { level }, attributes: { exclude: ['id'] } });
      return result;
    },

    async fetchAll() {
      const result = await levelModel.findAll({ attributes: { exclude: ['id'] } });
      return result;
    },

    async insert(levelData) {
      const result = await levelModel.create(levelData);
      if (result) return true;
      return false;
    },

    async update(levelData) {
      const update = await levelModel.update(levelData, { where: { level_uuid: levelData.level_uuid } });
      if (update) return true;
      return false;
    },

    async remove(symptomData) {
      return "Not implemented";
    }
    
  }

  return levelDao;
}

module.exports = makeLevelDao;