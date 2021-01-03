const HTTPStatus = require("../../utils/http-status.util");
const levelServices = require('../../services/levelServices');
const makeFetchAllLevelController = require('./fetch-all-level.controller');

// Services
const fetchAllLevelService = levelServices.fetchAllLevelService;

// Controllers
const fetchAllLevelController = makeFetchAllLevelController({ fetchAllLevelService, HTTPStatus });

const levelControllers = Object.freeze({ fetchAllLevelController });

module.exports = levelControllers;