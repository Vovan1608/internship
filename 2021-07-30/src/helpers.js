const isQuipuStr = str => {
	const strNotContainWordsAndDigits = /\W\D/g;
	return typeof str === 'string' && strNotContainWordsAndDigits.test(str);
}

const isNaturalMoreOne = num => Number.isInteger(num) && num > 1;

const isArr = arr => Array.isArray(arr);

const isEvery25_50_100 = arr => arr.every(el => typeof el === 'number' && [25, 50, 100].includes(el));

const isArrOfEvery25_50_100 = arr => isArr(arr) && isEvery25_50_100(arr);

export {
	isQuipuStr,
	isNaturalMoreOne,
	isArrOfEvery25_50_100
}