"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_not_valid_1 = require("error-if-index-not-valid");
var errorIfNotArray_1 = require("error-if-not-array");
var errorIfNotIntegerZeroOrGreater_1 = require("error-if-not-integer-zero-or-greater");

// index can be negative or positive.
function errorIfIndex_howMany_orArray_areNotValid(index, howMany, array) {
    errorIfNotArray_1.errorIfNotArray(array);
    error_if_index_not_valid_1.errorIfIndexNotValid(index, array.length);
    errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(howMany);
}
exports.errorIfIndex_howMany_orArray_areNotValid = errorIfIndex_howMany_orArray_areNotValid;
