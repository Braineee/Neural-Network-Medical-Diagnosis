const userDao = require('../../data-access/userDao');
const makeUpdateUser = require('./update-user.service');

// Build the update user service (inject the userDao)
const updateUserService = makeUpdateUser({ userDao });

// bundle the userServices
const userServices = Object.freeze({ updateUserService });

module.exports = userServices;