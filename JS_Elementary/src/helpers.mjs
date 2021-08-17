const isInteger = num => Number.isInteger(num);

const isString = val => typeof val === 'string';

const isInRange = (num, min, max) => num >= min && num <= max;

const IsStrictInRange = (num, min, max) => num > min && num < max;

const isLengthOne = str => str.length === 1;

const isNotAllParams = (...params) => params.every(el => !el);

const isArr = arr => Array.isArray(arr);

const isObject = val => val instanceof Object && !isArr(val);

const isNumber = val => typeof val === 'number';

const isPropInObj = (obj, ...props) => props.every(prop => prop in obj);

const isEven = el => el % 2 === 0;

export {
	isInRange,
	IsStrictInRange,
	isInteger,
	isString,
	isLengthOne,
	isNotAllParams,
	isObject,
	isNumber,
	isPropInObj,
	isArr,
	isEven,
}