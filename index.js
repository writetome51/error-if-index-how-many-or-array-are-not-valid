import {errorIfNotArray} from 'error-if-not-array';
import {errorIfIndexNotValid} from 'error-if-index-not-valid';
import {errorIfNotInteger} from 'error-if-not-integer';


// `index` can be negative or positive.

export function errorIfIndex_howMany_orArray_areNotValid(index, howMany, array) {
	errorIfNotArray(array);
	errorIfIndexNotValid(index, array.length);
	errorIfNotInteger(howMany);
	if (howMany < 1) throw new Error("Input must be integer greater than zero");
}
