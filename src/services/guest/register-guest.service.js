import makeGuest from '../../entities/guest';
const makeRegisterGuest = ({ userModel}) => {
  return ReqgisterGuest = async (guestInfo) => {
    const guest = makeGuest(guestInfo);

    // check if guest email exists
    const emailExists = await userModel.findByEmail({ Email: guest.getEmail() });
    if (emailExists) throw new Error('Email has been reqistered previously');

    // cheack if phone number exisit 
    const phoneExists = await userModel.findByPhone({ Phone: guest.getPhone() });
    if (phoneExists) throw new Error('Email has been reqistered previously');
  }
}