// Factory function make guest
const buildMakeGuest = ({ validate, encryptPassword }) => {
  return makeGuest = ({ 
    first_name,
    email,
    password,
  } = {}) => {

    validate({ first_name, last_name, email });

    password = encryptPassword(password);

    return Object.freeze({
      getFirstName: () => first_name,
      getEmail: () => email,
      getPassword: () => password
    })
  }
}

export default buildMakeUser;