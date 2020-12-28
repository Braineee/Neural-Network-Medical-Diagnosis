const JWT = require("jsonwebtoken");
const makeValidateUser = require('./validate-user.service');

async function verifyToken(req) {
  // Check if header autorization exist
  if (!req.headers.authorization) throw new Error("FORBIDDEN.");

  // get the bearer token
  const bearerToken = req.headers.authorization;

  // Check if bearer token exists
  if (!bearerToken) throw new Error("FORBIDDEN.");

  // Remove Bearer from string
  const token = bearerToken.slice(7, bearerToken.length);

  if (!token) throw new Error("FORBIDDEN.");

  const isVerified =  JWT.verify(token, process.env.APP_SECRETE);

  await isVerified;

  return isVerified;
}

// Build the update user service (inject the userDao)
const validateUserToken = makeValidateUser({ verifyToken });

// bundle the userServices
const validatorService = Object.freeze({ validateUserToken });

module.exports = validatorService;