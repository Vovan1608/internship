'use strict';

const isObject = val => val instanceof Object && !Array.isArray(val);

const isNumber = val => typeof val === 'number';

const isValidProp = (obj, ...props) => props.every(prop => prop in obj && isNumber(obj[prop]));


const checkEnvelops = (envelop1, envelop2) => {
	if (!envelop1 || !envelop2) {
		return 'it should be two parameters';
	}

	if (!isObject(envelop1) || !isObject(envelop2)) {
		return 'parameters should be object';
	}

	if (!isValidProp(envelop1, 'a', 'b') || !isValidProp(envelop2, 'c', 'd')) {
		return 'envelop1 must have properties a, b and envelop2 must have c, d, properties must be number';
	}

	if (![...Object.values(envelop1), ...Object.values(envelop2)].every(el => el > 0 && el < 1000000)) {
		return 'sizes must be more than 0 and less than 1000000';
	}

	const {a, b} = envelop1;
	const {c, d} = envelop2;

	if (a < c && b < d || a < d && b < c) {
		return 1;
	} else if (a > c && b > d || a > d && b > c) {
		return 2;
	} else {
		return 0;
	}
}