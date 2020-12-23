const makeUserEntity = require('../../entities/userEntities');

const makeUpdateUserProfile = ({ userDao }) => {

  const updateUser = async (userData) => {

    // define the type of update
    userData.type = 'profile_update';

    // check if user exists
    const userExisit = await userDao.findByEmail(userData.userUuid);
    if (!userExisit) throw new Error('This user those not exists.');

    // check the user data
    const user = await new makeUserEntity(userExisit, userData).execute();

    // update the new user
    const updateUser = await userDao.update({
      user_uuid: user.getUserUuid(),
      first_name: user.updateFirstName(),
      last_name: user.updateLastName(),
      email: user.updateEmail(),
      phone: user.updatePhone(),
      age: user.updateAge(),
      address: user.updateAddress(),
      profile_is_complete: user.updateProfileCompleted()
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

module.exports = makeUpdateUserProfile;