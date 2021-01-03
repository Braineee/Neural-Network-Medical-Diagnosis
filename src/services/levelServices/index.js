const levelDao = require('../../data-access/levelDao');
const makeFetchAllLevelService = require('./fetch-all-level.service');

// Build the fetch all service (inject the levelDao)
const fetchAllLevelService = makeFetchAllLevelService({ levelDao });

// bundle the guestServices
const levelServices = Object.freeze({ fetchAllLevelService });

module.exports = levelServices;