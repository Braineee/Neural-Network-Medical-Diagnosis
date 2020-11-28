const database = require("../../models");
const makeUserDataAccess = require("./user.dao");

const userModel = database.User;

const userDataAccess = makeUserDataAccess({ userModel })

module.exports = userDataAccess;