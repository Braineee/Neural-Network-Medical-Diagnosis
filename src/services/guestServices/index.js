const userDao = require('../../data-access/userDao');
const makeRegisterGuest = require('./register-guest.service');

// Build the register guest service (inject the userDao)
const registerGuestService = makeRegisterGuest({ userDao });

// bundle the guestServices
const guestServices = Object.freeze({ registerGuestService });

module.exports = guestServices;