import { MORSE_CODE, isStringAsMorzeCode } from './helpers.js';

const decodeLetter = letter => {
  return MORSE_CODE[letter];
}

const decodeWord = word => {
  return word.split(/\s/).map(decodeLetter).join('');
}

const decodeMorse = code => {
	if (isStringAsMorzeCode(code)) {
		return code.trim().split(/\s{3}/).map(decodeWord).join(' ');
	}

	return 'wrong string';
}

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));