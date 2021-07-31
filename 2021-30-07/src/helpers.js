const isQuipuStr = str => {
	const strNotContainWordsAndDigits = /\W\D/g;
	return typeof str === 'string' && strNotContainWordsAndDigits.test(str);
}

const isNaturalMoreOne = num => Number.isInteger(num) && num > 1;

export {
	isQuipuStr,
	isNaturalMoreOne
}