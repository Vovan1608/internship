import {
	isObject,
	isInRange,
	isPropInObj,
	isInteger
} from './helpers.mjs'

const makeArrOfDigits = num => {
	const MAX_LENGTH_OF_TICKET_NUM = 6;
	const numAsStr = String(num).padStart(MAX_LENGTH_OF_TICKET_NUM, '0');
	const storeOfDigitsAsStr = Array.from(numAsStr);
	const digitsStore = storeOfDigitsAsStr.map(el => Number(el));

	return digitsStore;
}

const computedTicket = num => {
	const [fst, snd, trd, foth, fith, sth] = makeArrOfDigits(num);

	const ticketOptions = {
		fstPart: fst + snd + trd,
		sndPart: foth + fith + sth,
		even: fst + trd + fith,
		odd: snd + foth + sth
	}

	return ticketOptions;
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

	console.log();
	if (Object.keys(par).length !== 2) {
		return 'object must have 2 parameters';
	}

	return 'checked';
}

const getNumsOfHardAndSimple = obj => {
	let {min, max} = obj;

	if ( min > max) {
		[min, max] = [max, min];
	}

	let [simple, hard] = [0, 0];

	for (let i = min; i <= max; i += 1) {
		const {fstPart, sndPart, even, odd} = computedTicket(i);

		if (fstPart === sndPart) {
			simple += 1;
		}

		if (even === odd) {
			hard += 1;
		}
	}

	return {simple, hard}
}

const getWinnerMethod = obj => {
	const check = checkParam(obj);

	if (check === 'checked') {
		const {simple, hard} = getNumsOfHardAndSimple(obj);

		let winner;

		if (simple > hard) {
			winner = 'simple';
		}

		if (simple < hard) {
			winner = 'hard';
		}

		if (simple === hard) {
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