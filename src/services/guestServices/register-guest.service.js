const makeGuestEntity = require('../../entities/guestEntity');

const makeRegisterGuest = ({ userDao }) => {

  const registerGuest = async (guestInfo) => {
    // check the guestInfo
    const guest = new makeGuestEntity(guestInfo);

    // check if guest email exists
    const emailExists = await userDao.findByEmail({ Email: guest.getEmail() });
    if (emailExists) throw new Error('Email has been reqistered previously');

    // check if phone number exisit 
    const phoneExists = await userDao.findByPhone({ Phone: guest.getPhone() });
    if (phoneExists) throw new Error('Email has been reqistered previously');

    // create the new user
    const createUser = userDao.insert({
      user_uuid: guest.getUserUuid(),
      first_name: guest.getFirstName(),
      email: guest.getEmail(),
      password: guest.getPassword(),
      is_verified: guest.isVerified(),
    });

    // check if the user was created
    if (!createUser) throw new Error("User was not created.");

    // fetch the new user data
    const newUser = await userDao.findByUuid({ Uuid: guest.getUserUuid });

    // return the user data
    return newUser;

  }

  return registerGuest;
}

module.exports = makeRegisterGuest;