import { isIPv4 } from './helpers.js';

const convertIPV4ToDecimal = ipv4 => {
	const RADIX = 2;
	const BITS = 8;

	const res = ipv4
		.split('.')
		.reduce((acc, oktet) => {
			return acc + Number(oktet).toString(RADIX).padStart(BITS, '0');
		}, 0);

	return parseInt(res, RADIX);
}

const countIpAdresses = (ipStart, ipEnd) => {
	if (isIPv4(ipStart) && isIPv4(ipEnd)) {
		return Math.abs(convertIPV4ToDecimal(ipEnd) - convertIPV4ToDecimal(ipStart));
	} else {
		return 'wrong IPv4';
	}
}

// console.log(countIpAdresses("10.0.0.0", "10.0.0.50"));