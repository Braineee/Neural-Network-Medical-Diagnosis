const database = require("../../models");
const makeLevelDataAccess = require("./level.dao");

const levelModel = database.Levels;

const levelDataAccess = makeLevelDataAccess({ levelModel })

module.exports = levelDataAccess;
