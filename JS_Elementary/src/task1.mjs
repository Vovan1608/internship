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
	let message = 'checked';

	for (let [key, val] of Object.entries({ height, width, symbol })) {

		if (!val) {
			message = `there isn't ${key} parameter`;
			break;
		}

		if (key !== 'symbol' && !isInteger(val)) {
			message = `${key} is not a number or is not an integer`;
			break;
		}

		if (key !== 'symbol' && !isInRange(val, min, max)) {
			message = `${key} should be greater then ${min} and less or equal ${max}`;
			break;
		}

		if (key === 'symbol' && !isString(val)) {
			message = `${key} should be string`;
			break;
		}

		if (key === 'symbol' && !isLengthOne(val)) {
			message = `${key} should be length 1`;
			break;
		}
	}

	return message;
}

const renderChessDesk = (height, width, char) => {
	const check = chekParams(height, width, char);

	if (check === 'checked') {
		const SPACE = ' ';
		const LINE_BREAK = '\n';
		const EMPTY = '';
		const IS_HEIGHT_MORE_ONE = height > 1;

		let [tempStr, oddLine, evenLine]= [EMPTY, EMPTY, EMPTY];

		for (let i = 1; i <= width; i += 1) {
			oddLine += isEven(i) ? SPACE : char;

			if (IS_HEIGHT_MORE_ONE) {
				evenLine += isEven(i) ? char: SPACE;
			}
		}

		oddLine += LINE_BREAK;
		tempStr += oddLine;

		if (IS_HEIGHT_MORE_ONE) {
			tempStr += evenLine + LINE_BREAK;
			tempStr += tempStr.repeat((height - 2) / 2);
		}

		if (IS_HEIGHT_MORE_ONE && !isEven(height)) {
			tempStr += oddLine;
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