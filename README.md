# errorIfIndex_howMany_orArray_areNotValid(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Triggers error if `array` is not an array, `index` is not a valid index of `array` (it is allowed  
to be negative), or `howMany` is not an integer greater than zero.  

## Example
```js
function getAdjacentAt(startingIndex, howMany, array) {
    // validate arguments:
    errorIfIndex_howMany_orArray_areNotValid(startingIndex, howMany, array);

    if (startingIndex + howMany === 0) return arraySlice(startingIndex, array.length, array);
    else return arraySlice(startingIndex, startingIndex + howMany, array);
}
```

## Installation
`npm i  error-if-index-how-many-or-array-are-not-valid`

## Loading
```js
import { errorIfIndex_howMany_orArray_areNotValid } 
	from 'error-if-index-how-many-or-array-are-not-valid';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
