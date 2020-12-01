const { object } = require("joi");

// Factory function make guest
const buildMakeUser = ({ validate }) => {
  return class makeGuest {
    constructor(userData) {
      this._validate = validate;
      this._userData = userData;
    }

    async _validateUser() {
      await this._validate(this._userData);
    }

    getUserUuid() {
      return this._userData.userUuid;
    }

    getFirstName() {
      return this._userData.firstname;
    }

    getLastName() {
      return this._userData.lastname;
    }

    getEmail() {
      return this._userData.email;
    }

    getPhone() {
      return this._userData.phone;
    }

    getAge() {
      return this._userData.age;
    }

    getGender() {
      return this._userData.gender;
    }

    getAddress() {
      return this._userData.address;
    }

    profileIsComplete() {
      return this._userData.profile_is_complete;
    }

    isVerified() {
      return this._userData.is_verified;
    }

    updateProfileCompleted() {
      this._userData.profile_is_completed = 1;
      return this._userData.profile_is_completed;
    }

    verify() {
      this._userData.is_verified = 1;
      return this._userData.is_verified;
    }

    async execute(){
      await this._validateUser();
      
      Object.freeze(this._userData);

      return this;
    }
  }
}



module.exports = buildMakeUser;