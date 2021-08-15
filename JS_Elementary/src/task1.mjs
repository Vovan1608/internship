import {
	isInRange,
	isInteger,
	isString,
	isLengthOne,
	isEven
} from './helpers.mjs';

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

	return 'checked';
}

const renderChessDesk = (height, width, char) => {
	const check = chekParams(height, width, char);

	if (check === 'checked') {
		const SPACE = ' ';
		const lineBreak = '\n';
		const EMPTY = '';
		const isHeightMoreOne = height > 1;

		let [tempStr, oddLine, evenLine]= [EMPTY, EMPTY, EMPTY];

		for (let i = 1; i <= width; i += 1) {
			oddLine += isEven(i) ? SPACE : char;

			if (isHeightMoreOne) {
				evenLine += isEven(i) ? char: SPACE;
			}
		}

		tempStr += oddLine + lineBreak;

		if (isHeightMoreOne) {
			tempStr += evenLine + lineBreak;
			tempStr += tempStr.repeat((height - 2) / 2);
		}

		if (isHeightMoreOne && !isEven(height)) {
			tempStr += oddLine + lineBreak;
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