import { fruits } from './data.js';

const result = fruits.reduce((acc, el) => {
	if (el[0].toLowerCase() === 'а') {
		acc[acc.length] = el;
	}

	return acc;
}, []);