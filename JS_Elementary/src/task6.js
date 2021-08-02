import {isInteger} from './helpers.js';

const checkParams = (...params) => {
	if (!params.length) {
		return 'not params at all';
	}

	for (let el of params) {
		if (!isInteger(el)) {
			return `parameters shoud be an iteger number`;
		}

		if (el < 0) {
			return `parameters should be pozitive number`;
		}
	}
}

const getNumericalSiquence = (length, minSqrVal) => {
	const check = checkParams(length, minSqrVal);

	if (!check) {
		let count = 0;

		return (
			Array
				.from({length}, _ => count++)
				.filter(el => el * el >= minSqrVal)
				.join(',')
		);
	}

	return {status: 'failed', reason: check}
}

// console.log(getNumericalSiquence(20, 90));