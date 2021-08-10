import { fruits } from './data.js';

const result = fruits.reduce((acc, next, i) => {
	acc[i] = next[0];

	return acc;
}, []);