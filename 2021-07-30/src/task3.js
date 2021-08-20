import { isArrOfEvery25_50_100 } from './helpers.js';

const willISellAllTickets = line => {
	if (isArrOfEvery25_50_100(line)) {
		const TWENTY_FIVE = 25;
		const FIFTY = 50;
		const HUND = 100;

		let flag = 'YES';

		if (line[0] === FIFTY || line[0] === HUND || line[1] === HUND || line[2] === HUND) {
			return 'NO';
		}

		const bill25$AsChangeFromHundr = 3;
		const limit = line.length;
		let bill25$ = 0;
		let bill50$ = 0;

		for (let i = 0; i < limit; i += 1) {

			if (line[i] === TWENTY_FIVE) {
				bill25$ += 1;
				continue;
			}

			if (line[i] === FIFTY && bill25$) {
				bill25$ -= 1;
				bill50$ += 1;
				continue;
			}

			if (line[i] === HUND && bill25$ && bill50$){
				bill50$ -= 1;
				bill25$ -= 1;
				continue;
			}

			if (line[i] === HUND && bill25$ === bill25$AsChangeFromHundr){
				bill25$ -= bill25$AsChangeFromHundr;
				continue;
			}

			flag = 'NO';
			break;
		}

		return flag;
	}

	return 'wrong line';
}

// console.log(willISellAllTickets([25, 50, 25, 50, 25, 25, 50, 100]));