const rotateMatrix = matrix => {
	return matrix.map((_, i) => matrix.map(row => row[i]));
}

const getDiagonal = (matrix, direct) => {
	const LAST_IND_INT_ARR = 2;
	return matrix.map((el, i) => direct ? el[LAST_IND_INT_ARR - i] : el[i]);
}

const getOptions = matrix => {
	const [row1, row2, row3] = matrix;
	const [col1, col2, col3] = rotateMatrix(matrix);
	const diag1 = getDiagonal(matrix);
	const diag2 = getDiagonal(matrix, true);

	return [row1, row2, row3, col1, col2, col3, diag1, diag2];
}

const checkTicTacToe = matrix => {
	const NUM_OF_ELEM = 3;

	try {
		if (Array.isArray(matrix) && matrix.length === NUM_OF_ELEM) {
			const NOT_FINISHED = -1;
			const DRAW = 0;

			for (let option of getOptions(matrix)) {
				if (option.every((el, _, arr) => el === arr[0])) {
					return option[0];
				}
			}

			return matrix.flat().some(el => !el) ? NOT_FINISHED : DRAW;
		} else {
			throw new Error('arr should be array and has length 3');
		}
	} catch(e) {
		console.error(e.message);
	}
}