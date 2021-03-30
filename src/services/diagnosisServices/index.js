const fs = require('fs');
const brain = require('brain.js');
const csv = require('csv-parser');
const neatCsv = require('neat-csv');
const dataset = `${__dirname}/../../dataset/dataset05.csv`;
const makeDiagnose = require('./diagnose.service');

// Build the diagnosis service (inject the brain and dataset)
const diagnoseService = makeDiagnose({ fs, brain, dataset, neatCsv, csv });

// bundle the diagnosis service
const diagnosisService = Object.freeze({ diagnoseService });

module.exports = diagnosisService;