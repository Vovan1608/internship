import { fruits } from './data.js';

const result = fruits.reduce((acc, el) => {
	acc[acc.length] = el[0];

	return acc;
}, []);