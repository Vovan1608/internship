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

const reverse = str => {
	let resStr = '';

  for (let i = str.length - 1; i >= 0; resStr += str[i--]) { }

	return resStr;
}

const getArrOfPalindromes = num => {
	const numAsStr = String(num);
	const limit = numAsStr.length;
	const palindromStore = [];

	for (let i = 0; i < limit; i += 1) {

		for (let j = 0; j < limit; j += 1) {
			const tempStr = numAsStr.slice(i, i + j + 1);
			const tempStrRev = reverse(tempStr);

			if (tempStr === tempStrRev && tempStr.length > 1) {
				palindromStore.push(tempStr);
			}
		}
	}

	return palindromStore;
}

const getPalindrome = num => {
	const check = checkParam(num);

	if (check === 'check') {
		const palStore = getArrOfPalindromes(num);

		const result = palStore.reduce((cur, next) => {
			return cur.length - next.length >= 0 ? cur : next;
		});

		return palStore.length && result || 0;
	}

	return {status: 'failed', reason: check}
}

export {getPalindrome}