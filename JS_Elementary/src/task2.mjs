import {
	isObject,
	isNumber,
	IsStrictInRange
} from './helpers.mjs';

const checkParams = (...params) => {
	const numsOfParameter = 2;
	const numsOfProperties = 2;
	const min = 0;
	const max = 1e6;
	const [p1, p2] = params;

	for (let i = 0; i < numsOfParameter; i += 1) {
		if (!params[i]) {
			return `there isn't ${i + 1} parameter`;
		}

		if (!isObject(params[i])) {
			return `${params[i]} isn't object`;
		}

		if (Object.values(params[i]).length !== numsOfProperties) {
			return `${i + 1} property must have ${numsOfProperties} properties`;
		}
	}

	for (const [key, val] of Object.entries({ ...p1, ...p2 })) {

		if (!val) {
			return `there isn\'t ${key} parameter`;
		}

		if (!isNumber(val)) {
			return `${key} should be a number`;
		}

		if (!IsStrictInRange(val, min, max)) {
			return `properties of ${key} should be in range from ${min} to ${max}`;
		}
	}

	return 'checked';
}

const checkEnvelops = (obj1, obj2) => {
	const check = checkParams(obj1, obj2);

	if (check === 'checked') {
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