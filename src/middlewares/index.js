const database = require('../models');
const makeConnectDbMiddleware = require('./connectDb.middleware');

const connectDbMiddleware = makeConnectDbMiddleware({ database });

const middleware = Object.freeze({ connectDbMiddleware });

module.exports = middleware;