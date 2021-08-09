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

		if (param.min >= param.max) {
			return 'min should be less then max';
		}
	}

	if (!Object.values(param).every(el => isInteger(el) && el > 1)) {
		return 'parameters shoul be integer pozitive numbers more then 1';
	}
}

const getFibonachi = num => {
	const a = (1 + 5 ** 0.5) / 2;
  return Math.round(a ** num / 5 ** 0.5);
}

const getFibonachiFromRange = context => {
	const check = checkParams(context);

	if (!check) {
		let {min, max, length} = context;

		if (!length) {
			length = max - min + 1;
			min -= 1;
		} else {
			min = -1;
		}

		return Array.from({length}, _ => getFibonachi(++min)).join(',');
	}

	return {status: 'failed', reason: check}
}


export {getFibonachiFromRange}