const AppErrors = require('./AppErrors');
const DataErrors = require('./DataErrors');
const HttpErrors = require('./HttpErrors');

module.exports = { ...AppErrors, ...DataErrors, ...HttpErrors };