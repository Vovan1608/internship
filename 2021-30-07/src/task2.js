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

		const numOfTimesThree = Math.floor(num / minOddMoreOne);
		const arrNumsOfTimesThree = Array.from({length: numOfTimesThree}, _ => minOddMoreOne);
		const reminder = num % minOddMoreOne;
		let res = minOddMoreOne ** numOfTimesThree;
		let resultArr;

		if (!reminder) {
			resultArr = [arrNumsOfTimesThree, res];
		}

		if (reminder === 1) {
			let tempArr = [...arrNumsOfTimesThree];
			tempArr[tempArr.length - 1] -= 1;
			tempArr.push(minEven);
			arrNumsOfTimesThree[0] += 1;
			resultArr = [arrNumsOfTimesThree, tempArr, res / minOddMoreOne * minEven * minEven];
		}

		arrNumsOfTimesThree.push(minEven);
		resultArr = [arrNumsOfTimesThree, res * minEven];

		return resultArr;
	}

	return 'wrong num';
}

// console.log(getPartitial(8));