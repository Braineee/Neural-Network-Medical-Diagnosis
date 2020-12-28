const { validate } = require("../../schemas/guestSchemas/guest.schema");

// Factory function jwt service
const buildMakeValidator = ({ verifyToken }) => {
  return class makeValidator {
    constructor(request) {
      this._verifyToken = verifyToken;
      this._req = request
      this._userData = {}
    }

    async _validateUserToken() {
      this._userData = await this._verifyToken(this._req);
    }

    getUserUuid() {
      return this._userData.data.user_uuid;
    }

    getUserDetails() {
      return this._userData.data;
    }

    async validateUser() {
      await this._validateUserToken();
      return Object.freeze(this);
    }
  }
}

module.exports = buildMakeValidator;