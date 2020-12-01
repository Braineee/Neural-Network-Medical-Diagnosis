// Factory function make guest
const buildMakeSignIn = ({ validate }) => {
  return class makeSignIn {
    constructor(signInData) {
      this._validate = validate;
      this._signInData = signInData;
    }

    async _validateEntity() {
      await this._validate(this._signInData);
    }

    getEmail() {
      return this._signInData.email;
    }

    getPassword() {
      return this._signInData.password;
    }

    getRememberMe() {
      return this._signInData.remember_me;
    }

    async execute(){
      await this._validateEntity();
      
      Object.freeze(this._signInData);

      return this;
    }
  }
}



module.exports = buildMakeSignIn;