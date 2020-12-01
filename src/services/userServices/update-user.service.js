const makeUserEntity = require('../../entities/userEntities');

const makeUpdateUser = ({ userDao }) => {

  const updateUser = async (userData) => {
    // check the user data
    const user = await new makeUserEntity(userData).execute();

    // check if user exists
    const userExisit = await userDao.findByEmail(user.getUserUuid());
    if (!userExisit) throw new Error('This user those not exists.');

    // update the new user
    const updateUser = await userDao.update({
      user_uuid: user.getUserUuid(),
      first_name: user.getFirstName(),
      last_name: user.getLastName(),
      email: user.getEmail(),
      phone: user.getPhone(),
      age: user.getAge(),
      address: user.getAddress(),
    });

    // check if the user was updated
    if (!updateUser) throw new Error("User was not updated.");

    // fetch the new user data
    const updatedUser = await userDao.findByUuid(user.getUserUuid());

    // return the user data
    return updatedUser;

  }

  return updateUser;
}

module.exports = makeUpdateUser;