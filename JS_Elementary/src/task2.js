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

	const {a, b} = envelop1;
	const {c, d} = envelop2;
}