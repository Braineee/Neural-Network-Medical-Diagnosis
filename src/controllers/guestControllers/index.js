const HTTPStatus = require("../../utils/http-status.util");
const guestServices = require('../../services/guestServices');
const makeRegisterGuestController = require('./register-guest.controller');

const registerGuestService = guestServices.registerGuestService;

const registerGuestController = makeRegisterGuestController({ registerGuestService, HTTPStatus });

const guestController = Object.freeze({
  registerGuestController,
});

module.exports = guestController;