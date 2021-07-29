const isIPv4 = str => {
	const DEC_NUM_IN_IPv4 = 4;
	const arrNums = str.split('.').map(el => el);

	return (
		typeof str === 'string' &&
		str !== '' &&
		arrNums.length === DEC_NUM_IN_IPv4 &&
		arrNums.every(el => el !== '' && el >= 0 && el < 256)
	);
}

export {
	isIPv4
}