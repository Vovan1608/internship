import {
	isArr,
	isNumber,
	isObject
} from './helpers.js';

const getArea = obj => {
	const [a, b, c] = Object.values(obj).filter(el => typeof el === 'number');
	const halfP = (a + b + c) / 2;

	return ~~Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));
}

const isValidLengthOfObj = obj => {
	const NUM_PROPS = 4;
	return Object.keys(obj).length === NUM_PROPS;
}

const isValidPropVerticesLength = str => {
	const LENGTH_VERT = 3;
	return str.length === LENGTH_VERT;
}

const isPropVertMatchesNames = obj => {
	const { vertices } = obj;
	const keys = Object.keys(obj);
	const keysOfVer = keys.filter(el => el !== 'vertices');

	return vertices === keysOfVer.join('').toUpperCase();
}

const isTriangel = (...nums) => {
	const [a, b, c] = nums;
	return (
		nums.every(el => isNumber(el) && el > 0) &&
		c <= a + b && a <= b + c && b <= a + c
	);
}

const isValidValOfVertProps = obj => {
	const valsOfVer = Object.values(obj).filter(el => isNumber(el));
	return isTriangel(...valsOfVer);
}

const checkParams = arr => {
	if (!isArr(arr)) {
		return 'arr is not defined or is not an array';
	}

	for (let el of arr) {
		if (!isObject(el)) {
			return `${el} is not object`;
		}

		if (!isValidLengthOfObj(el)) {
			return `wrong number of properties of element ${el.vertices}`;
		}

		for (let [key, val] of Object.entries(el)) {
			if (key === 'vertices' && !isValidPropVerticesLength(val)) {
				return `${val} of property ${key} of element ${el.vertices} is wrong`;
			}

			if (key === 'vertices' && !isPropVertMatchesNames(el)) {
				return `names of properties of vertices propety don\'t match ${val}`;
			}
		}

		if (!isValidValOfVertProps(el)) {
			return `can\'t be triangle with that parameters in ${el.vertices}`;
		}
	}
}

const sortiTriangles = arr => {
	const check = checkParams(arr);

	if (!check)  {
		return arr.sort((a, b) => getArea(b) - getArea(a));
	}

	return {status: 'failed', reason: check}
}

export {sortiTriangles}