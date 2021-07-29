import {
	numIsNaturalInteger,
	isEveryElIsArrLengthTwo,
	isArr
} from './helpers.js';

const findChair = (matrix, weNeedChairs) => {
	try {
		if (isArr(matrix) && isEveryElIsArrLengthTwo(matrix) && numIsNaturalInteger(weNeedChairs)) {

			if (!weNeedChairs) {
				return 'Game On';
			}

			const takenChairs = [];

			for (let [occupants, chairs] of matrix) {

				if (weNeedChairs) {
					let freeChairs = chairs - occupants.length;

					if (freeChairs > 0) {

						if (weNeedChairs - freeChairs >= 0) {
							weNeedChairs -= freeChairs;
							takenChairs.push(freeChairs);
						} else {
							takenChairs.push(weNeedChairs);
							break;
						}
					} else {
						takenChairs.push(0);
					}
				}
			}

			return weNeedChairs ? 'Not enough!' : takenChairs;
		} else {
			throw new Error('wrong parameters');
		}
	} catch(e) {
		console.error(e.message);
	}
}