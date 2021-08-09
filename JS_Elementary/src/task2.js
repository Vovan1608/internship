import {
	isObject,
	isNumber,
	IsStrictInRange
} from './helpers.js';

const isPropANumMoreZeroLessMillion = (obj, min, max) => {
	return Object.values(obj).every(el => isNumber(el) && IsStrictInRange(el, min, max));
}

const checkParams = (obj1, obj2) => {
	const min = 0;
	const max = 1e6;

	for (const [key, val] of Object.entries({ obj1, obj2 })) {

		if (!val) {
			return `there isn\'t ${key} parameter`;
		}

		if (!isObject(val)) {
			return `${key} should be object`;
		}

		if (!isPropANumMoreZeroLessMillion(val, min, max)) {
			return `properties of ${key} should be a number in range from ${min} to ${max}`;
		}
	}
}

const checkEnvelops = (obj1, obj2) => {
	const check = checkParams(obj1, obj2);

	if (!check) {
		const [a, b, c, d] = Object.values({...obj1, ...obj2});

		if (a < c && b < d || a < d && b < c) {
			return 1;
		}

		if (a > c && b > d || a > d && b > c) {
			return 2;
		}

		return 0;
	}

	return {status: 'failed', reason: check}
}

export {checkEnvelops}