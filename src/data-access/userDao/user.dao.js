const makeUserDao = ({ userModel }) => {
  // return Object.freeze({
  //   findByEmail,
  //   findByPhone,
  //   findByUuid,
  //   insert,
  //   remove,
  //   update
  // });

  // async function findByEmail({ email: _email }) {
  //   const result = userModel.findOne({ where: { email }, attributes: { exclude: ['id'] }});
  //   return result;
  // }
  class userDao {

    constructor() {}

    async findByEmail({ email: Email }) {
      const result = await userModel.findOne({ where: { email }, attributes: { exclude: ['id'] } });
      return result;
    }

    async findByPhone({ phone: Phone }) {
      const result = await userModel.findOne({ where: { phone }, attributes: { exclude: ['id'] } });
      return result;
    }

    async findByUuid({ user_uuid: UserUuid }) {
      const result = await userModel.findOne({ where: { user_uuid }, attributes: { exclude: ['id'] } });
      return result;
    }

    async insert({ userData: UserData }) {
      const result = await userModel.create(userData);
      if (result) return true;
      return false;
    }

    async update({ userData: _userData }) {
      return "Not implemented";
    }

    async remove({ userData: _userData }) {
      return "Not implemented";
    }

  }

  return userDao;
}

module.exports = makeUserDao;