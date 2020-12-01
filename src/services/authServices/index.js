const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const userDao = require('../../data-access/userDao');
const makeSignIn = require('./sign-in.service');

// generate jwt function
function generateJWT(userData, rememberMe = false) {
  const sessionTimeOut = rememberMe ? 604800 : 3600;
  return JWT.sign({data: userData},process.env.APP_SECRETE,{expiresIn: sessionTimeOut});
}

// verify password function
function verifyPassword(actualPassword, requestPassword) {
  const result = bcrypt.compareSync(requestPassword, actualPassword);
  return result;
}

// Build the sign in service (inject the userDao)
const signInService = makeSignIn({ userDao, verifyPassword, generateJWT });

// bundle the auth services
const authServices = Object.freeze({ signInService });

module.exports = authServices;