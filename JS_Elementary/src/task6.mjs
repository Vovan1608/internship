import {isInteger} from './helpers.mjs';

const checkParams = (...params) => {
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

	return 'checked';
}

const getNumericalSiquence = (length, minSqrVal) => {
	const check = checkParams(length, minSqrVal);

	if (check === 'checked') {
		let count = Math.ceil(Math.sqrt(minSqrVal)) - 1;
		const resultArr = Array.from({length}, _ => count += 1);
		const resultStr = resultArr.toString();

		return resultStr;
	}

	return {status: 'failed', reason: check}
}

export {getNumericalSiquence}