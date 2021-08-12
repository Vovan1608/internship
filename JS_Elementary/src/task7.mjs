import {
	isInteger,
	isObject,
	isPropInObj
} from './helpers.mjs';

const checkParams = param => {
	if (!param) {
		return 'not parameter at all';
	}

	if (!isObject(param)) {
		return 'param should be object';
	}

	const len = Object.keys(param).length;

	if (len === 1) {
		if (!isPropInObj(param, 'length')) {
			return 'context must have property length';
		}
	} else if (len === 2) {
		if (!isPropInObj(param, 'min', 'max')) {
			return 'context must have properties min and max';
		}
	} else {
		return 'context must have only properties min, max or only property length';
	}

	if (!Object.values(param).every(el => isInteger(el) && el > 1)) {
		return 'parameters shoul be integer pozitive numbers more then 1';
	}

	return 'checked';
}

const getFibonachi = num => {
	// Bine's formula
	const KOEF = 5 ** 0.5;
	const CNST = (1 + KOEF) / 2;
	const resultFibonachi = Math.round(CNST ** num / KOEF);

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
			length = max - min + 1;
			min -= 1;
		} else {
			min = -1;
		}

		const resultArr = Array.from({length}, _ => getFibonachi(min += 1));
		const resultStr = resultArr.toString();

		return resultStr;
	}

	return {status: 'failed', reason: check}
}

export {getFibonachiFromRange}