import {
	isInRange,
	isInteger,
	isString,
	isLengthOne,
	isEven
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
		const SPACE = ' ';
		const lineBreak = '\n';
		const limit = height * width + 1;

		let str = '';
		let newLine = 1;

		for (let i = 1; i < limit; i += 1) {

			if (!isEven(width) || isEven(width) && !isEven(newLine)) {
				str += !isEven(i) ? char : SPACE;
			}

			if (isEven(width) && isEven(newLine)) {
				str += !isEven(i) ? SPACE : char;
			}

			if (i % width === 0) {
				str += lineBreak;
				newLine += 1;
			}
		}

		const resultStr = str.slice(0, -1);

		return resultStr;
	}

	return {status: 'failed', reason: check}
}

export {renderChessDesk}