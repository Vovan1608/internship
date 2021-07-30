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
			return `${key} should be greater then ${min} and less or equal then ${max}`;
		}

		if (key === 'symbol' && !isString(key) && !isLengthOne(key)) {
			return `${key} should be string length 1`;
		}
	}

	return true;
}

const renderChessDesk = (height, width, symbol) => {
	if (chekParams(height, width, symbol)) {
		let chessDesk = '\n';
		
		// for (let i = 0; i < height; i += 1) {

		// 	for (let j = 0; j < width; j += 1) {

		// 		if (!(i % 2)) {
		// 			chessDesk += !(j % 2) ? symbol : ' ';
		// 		} else {
		// 			chessDesk += !(j % 2) ? ' ' : symbol;
		// 		}
		// 	}

		// 	chessDesk += '\n';
		// }

		return chessDesk;
	}

	return {status: 'failed', reason: chekParams(height, width, symbol)}
}

// console.log(renderChessDesk(5, 10, '#'));
// console.log(renderChessDesk());
console.log(renderChessDesk(5, 10, '#'));