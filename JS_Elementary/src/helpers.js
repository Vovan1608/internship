const isInteger = num => Number.isInteger(num);

const isString = str => typeof str === 'string';

const isInRange = (num, min, max) => num >= min && num <= max;

const isLengthOne = str => str.length === 1;

const isNotAllParams = (...params) => params.every(el => !el);

export {
	isInRange,
	isInteger,
	isString,
	isLengthOne,
	isNotAllParams
}