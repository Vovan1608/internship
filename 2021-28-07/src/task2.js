
const checkTicTacToe = arr => {
	const NUM_OF_ELEM = 3;

	try {
		if (Array.isArray(arr) && arr.length === NUM_OF_ELEM) {
			const [a, b, c] = arr;

			if (arr.flat().some(el => el === 0)) {
				return -1;
			}

			
		} else {
			throw new Error('arr should be array and has length 3');
		}
	} catch(e) {
		console.error(e.message);
	}

}

const res = checkTicTacToe([[1,2,2], [1,1,1], [2,1,2]]);
console.log(res);