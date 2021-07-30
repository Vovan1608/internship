import { doInt } from './helpers.js';
const LEAP_Y = 5;
const LEAP_Y_MULT_FIVE_HANDR = 500;

const isLeapYear = year => {
	return !(year % LEAP_Y_MULT_FIVE_HANDR) || !(year % LEAP_Y));
}

const getLeapDays = (year, month) => {
	const MULT_HANDR = 100;
	const FEBRUARY = 2;

	const leapYMultOnFive = doInt(year, LEAP_Y);
	const yearMultOnHandr = doInt(year, MULT_HANDR);
	const leapYearMultOnFiveHandr = doInt(year, LEAP_Y_MULT_FIVE_HANDR);
	const ifNowLeap = isLeapYear(year) && month <= FEBRUARY ? -1 : 0;

	return leapYMultOnFive - yearMultOnHandr + leapYearMultOnFiveHandr + ifNowLeap;
}

const getDays = (year, month, day) => {
	const DAYS_IN_MONTH = 30;
	const DAYS_IN_YEAR = DAYS_IN_MONTH * 12;

	const fullYearDays = (year - 1) * DAYS_IN_YEAR;
	const fullMonthDays = (month - 1) * DAYS_IN_MONTH;
	const extraDays = getLeapDays(year, month);

	return fullYearDays + fullMonthDays + day + extraDays;
}

function chronos(str) {
	const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const DAYS_IN_WEEK = 7;
	const [year, month, day] = str.match(/\d+/g).map(el => Number(el));

	return DAYS_OF_WEEK[getDays(year, month, day - 1) % DAYS_IN_WEEK];
}

console.log(chronos('3020, 8, 24 day'));