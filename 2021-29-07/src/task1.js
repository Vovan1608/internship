import { isIPv4 } from './helpers.js';

const convertIPV4ToDecimal = ipv4 => {
	if (isIPv4(ipv4)) {
		return parseInt(
			ipv4
				.split(".")
				.map(ipSec => Number(ipSec).toString(2))
				.map(ipSec => `00000000${ipSec}`.slice(-8))
				.reduce((acc, cur) => acc + cur, ''),
			2
		);
	} else {
		return 'wrong IPv4';
	}
}

const countIpAdresses = (ipStart, ipEnd) => {
	return convertIPV4ToDecimal(ipEnd) - convertIPV4ToDecimal(ipStart);
}

const ip1 = '10.0.0.0';
const ip2 = '10.0.0.50';
console.log(countIpAdresses(ip1, ip2));