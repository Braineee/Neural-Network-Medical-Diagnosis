// Factory function make guest
const buildMakeUser = ({ validateProfileUpdate }) => {
  return class makeGuest {

    constructor(currentUserData = {}, updatedUserData = {}) {
      this._validateProfileUpdate = validateProfileUpdate;
      this._updatedUserData = updatedUserData;
      this._currentUserData = currentUserData;

      //console.log(this._currentUserData);
    }

    async __validateProfileUpdate() {
      await this._validateProfileUpdate(this._updatedUserData);
    }

    getUserUuid() {
      return this._currentUserData.user_uuid;
    }

    getFirstName() {
      return this._currentUserData.first_name;
    }

    getLastName() {
      return this._currentUserData.last_name;
    }

    getEmail() {
      return this._currentUserData.email;
    }

    getPhone() {
      return this._currentUserData.phone;
    }

    getAge() {
      return this._currentUserData.age;
    }

    getGender() {
      return this._currentUserData.gender;
    }

    getAddress() {
      return this._currentUserData.address;
    }

    profileIsComplete() {
      return this._currentUserData.profile_is_complete;
    }

    isVerified() {
      return this._currentUserData.is_verified;
    }

    verify() {
      this._userData.is_verified = 1;
      return this._userData.is_verified;
    }

    updateFirstName() {
      if (!this._updatedUserData.firstname) return this._currentUserData.first_name;
      if (this._updatedUserData.firstname !== this._currentUserData.first_name) return this._updatedUserData.firstname;
      return this._currentUserData.first_name;
    }

    updateLastName() {
      if (!this._updatedUserData.lastname) return this._currentUserData.last_name;
      if (this._updatedUserData.lastname !== this._currentUserData.last_name) return this._updatedUserData.lastname;
      return this._currentUserData.last_name;
    }

    updateEmail() {
      if (!this._updatedUserData.email) return this._currentUserData.email; 
      if (this._updatedUserData.email !== this._currentUserData.email) return this._updatedUserData.email;
      return this._currentUserData.email;
    }

    updatePhone() {
      if (!this._updatedUserData.phone) this._currentUserData.phone; 
      if (this._updatedUserData.phone !== this._currentUserData.phone) return this._updatedUserData.phone;
      return this._currentUserData.phone;
    }

    updateAge() {
      if (!this._updatedUserData.age) this._currentUserData.age; 
      if (this._updatedUserData.age !== this._currentUserData.age) return this._updatedUserData.age;
      return this._currentUserData.age;
    }

    updateGender() {
      if (!this._updatedUserData.gender) this._currentUserData.gender; 
      if (this._updatedUserData.gender !== this._currentUserData.gender) return this._updatedUserData.gender;
      return this._currentUserData.gender;
    }

    updateAddress() {
      if (!this._updatedUserData.address) this._currentUserData.address; 
      if (this._updatedUserData.address !== this._currentUserData.address) return this._updatedUserData.address;
      return this._currentUserData.address;
    }

    updateProfileCompleted() {
      if (this._currentUserData.profile_is_complete === 0) return 1;
      if (this._currentUserData.profile_is_complete === 1) return 0;
    }

    async execute(){
      if (this._updatedUserData.type === 'profile_update') await this.__validateProfileUpdate();
      
      Object.freeze(this._updatedUserData);
      Object.freeze(this._currentUserData);

      return this;
    }
  }
}

module.exports = buildMakeUser;