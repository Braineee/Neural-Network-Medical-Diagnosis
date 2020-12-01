const HTTPStatus = require("../../utils/http-status.util");
const userServices = require('../../services/userServices');
const makeUpdateUserController = require('./update-user.controller');

const updateUserService = userServices.updateUserService;

const updateUserController = makeUpdateUserController({ updateUserService, HTTPStatus });

const guestController = Object.freeze({
  updateUserController,
});

module.exports = guestController;