import {
	isArr,
	isNumber,
	isObject
} from './helpers.mjs';

const isValidLengthOfObj = obj => {
	const NUM_PROPS = 4;
	return Object.keys(obj).length === NUM_PROPS;
}

const isValidPropVerticesLength = str => {
	const LENGTH_VERT = 3;
	return str.length === LENGTH_VERT;
}

const isPropVertMatchesNamesOfSides = obj => {
	const { vertices } = obj;
	const keys = Object.keys(obj);
	const keysOfVer = keys.filter(el => el !== 'vertices');

	return vertices === keysOfVer.join('').toUpperCase();
}

const isTriangel = (...triangelsSides) => {
	const [a, b, c] = triangelsSides;
	return (
		triangelsSides.every(el => isNumber(el) && el > 0) &&
		c <= a + b && a <= b + c && b <= a + c
	);
}

const isValidValOfVertProps = obj => {
	const triangelsSides = Object.values(obj).filter(el => isNumber(el));
	return isTriangel(...triangelsSides);
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

		if (!isValidValOfVertProps(el)) {
			return `can\'t be triangle with that parameters in ${el.vertices}`;
		}

		for (let [key, val] of Object.entries(el)) {

			if (key === 'vertices' && !isValidPropVerticesLength(val)) {
				return `${val} of property ${key} of element ${el.vertices} is wrong`;
			}

			if (key === 'vertices' && !isPropVertMatchesNamesOfSides(el)) {
				return `names of properties of vertices propety don\'t match ${val}`;
			}
		}
	}

	return 'checked';
}

const getArea = obj => {
	const [a, b, c] = Object.values(obj).filter(el => typeof el === 'number');
	// Geron's formula
	const halfP = (a + b + c) / 2;
	const area = Math.floor(Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c)));

	return area;
}

const sortTriangles = arr => {
	const check = checkParams(arr);

	if (check === 'checked')  {
		const copy = [...arr];
		const sortedStore = copy.sort((cur, nxt) => getArea(nxt) - getArea(cur));
		const names = sortedStore.map(el => el.vertices);

		return names;
	}

	return {status: 'failed', reason: check}
}

export {sortTriangles}
