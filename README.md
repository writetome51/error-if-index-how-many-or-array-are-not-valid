# errorIfIndex_howMany_orArray_areNotValid(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Triggers error if `index` is not a valid index of `array` (it is allowed to be negative),  
or `howMany` is not an integer of zero or greater, or `array` is not an array.  

## Example
```ts
function getAdjacentAt(startingIndex, howMany, array): any[] {
    // validate arguments:
    errorIfIndex_howMany_orArray_areNotValid(startingIndex, howMany, array);

    if (howMany === 0) return [];
    if (startingIndex + howMany === 0) return arraySlice(startingIndex, array.length, array);
    else return arraySlice(startingIndex, startingIndex + howMany, array);
}
```

## Installation
`npm install  error-if-index-how-many-or-array-are-not-valid`

## Loading
```ts
// if using TypeScript:
import { errorIfIndex_howMany_orArray_areNotValid } 
	from 'error-if-index-how-many-or-array-are-not-valid';
// if using ES5 JavaScript:
var errorIfIndex_howMany_orArray_areNotValid = 
	require('error-if-index-how-many-or-array-are-not-valid')
	.errorIfIndex_howMany_orArray_areNotValid;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
