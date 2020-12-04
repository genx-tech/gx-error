"use strict";

const { ExposableError, ApplicationError } = require('./AppErrors');
const HttpCode = require('http-status-codes');

/**
 * Data errors.
 * @module DataErrors
 */

/**
 * Valiation error.
 * @class
 */
class ValidationError extends ExposableError {
    constructor(message, info) {
        super(message, info, HttpCode.BAD_REQUEST, 'E_INVALID_DATA');
    }
}

/**
 * Referenced entity not found.
 * @class
 */
class ReferencedNotExistError extends ExposableError {
    constructor(message, info) {
        super(message, info, HttpCode.BAD_REQUEST, 'E_REFERENCED_NOT_EXIST');
    }
}

/**
 * Duplicate error.
 * @class
 */
class DuplicateError extends ExposableError {
    constructor(message, info) {
        super(message, info, HttpCode.BAD_REQUEST, 'E_DUPLICATE');
    }
}

/**
 * Database operation error.
 * @class
 */
class DatabaseError extends ApplicationError {
    constructor(message, info) {
        super(message, info, 'E_DATABASE');
    }
}

exports.ValidationError = ValidationError;
exports.ReferencedNotExistError = ReferencedNotExistError;
exports.DuplicateError = DuplicateError;
exports.DatabaseError = DatabaseError;