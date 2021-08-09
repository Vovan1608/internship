import {
	isInRange,
	isInteger,
	isString,
	isLengthOne
} from './helpers.js';

const chekParams = (...params) => {
	const [height, width, symbol] = params;
	const min = 1;
	const max = 20;

	for (let [key, val] of Object.entries({ height, width, symbol })) {

		if (!val) {
			return `there isn't ${key} parameter`;
		}

		if (key !== 'symbol' && !isInteger(val)) {
			return `${key} is not a number or is not an integer`;
		}

		if (key !== 'symbol' && !isInRange(val, min, max)) {
			return `${key} should be greater then ${min} and less or equal ${max}`;
		}

		if (key === 'symbol' && !isString(val)) {
			return `${key} should be string`;
		}

		if (key === 'symbol' && !isLengthOne(val)) {
			return `${key} should be length 1`;
		}
	}

	return 'check';
}

const renderChessDesk = (height, width, char) => {
	const check = chekParams(height, width, char);

	if (check === 'check') {
		const space = ' ';
		const lineBreak = '\n';
		let resultStr = '';

		for (let i = 0; i < height; i += 1) {

			for (let j = 0; j < width; j += 1) {
				resultStr += (i + j) % 2 ? space : char;
			}

			resultStr += lineBreak;
		}

		// const resultStr = Array.from({length: height},
		// 	(_, i) => Array.from({length: width},
		// 		(_, j) => (i + j) % 2 ? space : symbol).join('')).join('\n');

		return resultStr;
	}

	return {status: 'failed', reason: check}
}

export {renderChessDesk}