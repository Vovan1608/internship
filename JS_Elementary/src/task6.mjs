import {isInteger} from './helpers.mjs';

const checkParams = (...params) => {

	if (!params) {
		return 'not params at all';
	}

	for (let el of params) {

		if (!el) {
			return 'shold be two parameters';
		}

		if (!isInteger(el)) {
			return 'parameters shoud be an iteger number';
		}

		if (el <= 0) {
			return 'parameters should be greater 0';
		}
	}

	return 'checked';
}

const getNumericalSiquence = (length, minSqrVal) => {
	const check = checkParams(length, minSqrVal);

	if (check === 'checked') {
		let start = Math.ceil(Math.sqrt(minSqrVal));
		const limit = start + length;
		let result = '';

		for (; start < limit; result += `${start++},`) {}

		return result.slice(0, -1);
	}

	return {status: 'failed', reason: check}
}

export {getNumericalSiquence}