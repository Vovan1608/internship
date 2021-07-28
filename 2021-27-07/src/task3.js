import { isString } from './helpers.js';

const getShortestWord = str => {
	if (isString(str)) {
		let newStr = str.replace(/\W/g, ' ').match(/\w+/g);

		return newStr.reduce((cur, el) => {
			return cur.length < el.length ? cur : el;
		}).length;
	} else {
		return 'str is not string';
	}
}