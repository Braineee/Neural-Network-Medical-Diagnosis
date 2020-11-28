const guestServices = require('../../services/guestServices');
const makeRegisterGuestController = require('./register-guest.controller');

const registerGuestService = guestServices.registerGuest;

const registerGuestController = makeRegisterGuestController({ registerGuestService  });

const guestController = Object.freeze({
  registerGuestController,
});

module.exports = guestController;