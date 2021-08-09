import {
	isObject,
	isInRange,
	isPropInObj,
	isInteger
} from './helpers.js'

const makeArrOfDigits = num => {
	const MAX_LENGTH_OF_TICKET_NUM = 6;
	return [...String(num).padStart(MAX_LENGTH_OF_TICKET_NUM, '0')];
}

const computedTicket = num => {
	const HALF_LENGTH_OF_TICKET_NUM = 3;

	return makeArrOfDigits(num).reduce((acc, next, i) => {
		acc[i < HALF_LENGTH_OF_TICKET_NUM ? 'first' : 'second'] += Number(next);
		acc[i % 2 ? 'odd' : 'even'] += Number(next);

		return acc;
	}, {first: 0, second: 0, even: 0, odd: 0});
}

const isValidParamsInObj = (obj, min, max) => {
	return (
		isPropInObj(obj, 'min', 'max') &&
		isInteger(obj['min']) &&
		isInteger(obj['max']) &&
		isInRange(obj['min'], min, max) &&
		isInRange(obj['max'], min, max)
	);
}

const checkParam = par => {
	if (!par) {
		return 'not parameter at all';
	}

	if (!isObject(par)) {
		return 'parameter should be object';
	}

	if (!isValidParamsInObj(par, 1, 999999)) {
		return 'object has wrong parameters';
	}
}

const getWinnerMethod = obj => {
	const check = checkParam(obj);

	if (!check) {
		let {min, max} = obj;

		if ( min > max) {
			[min, max] = [max, min];
		}

		let simple = 0;
		let hard = 0;
		let count = min - 1;

		Array.from({length: max - min + 1}, el => {
			el = ++count;

			const {first, second, even, odd} = computedTicket(el);

			if (first === second) {
				simple += 1;
			}

			if (even === odd) {
				hard += 1;
			}
		});

		let res;

		if (simple > hard) {
			res = 'simple';
		} else if (simple < hard) {
			res = 'hard';
		} else {
			res = 'both';
		}

		return {
			winner : res,
			tickets : { simple, hard }
		}
	}

	return {status: 'failed', reason: check}
}

export {getWinnerMethod}