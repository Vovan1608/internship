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
			return !isPropInObj(param, 'length') || 'context should be has property length';
		}
	} else {
		if (!isPropInObj(param, 'min', 'max')) {
			return 'context should be has properties min and max';
		}
	}

	if (!Object.values(param).every(el => isInteger(el) && el > 1)) {
		return 'parameters shoul be integer pozitive numbers more then 1';
	}
}

const getFibonachi = num => {
	return num <= 1 ? num : getFibonachi(num - 1) + getFibonachi(num - 2);
}

const getFibonachiFromRange = context => {
	const check = checkParams(context);

	if (!check) {
		let {min, max, length} = context;
		let str = '';

		if (length) {
			[min, max] = [0, length];
		}

		for (let i = min; i <= max; i += 1) {
			str += `${getFibonachi(i)},`;
		}

		return str.slice(0, -1);
	}

	return {status: 'failed', reason: check}
}

// console.log(getFibonachiFromRange({min: 10, max: 15}));
// console.log(getFibonachiFromRange({length: 10}));
// console.log(getFibonachiFromRange({min: 10, max: 15}));