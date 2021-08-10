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
			return isPropInObj(param, 'length') || 'context must have property length';
		}
	} else {
		if (!isPropInObj(param, 'min', 'max')) {
			return 'context must have properties min and max';
		}
	}

	if (!Object.values(param).every(el => isInteger(el) && el > 1)) {
		return 'parameters shoul be integer pozitive numbers more then 1';
	}

	return 'checked';
}

const getFibonachi = num => {
	// Binet's formula
	const a = (1 + 5 ** 0.5) / 2;
	const resultFibonachi = Math.round(a ** num / 5 ** 0.5);

	return resultFibonachi;
}

const getFibonachiFromRange = context => {
	const check = checkParams(context);

	if (check === 'checked') {
		let {min, max, length} = context;

		if (min > max) {
			[min, max] = [max, min];
		}

		if (!length) {
			length = max;
		} else {
			min = 0;
		}

		let resultStr = '';

		for (let i = min; i <= length; i += 1) {
			resultStr += `${getFibonachi(i)},`;
		}

		return resultStr.slice(0, -1);
	}

	return {status: 'failed', reason: check}
}


export {getFibonachiFromRange}