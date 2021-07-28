
const checkTicTacToe = arr => {
	const POSSIBLE_NUM_OF_ELEM = 3;

	try {
		if (Array.isArray(arr) && arr.length === POSSIBLE_NUM_OF_ELEM) {
			
		} else {
			throw new Error('arr should be array ahd has length 3');
		}
	} catch(e) {
		console.log(e.message);
	}

}

const res = checkTicTacToe('[[0,0,1], [0,2,0], [0,0,0]]');
console.log(res);