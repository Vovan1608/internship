import {isInteger} from './helpers.js';

const checkParams = (...params) => {
	const [length, minSqrVal] = params;

	if (!params.length) {
		return 'not params at all';
	}

	for (let el of params) {
		if (!isInteger(el)) {
			return `parameters shoud be an iteger number`;
		}

		if (el <= 0) {
			return `parameters should be greater 0`;
		}
	}
}

const getNumericalSiquence = (length, minSqrVal) => {
	const check = checkParams(length, minSqrVal);

	if (!check) {
		let count = Math.ceil(Math.sqrt(minSqrVal));

		return Array.from({length}, _ => count++).join(',');
	}

	return {status: 'failed', reason: check}
}

export {getNumericalSiquence}