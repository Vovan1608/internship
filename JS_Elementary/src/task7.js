import {
	isInteger,
	isObject,
	isPropInObj
} from './helpers.js';

const checkParams = param => {
	if (!param) {
		return 'not parameter at all';
	}

	if (!isObject(param)) {
		return 'param should be object';
	}

	if (Object.keys(param).length === 1) {
		if (!isPropInObj(param, 'length')) {
			return isPropInObj(param, 'length') || 'context should be has property length';
		}
	} else {
		if (!isPropInObj(param, 'min', 'max')) {
			return 'context should be has properties min and max';
		}

		if (param.min >= param.max) {
			return 'min should be less then max';
		}
	}

	if (!Object.values(param).every(el => isInteger(el) && el > 1)) {
		return 'parameters shoul be integer pozitive numbers more then 1';
	}
}

const getFibonachi = num => {
	return num <= 1 ? num : getFibonachi(num - 1) + getFibonachi(num - 2);
}

const cacheDecorator = cb => {
	let cache = new Map();

	return function func (val) {
		if (cache.has(val)) {
			return cache.get(val);
		}

		let res = cb(val);
		cache.set(val, res);

		return res;
	}
}

const caching = cacheDecorator(getFibonachi);

const getFibonachiFromRange = context => {
	const check = checkParams(context);

	if (!check) {
		let {min, max, length} = context;

		if (!length) {
			length = max - min;
		} else {
			min = 0;
		}

		let count = min;
		const arr = Array.from({length}, _ => count += 1);

		return arr.map(el => caching(el)).join(',');
	}

	return {status: 'failed', reason: check}
}

console.log(getFibonachiFromRange({length: 10}));
console.log(getFibonachiFromRange({min: 2, max: 11}));