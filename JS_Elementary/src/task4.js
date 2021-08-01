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
}

const getPalindrome = num => {
	const check = checkParam(num);

	if (!check) {
		const numStr = String(num);
		const palindromArr = [];

		[...numStr].forEach((_, i) => [...numStr].forEach((_, j) => {
			const palindrome = numStr.slice(i, j + i + 1);
			const palindromeReverse = palindrome.split('').reverse().join('');

			if (palindrome === palindromeReverse && palindrome.length > 1) {
				palindromArr.push(palindrome);
			}
		}));

		let res;

		if (palindromArr.length) {
			res = palindromArr.reduce((cur, next) => cur.length - next.length >= 0 ? cur : next);
		}

		return res || 0;
	}

	return {status: 'failed', reason: check}
}

// console.log(getPalindrome(12344327));