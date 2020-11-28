// Factory function make guest
const buildMakeGuest = ({ getId, validate, encryptPassword }) => {
  // return makeGuest = ({ 
  //   first_name,
  //   email,
  //   password,
  // } = {}) => {

  //   validate({ first_name, last_name, email });

  //   password = encryptPassword(password);

  //   return Object.freeze({
  //     getFirstName: () => first_name,
  //     getEmail: () => email,
  //     getPassword: () => password,
  //     isVerified: () => isVerified
  //   })
  // }
  return class buildMakeGuest {
    constructor({ guestData }) {
      validate(guestData);
      this._userUuid = getId();
      this._firstName = guestData.firstname;
      this._email = guestData.email;
      this._password = guestData.password;
    }

    getUserUuid() {
      return 
    }

    getFirstName() {
      return this._firstName;
    }

    getEmail() {
      return this._email;
    }

    getPassword() {
      return encryptPassword(this._password);
    }

    isVerified() {
      return 0;
    }
    
  }
}



module.exports = buildMakeGuest;