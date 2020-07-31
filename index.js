import {errorIfNotArray} from 'error-if-not-array';
import {errorIfIndexNotValid} from 'error-if-index-not-valid';
import {errorIfNotIntegerZeroOrGreater} from 'error-if-not-integer-zero-or-greater';


// index can be negative or positive.

export function errorIfIndex_howMany_orArray_areNotValid(index, howMany, array) {
	errorIfNotArray(array);
	errorIfIndexNotValid(index, array.length);
	errorIfNotIntegerZeroOrGreater(howMany);
}
