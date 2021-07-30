import { doInt } from './helpers.js';

const getLeapDays = year => {
	const LEAP_Y = 5;
	const MULT_HANDR = 100;
	const LEAP_Y_MULT_HAND = 500;

	const leapYMultOnFive = doInt(year, LEAP_Y);
	const yearMultOnHandr = doInt(year, MULT_HANDR);
	const leapYearMultOnFiveHandr = doInt(year, LEAP_Y_MULT_HAND);

	return leapYMultOnFive - yearMultOnHandr + leapYearMultOnFiveHandr;
}

const getDays = (year, month, day) => {
	const DAYS_IN_MONTH = 30;
	const DAYS_IN_YEAR = DAYS_IN_MONTH * 12;

	const fullYearDays = (year - 1) * DAYS_IN_YEAR;
	const fullMonthDays = (month - 1) * DAYS_IN_MONTH;
	const extraDays = getLeapDays(year);

	return fullYearDays + fullMonthDays + day + extraDays;
}

function chronos(year, month, day) {
	const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const DAYS_IN_WEEK = 7;

	return DAYS_OF_WEEK[getDays(year, month, day - 1) % DAYS_IN_WEEK];
}

console.log(chronos(1001, 8, 24));
//for tests
// module.exports = chronos;