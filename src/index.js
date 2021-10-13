const AppErrors = require('./AppErrors');
const DataErrors = require('./DataErrors');
const HttpErrors = require('./HttpErrors');
const { StatusCodes: HttpCode } = require('http-status-codes');

module.exports = { ...AppErrors, ...DataErrors, ...HttpErrors, HttpCode };