const isIPv4 = str => {
	const DEC_NUM_IN_IPv4 = 4;
	const arrNums = str.split('.');

	return (
		typeof str === 'string' &&
		arrNums.length === DEC_NUM_IN_IPv4 &&
		arrNums.every(el => el !== '' && el >= 0 && el < 256)
	);
}

const MORSE_CODE = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
}

const isStringAsMorzeCode = code => {
	return (
		typeof code === 'string' &&
		[...code].every(el => /\.|-|\s/.test(el))
	);
}

const doInt = (dividend, divider) => ~~(dividend / divider);

const isNaturalIntNum = num => {
  return !isNaN(num) && Number.isInteger(num) && num > 0 && Number.isFinite(num);
}

const isMonth = month => {
  return isNaturalIntNum(month) && month > 0 && month <= 12;
}

const isDay = day => {
  return isNaturalIntNum(day) && day > 0 && day <= 31;
}

export {
	isIPv4,
	MORSE_CODE,
	isStringAsMorzeCode,
	doInt,
  isNaturalIntNum,
  isMonth,
  isDay
}