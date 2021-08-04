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

const getArrOfPalindromes = num => {
	const numStr = String(num);
	const temp = Array.from(numStr);
	const palindromArr = [];

	temp.forEach((_, i) => temp.forEach((_, j) => {
		const palindrome = numStr.slice(i, j + i + 1);
		const palindromeReverse = [...palindrome].reverse().join('');

		if (palindrome === palindromeReverse && palindrome.length > 1) {
			palindromArr.push(palindrome);
		}
	}));

	return palindromArr;
}

const getPalindrome = num => {
	const check = checkParam(num);

	if (!check) {
		const palArr = getArrOfPalindromes(num);

		const res = palArr.reduce((cur, next) => {
			return cur.length - next.length >= 0 ? cur : next;
		});

		return palArr.length && res || 0;
	}

	return {status: 'failed', reason: check}
}

console.log(getPalindrome(12344327));