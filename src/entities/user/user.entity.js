// Factory function make user
const buildMakeUser = ({ getId, validate }) => {
  return makeUser = ({
    user_uuid = getId(),
    first_name,
    last_name,
    email,
    phone,
    gender,
    age,
    address,
    isVerified = 0
  } = {}) => {
    
    validate({
      user_uuid,
      first_name,
      last_name,
      email,
      phone,
      gender,
      age,
      address,
      isVerified
    })

    return Object.freeze({
      getUserUUID: () => user_uuid,
      getFirstName: () => first_name,
      getLastName: () => last_name,
      getEmail: () => email,
      getPhone: () => phone,
      getGender: () => gender,
      getAge: () => age,
      getAddress: () => address,
      getIsVerified: () => is_verified,
      getFullName: () => `${first_name} ${last_name}`,
      verify: () => isVerified = 1,
    })
  }
}

export default buildMakeUser;