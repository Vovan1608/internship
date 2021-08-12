import {
	isObject,
	isNumber,
	IsStrictInRange
} from './helpers.mjs';

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

	return 'check';
}

const checkEnvelops = (obj1, obj2) => {
	const check = checkParams(obj1, obj2);

	if (check === 'check') {
		const [frstHorsnt, frstVert, scndHorsnt, scndVert] = Object.values({...obj1, ...obj2});
		let result = 0;

		if (frstHorsnt < scndHorsnt && frstVert < scndVert ||
				frstHorsnt < scndVert && frstVert < scndHorsnt) {
			result = 1;
		}

		if (frstHorsnt > scndHorsnt && frstVert > scndVert ||
				frstHorsnt > scndVert && frstVert > scndHorsnt) {
			result = 2;
		}

		return result;
	}

	return {status: 'failed', reason: check}
}

export {checkEnvelops}