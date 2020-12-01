const makeGuestEntity = require('../../entities/guestEntities');

const makeRegisterGuest = ({ userDao }) => {

  const registerGuest = async (guestInfo) => {
    // check the guestInfo
    const guest = await new makeGuestEntity(guestInfo).execute();

    // check if guest email exists
    const emailExists = await userDao.findByEmail(guest.getEmail());
    if (emailExists) throw new Error('Email has been reqistered previously');

    // create the new user
    const createUser = await userDao.insert({
      user_uuid: guest.getUserUuid(),
      first_name: guest.getFirstName(),
      email: guest.getEmail(),
      password: guest.getPassword(),
      is_verified: guest.isVerified(),
    });

    // check if the user was created
    if (!createUser) throw new Error("User was not created.");

    // fetch the new user data
    const newUser = await userDao.findByUuid(guest.getUserUuid());

    // return the user data
    return newUser;

  }

  return registerGuest;
}

module.exports = makeRegisterGuest;