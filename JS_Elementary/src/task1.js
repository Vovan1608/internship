import {
	isInRange,
	isInteger,
	isString,
	isLengthOne
} from './helpers.js';

const chekParams = (height, width, symbol) => {
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
}

const renderChessDesk = (height, width, symbol) => {
	const check = chekParams(height, width, symbol);

	if (!check) {
		return (
			Array.from( Array(height), (_, i) => {
				return Array.from( Array(width), (_, j) => (i + j) % 2 ? ' ' : symbol).join('')
			}).join('\n')
		);
	}

	return {status: 'failed', reason: check}
}

export {renderChessDesk}