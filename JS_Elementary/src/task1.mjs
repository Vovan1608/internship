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

		let [oddLine, evenLine, tempStr] = [EMPTY, EMPTY, EMPTY];

		for (let i = 1; i <= width || i <= width + height - 2; i += 1) {

			if (i <= width) {
				oddLine += isEven(i) ? SPACE : char;
			}

			if (i <= width && height > 1) {
				evenLine += isEven(i) ? char : SPACE;
			}

			if (i === width) {
				tempStr += oddLine + lineBreak;
			}

			if (i === width && height > 1) {
				tempStr += evenLine + lineBreak;
			}

			if (i > width && isEven(width)) {
				tempStr += isEven(i) ? evenLine : oddLine;
				tempStr += lineBreak;
			}

			if (i > width && !isEven(width)) {
				tempStr += isEven(i) ? oddLine : evenLine;
				tempStr += lineBreak;
			}
		}

		const resStr = tempStr.slice(0, -1);

		return resStr;
	}

	return {status: 'failed', reason: check}
}

export {renderChessDesk}




















// for (let i = 1; i <= width ; i += 1) {
// 	if (i <= width) {
// 		oddLine += isEven(i) ? SPACE : char;
// 	}

// 	if (i <= width && height > 1) {
// 		evenLine += isEven(i) ? char : SPACE;
// 	}

// 	if (i === width) {
// 		tempStr += oddLine + lineBreak;
// 	}

// 	if (i === width && height > 1) {
// 		tempStr += evenLine + lineBreak;
// 	}
// }

// for (let i = 3; i <= height; i += 1) {
// 	tempStr += isEven(i) ? evenLine : oddLine;
// 	tempStr += lineBreak;
// }