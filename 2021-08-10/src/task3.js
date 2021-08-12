import { fruits } from './data.js';

const result = fruits.reduce((acc, el, i) => {
	acc[acc.length] = `${i + 1}: ${el}`;

	return acc;
}, []);