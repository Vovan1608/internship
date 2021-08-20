import { isArrAndIsNotEmpty, isEveryNaturalNum } from './helpers.js';

const getSumMin = arr => {
	if (isArrAndIsNotEmpty(arr)) {
		return arr.reduce((acc, el) => {
			if (isEveryNaturalNum(el)) {
				return acc += Math.min(...el);
			}
		}, 0) || 'every element should be number';
	} else {
		return 'array is not array or empty';
	}
}