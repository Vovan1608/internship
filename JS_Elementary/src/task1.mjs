import {
	isInRange,
	isInteger,
	isString,
	isLengthOne,
	isEven
} from './helpers.mjs';

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
		const EMPTY = '';
		const HEIGHT_IS_MORE_ONE = height > 1;

		let [oddLine, evenLine, tempStr] = [EMPTY, EMPTY, EMPTY];

		for (let i = 0; i < width; i += 1) {
			oddLine += isEven(i) ? char : SPACE;

			if (HEIGHT_IS_MORE_ONE) {
				evenLine += isEven(i) ? SPACE : char;
			}
		}

		tempStr += HEIGHT_IS_MORE_ONE ? oddLine + lineBreak + evenLine + lineBreak : oddLine;

		for (let i = 2; i < height; i += 1) {
			tempStr += isEven(i) ? oddLine : evenLine;
			tempStr += lineBreak;
		}

		const resStr = HEIGHT_IS_MORE_ONE ? tempStr.slice(0, -1) : tempStr;

		return resStr;
	}

	return {status: 'failed', reason: check}
}

export {renderChessDesk}