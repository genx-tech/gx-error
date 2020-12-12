"use strict";

const { ExposableError, ApplicationError } = require('./AppErrors');
const HttpCode = require('http-status-codes');

/**
 * Data errors.
 * @module DataErrors
 */

/**
 * Validation error.
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
class ReferencedNotExist extends ExposableError {
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
 * Unexpected data/state error.
 * @class
 */
class UnexpectedState extends ApplicationError {
    constructor(message, info) {
        super(message, info, 'E_UNEXPECTED');
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
exports.ReferencedNotExistError = ReferencedNotExist; //backward compatible
exports.ReferencedNotExist = ReferencedNotExist;
exports.DuplicateError = DuplicateError;
exports.UnexpectedState = UnexpectedState;
exports.DatabaseError = DatabaseError;