'use strict';

const sortingTriangles = arr => {
	if (!arr) {
		return 'it should be one parameter';
	}

	if (!Array.isArray(arr)) {
		return 'it should be an array as a parameter';
	}

	if (!arr.every(el => isObject(el))) {
		return 'every element of arr should be object';
	}


}