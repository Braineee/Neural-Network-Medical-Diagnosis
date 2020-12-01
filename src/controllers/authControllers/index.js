const HTTPStatus = require("../../utils/http-status.util");
const { signInService } = require('../../services/authServices');
const makeSignInController = require('./sign-in.controller');

const signInController = makeSignInController({ signInService, HTTPStatus });

const guestController = Object.freeze({ signInController });

module.exports = guestController;