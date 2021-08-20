const isArr = arr => Array.isArray(arr);

const isNotEmptyArr = arr => arr.length ? true : false;

const isArrAndIsNotEmpty = arr => isArr(arr) && isNotEmptyArr(arr);

const isEveryNaturalNum = arr => {
	return arr.every(el => typeof el === 'number' && Number.isInteger(el) && el > 0);
}

const isString = str => typeof str === 'string';

export {
	isArr,
	isNotEmptyArr,
	isArrAndIsNotEmpty,
	isEveryNaturalNum,
	isString
}