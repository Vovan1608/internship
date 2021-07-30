import {
	isInRange,
	isInteger,
	isString,
	isLength
} from './helpers.js';

const chekParams = (height, width, symbol) => {
	if (!isInteger(height) || !isInteger(width)) {
		return 'parameter\'s not number or not integer';
	}

	if (isInRange(height, 0, 20) || isInRange(width, 0, 20)) {
		return 'parameters should be greater then 0 and less or equal then 20';
	}

	if (!isString(symbol)) {
		return 'symbol should be string';
	}

	if (!isLength(symbol, 1)) {
		return "symbol's length should be 1";
	}
}

const renderChessDesk = (height, width, symbol) => {
	if (!chekParams(height, width, symbol)) {
		let chessDesk = '\n';

		for (let i = 0; i < height; i += 1) {

			for (let j = 0; j < width; j += 1) {

				if (!(i % 2)) {
					chessDesk += !(j % 2) ? symbol : ' ';
				} else {
					chessDesk += !(j % 2) ? ' ' : symbol;
				}
			}

			chessDesk += '\n';
		}

		return chessDesk;
	}

	return chekParams(height, width, symbol);
}

console.log(renderChessDesk(5, 10, '#'));