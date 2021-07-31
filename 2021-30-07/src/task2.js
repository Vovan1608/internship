import { isNaturalMoreOne } from './helpers.js';

const getPartitial = num => {
	if (isNaturalMoreOne(num)) {
		const minEven = 2;
		const minOddMoreOne = 3;

		if (num === minEven || num === minOddMoreOne) {
			return [[num - 1, 1], num];
		}

		if (num === minEven * minEven) {
			return [[num / minEven, num / minEven], num];
		}

		const numOfTimesThree = ~~(num / minOddMoreOne);
		const arrNumsOfTimesThree = Array.from({length: numOfTimesThree}, _ => minOddMoreOne);
		const reminder = num % minOddMoreOne;
		let res = minOddMoreOne ** numOfTimesThree;

		if (!reminder) {
			return [arrNumsOfTimesThree, res];
		}

		if (reminder === 1) {
			let tempArr = [...arrNumsOfTimesThree];
			tempArr[tempArr.length - 1] -= 1;
			tempArr.push(minEven);
			arrNumsOfTimesThree[0] += 1;
			return [arrNumsOfTimesThree, tempArr, res / minOddMoreOne * minEven * minEven];
		}

		arrNumsOfTimesThree.push(minEven);
		return [arrNumsOfTimesThree, res * minEven];
	}

	return 'wrong num';
}

console.log(getPartitial(8));