
const checkTicTacToe = arr => {
	const NUM_OF_ELEM = 3;

	try {
		if (Array.isArray(arr) && arr.length === NUM_OF_ELEM) {
			if (!arr.flat().every(el => Boolean(el))) {
				return 0;
			}

			if (arr.flat().some(el => !Boolean(el))) {
				return -1;
			}
		} else {
			throw new Error('arr should be array ahd has length 3');
		}
	} catch(e) {
		console.error(e.message);
	}

}

const res = checkTicTacToe([[0,1,0], [0,0,2], [0,0,0]]);
console.log(res);