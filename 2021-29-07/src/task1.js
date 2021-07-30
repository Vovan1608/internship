import { isIPv4 } from './helpers.js';

const convertIPV4ToDecimal = ipv4 => {
	const RADIX = 2;
	const BITS = 8;
	const res = ipv4
		.split('.')
		.map(oktet => Number(oktet).toString(RADIX).padStart(BITS, '0'))
		.reduce((acc, cur) => acc + cur, '');

	return parseInt(res, RADIX);
}

const countIpAdresses = (ipStart, ipEnd) => {
	if (isIPv4(ipStart) && isIPv4(ipEnd)) {
		return convertIPV4ToDecimal(ipEnd) - convertIPV4ToDecimal(ipStart);
	} else {
		return 'wrong IPv4';
	}
}