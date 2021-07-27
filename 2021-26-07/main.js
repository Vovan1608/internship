'use strict';

// ===== HELPERS =====
const checkIsMoreAndLess = (num, min, max) => num > min && num <= max;

const checkNumIsNaturalBiggerMinLessOrEqualMax = (num, min, max) => {
	return 	typeof num === 'number' &&
					!Number.isNaN(num) &&
					checkIsMoreAndLess(num, min, max) &&
					Number.isInteger(num);
}

const getDataFromUser = (message, min, max) => {
	let parameter;

	do {
		parameter = Number(prompt(`${message}. It should be greater then ${min} and less then ${max + 1}`, '1'));
	} while (!checkNumIsNaturalBiggerMinLessOrEqualMax(parameter, min, max));

	return parameter;
}

const sortFromBiggerToLess = arr => arr.sort((cur, next) => next - cur);

// ===== TASK1 =====
const getFullDataForRepair = () => {
	const min = 0;
	const max = 1000;

	return {
		length: getDataFromUser('Enter length of wall', min, max),
		width: getDataFromUser('Enter width of wall', min, max),
		height: getDataFromUser('Enter height of wall', min, max)
	}
}

const calcOfPaint = () => {
	const {length, width, height} = getFullDataForRepair();

	const SQUARE_METERS_FROM_A_CAN_OF_PAINT = 16;

	return Math.ceil((length + width) * height / SQUARE_METERS_FROM_A_CAN_OF_PAINT);
}

// alert(calcOfPaint());

// ===== TASK2 =====
const getFullDataForGoldenSand = () => {
	const min = 0;
	const max = 100;

	return {
		A1: getDataFromUser('Enter cost for first type', min, max),
		A2: getDataFromUser('Enter cost for second type', min, max),
		A3: getDataFromUser('Enter cost for third type', min, max),
		B1: getDataFromUser('Enter value of first container', min, max),
		B2: getDataFromUser('Enter value of second container', min, max),
		B3: getDataFromUser('Enter value of third container', min, max),
	}
}

const calcCostOfGoldenSand = () => {
	const {A1, A2, A3, B1, B2, B3} = getFullDataForGoldenSand();

	const arrOfSortedCosts = sortFromBiggerToLess([A1, A2, A3]);
	const arrOfSortedValues = sortFromBiggerToLess([B1, B2, B3]);

	let result = 0;

	for (let i = 0; i < arrOfSortedCosts.length; i += 1) {
		result += arrOfSortedCosts[i] * arrOfSortedValues[i];
	}

	return result;
}

// alert(calcCostOfGoldenSand());

// ===== TASK3 =====
const getDataForLuckyTicket = () => {
	const min = -1;
	const max = 10 ** 6 - 1;

	return getDataFromUser('Enter a number of ticket', min, max);
}

const isLuckyTicket = () => {
	const num = getDataForLuckyTicket();
	const MIN_LUCKY_TICKET_NUM = 1001;

	if (num < MIN_LUCKY_TICKET_NUM) {
		return 'NO';
	}

	const MAX_LENGTH_OF_TICKET_NUM = 6;
	const HALF_LENGTH_OF_TICKET_NUM = 3;

	let arrOfDigits = [...String(num).padStart(MAX_LENGTH_OF_TICKET_NUM, '0')];

	const {first, second} =  arrOfDigits.reduce((acc, next, i) => {
		acc[i < HALF_LENGTH_OF_TICKET_NUM ? 'first' : 'second'] += Number(next);

		return acc;
	}, {first: 0, second: 0});

	return first === second ? 'YES' : 'NO';
}