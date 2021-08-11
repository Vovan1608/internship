import { renderChessDesk } from './src/task1.js';
import { checkEnvelops } from './src/task2.js';
import { sortiTriangles } from './src/task3.js';
import { getPalindrome } from './src/task4.js';
import { getWinnerMethod } from './src/task5.js';
import { getNumericalSiquence } from './src/task6.js';
import { getFibonachiFromRange } from './src/task7.js';
import { triangels } from './src/data.js';

// console.log(renderChessDesk(5, 11, '#'));
// console.log(checkEnvelops({a: 2, b: 3}, {c: 4, d: 3}));
// console.log(sortiTriangles(triangels));
// console.log(getPalindrome(12344327));
// console.log(getWinnerMethod({min: 200200, max: 222222}));
// console.log(getNumericalSiquence(7, 111));
console.log(getFibonachiFromRange({length: 50}));
console.log(getFibonachiFromRange({min: 5, max: 10}));
// console.log(getFibonachiFromRange({min: 65, max: 59, length: 50}));