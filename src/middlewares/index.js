const database = require('../models');
const HTTPStatus = require("../utils/http-status.util");
const validatorServices = require('../services/validatorServices');

const makeConnectDbMiddleware = require('./connectDb.middleware');
const makeVerifyUserMiddleware = require('./verifyUser.middleware');

const validateUserToken = validatorServices.validateUserToken;

const connectDbMiddleware = makeConnectDbMiddleware({ database });

const verifyUserMiddleware = makeVerifyUserMiddleware({ validateUserToken, HTTPStatus });

const middleware = Object.freeze({ connectDbMiddleware,  verifyUserMiddleware });

module.exports = middleware;