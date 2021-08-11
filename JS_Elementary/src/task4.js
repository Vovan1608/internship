import {
	isInRange,
	isInteger
} from './helpers.js';

const checkParam = param => {
	const min = 10;
	const max = Number.MAX_SAFE_INTEGER;

	if (!param) {
		return 'not parameter at all';
	}

	if (!isInteger(param)) {
		return 'num should be integer number';
	}

	if (!isInRange(param, min, max)) {
		return `number shoul be more or equal ${min} and less or equal ${max}`;
	}

	return 'check';
}

const expandFromCenter = (str, leftSide, rightSide) => {
	while(leftSide >= 0 && rightSide < str.length && str[leftSide] === str[rightSide]) {
		leftSide -= 1;
		rightSide += 1;
	}

	return rightSide - leftSide - 1;
}

const getPalindrome = num => {
	const check = checkParam(num);

	if (check === 'check') {
		const numAsStr = String(num);
		const limit = numAsStr.length;
		let palindrom = '';
		let tempStr = '';

		let start = 0;
		let end = 0;

		for (let i = 0; i < limit; i += 1) {
			const len1 = expandFromCenter(numAsStr, i, i);
			const len2 = expandFromCenter(numAsStr, i, i + 1);
			const len = Math.max(len1, len2);

			if (len > end - start && len > 1) {
				start = Math.ceil(i - (len - 1) / 2);
				end = Math.floor(i + len / 2);
				tempStr = numAsStr.substring(start, end + 1);
			}

			if (palindrom.length < tempStr.length) {
				palindrom = tempStr;
			}
		}

		return palindrom;
	}

	return {status: 'failed', reason: check}
}

export {getPalindrome}