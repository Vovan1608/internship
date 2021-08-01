const isInteger = num => Number.isInteger(num);

const isString = str => typeof str === 'string';

const isInRange = (num, min, max) => num >= min && num <= max;

const IsStrictInRange = (num, min, max) => num > min && num < max;

const isLengthOne = str => str.length === 1;

const isNotAllParams = (...params) => params.every(el => !el);

const isObject = val => val instanceof Object && !Array.isArray(val);

const isNumber = val => typeof val === 'number';

const isPropInObj = (obj, ...props) => props.every(prop => prop in obj);
export {
	isInRange,
	IsStrictInRange,
	isInteger,
	isString,
	isLengthOne,
	isNotAllParams,
	isObject,
	isNumber,
	isPropInObj
}