const isQuipuStr = str => {
	const strNotContainWordsAndDigits = /\W\D/g;
	return typeof str === 'string' && strNotContainWordsAndDigits.test(str);
}

export {
	isQuipuStr
}