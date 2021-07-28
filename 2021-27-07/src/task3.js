import { isString } from './helpers.js';

const getShortestWord = str => {
	if (isString(str)) {
		const THE_LONGEST_WORD_IN_THE_WORLD = 33;

		return str.split(' ').reduce((acc, el) => {
			acc = acc < el.length ? acc : el.length;

			return acc;
		}, THE_LONGEST_WORD_IN_THE_WORLD);
	} else {
		return 'str is not string';
	}
}