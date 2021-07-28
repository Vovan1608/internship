import { isArrAndIsNotEmpty } from './helpers.js';

const getTwoOldestAges = arr => {
	const MIN_ARR_LENGTH = 2;

	if (isArrAndIsNotEmpty(arr) && arr.length >= MIN_ARR_LENGTH) {
		return [...arr].sort((a, b) => a - b).slice(-2);
	} else {
		return 'arr is not array or empty or arr\'s length less then 2';
	}
}