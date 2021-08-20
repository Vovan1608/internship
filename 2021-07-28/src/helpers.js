const numIsNaturalInteger = num => {
	return Number.isInteger(num) && !isNaN(num) && num >= 0 && Number.isFinite(num);
}

const isArr = arr => Array.isArray(arr);

const isString = str => {
	return typeof str === 'string';
}

const isEveryElIsArrLengthTwo = matrix => {
	return matrix
		.every(el => isArr(el) && el.length === 2 && isString(el[0]) && numIsNaturalInteger(el[1]));
}

export {
	numIsNaturalInteger,
	isEveryElIsArrLengthTwo,
	isArr
}