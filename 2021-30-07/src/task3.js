import { isArrOfEvery25_50_100 } from './helpers.js';

const willISellAllTickets = line => {
	if (isArrOfEvery25_50_100(line)) {
		const TWENTY_FIVE = 25;
		const FIFTY = 50;
		const HUND = 100;

		if (line[0] === FIFTY || line[0] === HUND || line[1] === HUND || line[2] === HUND) {
			return 'NO';
		}

		const numOfBill25$AsChangeFromHundr = 3;
		let bill25$ = 0;
		let bill50$ = 0;
		let limit = line.length;

		for (let i = 0; i < limit; i += 1) {

			if (line[i] === TWENTY_FIVE) {
				bill25$ += 1;
				continue;
			}

			if (line[i] === FIFTY) {
				if (bill25$) {
					bill25$ -= 1;
					bill50$ += 1;
				} else {
					return 'NO';
				}
			}

			if (line[i] === HUND){
				if (!bill50$ && bill25$ >= numOfBill25$AsChangeFromHundr) {
					bill25$ -= numOfBill25$AsChangeFromHundr;
				} else if (bill50$ && bill25$) {
					bill25$ -= 1;
					bill50$ -= 1;
				} else {
					return 'NO';
				}
			}
		}

		return 'YES';
	}

	return 'wrong line';
}

// console.log(willISellAllTickets([25, 50, 25, 50, 25, 25, 50, 100]));