import { isQuipuStr } from './helpers.js';

const getNum = str => {
	const matchTildaAtOneOrMore = /[@~]+/g;
	const matchAtInEnd = /@$/;
	const matchAtsZeroAndMoreWithTilda = /@*~/g;
	return Number(str
		.replace(matchTildaAtOneOrMore,
			el => el
				.replace(matchAtInEnd, at => `${at}~`)
				.match(matchAtsZeroAndMoreWithTilda)
				.map(el => el.length - 1)
				.join('')
		));
}

const doMathAction = (znak, left, right) => {
	switch (znak) {
	case '*':
		return left * right;
	case '-':
		return left - right;
	case '/':
		return left / right;
	default:
		return left + right;
	}
}

const getQuipuStr = num => {
	const matchNums = /\d/g;
	const matchAtWithTildaInEnd = /@~$/g;

	return String(num)
		.replace(matchNums, num => `${'@'.repeat(num)}~`)
		.replace(matchAtWithTildaInEnd,'@');
}

const calculate = quipuStr => {
	if (isQuipuStr(quipuStr)) {
		const matchZnak = /[-\*\/\+]/g;
		const znak = quipuStr.match(matchZnak).join();
		const [leftSide, rightSide] = quipuStr.split(znak);
		const res = doMathAction(znak, getNum(leftSide), getNum(rightSide));
		return getQuipuStr(res);
	}

	return 'wrong quipu string';
}

console.log(calculate('@~@@+@@~~'));