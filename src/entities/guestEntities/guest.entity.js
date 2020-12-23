const { object } = require("joi");

// Factory function make guest
const buildMakeGuest = ({ getId, validate, encryptPassword }) => {
  return class makeGuest {
    constructor(guestData) {
      this._getId = getId;
      this._validate = validate;
      this._guestData = guestData;
    }

    async _validateGuest() {
      await this._validate(this._guestData);
    }

    async _generateUserId() {
      this._guestData.userUuid = await this._getId();
    }

    async _encryptUserPassword() {
      this._guestData.password = await encryptPassword(this._guestData.password);
    }

    getUserUuid() {
      return this._guestData.userUuid;
    }

    getFirstName() {
      return this._guestData.firstname;
    }

    getLastName() {
      return this._guestData.lastname;
    }

    getEmail() {
      return this._guestData.email;
    }

    getPassword() {
      return this._guestData.password;
    }

    isVerified() {
      return 0;
    }

    async execute(){
      await this._validateGuest();
      await this._generateUserId();
      await this._encryptUserPassword();
      
      Object.freeze(this._guestData);

      return this;
    }
  }
}



module.exports = buildMakeGuest;