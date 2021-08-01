import {
	isArr,
	isNumber,
	isObject
} from './helpers.js';

const getArea = obj => {
	const [a, b, c] = Object.values(obj).filter(el => typeof el === 'number');
	const halfP = (a + b + c) / 2;

	return Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));
}

const isValidParamsInObj = obj => {
	const NUM_PROPS = 4;
	const LENGTH_VERT = 3;
	const { vertices } = obj;
	const keys = Object.keys(obj);
	const keysOfVer = keys.filter(el => el !== 'vertices');
	const valsOfVer = Object.values(obj).filter(el => isNumber(el));

	return (
		keys.length === NUM_PROPS &&
		vertices.length === LENGTH_VERT &&
		vertices === keysOfVer.join('').toUpperCase() &&
		isTriangel(...valsOfVer)
	);
}

const isEveryElIsObjWithNormParam = arr => arr.every(el => isObject(el) && isValidParamsInObj(el));

const isTriangel = (...nums) => {
	const [a, b, c] = nums;
	return c <= a + b && a <= b + c && b <= a + c;
}

const checkParams = arr => {
	if (!isArr(arr)) {
		return 'arr is not defined or is not an array';
	}

	if (!isEveryElIsObjWithNormParam(arr)) {
		return `wrong array of objects`;
	}
}

const sortiTriangles = arr => {
	const check = checkParams(arr);

	if (!check)  {
		return arr.sort((a, b) => getArea(b) - getArea(a));
	}

	return {status: 'failed', reason: check}
}

const triangels = [
	{vertices: 'ABC', a: 10, b: 20, c: 22.5},
	{vertices: 'FGH', f: 7, g: 3.9, h: 8},
	{vertices: 'QWE', q: 25, w: 20.7, e: 10},
	{vertices: 'RTY', r: 4, t: 6.8, y: 5},
	{vertices: 'POK', p: 14, o: 28, k: 21.4},
	{vertices: 'JKL', j: 18, k: 22.3, l: 25.1},
]

// console.log(sortiTriangles(triangels));