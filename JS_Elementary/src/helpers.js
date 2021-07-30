const isInteger = num => Number.isInteger(num);

const isString = str => typeof str === 'string';

const isInRange = (num, min, max) => num <= min || num > max ? true : false;

const isLength = (symbol, length) => symbol.length === length;

export {
	isInRange,
	isInteger,
	isString,
	isLength
}