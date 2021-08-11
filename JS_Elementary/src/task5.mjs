import {
	isObject,
	isInRange,
	isPropInObj,
	isInteger
} from './helpers.mjs'

const makeArrOfDigits = num => {
	const MAX_LENGTH_OF_TICKET_NUM = 6;
	const digitsStore = [...String(num).padStart(MAX_LENGTH_OF_TICKET_NUM, '0')];
	return digitsStore;
}

const computedTicket = num => {
	const HALF_LENGTH_OF_TICKET_NUM = 3;
	const digitsStore = makeArrOfDigits(num);

	const resultStore =  digitsStore.reduce((acc, next, i) => {
		acc[i < HALF_LENGTH_OF_TICKET_NUM ? 'first' : 'second'] += Number(next);
		acc[i % 2 ? 'odd' : 'even'] += Number(next);

		return acc;
	}, {first: 0, second: 0, even: 0, odd: 0});

	return resultStore;
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

	return 'checked';
}

const getWinnerMethod = obj => {
	const check = checkParam(obj);

	if (check === 'checked') {
		let {min, max} = obj;

		if ( min > max) {
			[min, max] = [max, min];
		}

		let simple = 0;
		let hard = 0;

		for (let i = min; i <= max; i += 1) {
			const {first, second, even, odd} = computedTicket(i);

			if (first === second) {
				simple += 1;
			}

			if (even === odd) {
				hard += 1;
			}
		}

		let winner;

		if (simple > hard) {
			winner = 'simple';
		} else if (simple < hard) {
			winner = 'hard';
		} else {
			winner = 'both';
		}

		return {
			winner,
			tickets : { simple, hard }
		}
	}

	return {status: 'failed', reason: check}
}

export {getWinnerMethod}