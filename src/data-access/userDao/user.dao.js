const makeUserDao = ({ userModel }) => {

  const userDao = {

    async findByEmail(email) {
      const result = await userModel.findOne({ where: { email }, attributes: { exclude: ['id'] } });
      return result;
    },

    async findByPhone(phone) {
      const result = await userModel.findOne({ where: { phone }, attributes: { exclude: ['id', 'password'] } });
      return result;
    },

    async findByUuid(user_uuid) {
      const result = await userModel.findOne({ where: { user_uuid }, attributes: { exclude: ['id', 'password'] } });
      return result;
    },

    async insert(userData) {
      console.log(userData);
      const result = await userModel.create(userData);
      if (result) return true;
      return false;
    },

    async update(userData) {
      return "Not implemented";
    },

    async remove(userData) {
      return "Not implemented";
    }
    
  }

  return userDao;
}

module.exports = makeUserDao;