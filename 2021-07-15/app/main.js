function sum(a, b){
	return a + b;
}

function multi(a, b){
	return a * b;
}

function divide(a, b){
	return a / b;
}

function subtraction(a, b){
	return a - b;
}

// ========== SUM
console.log('TEST SUM');
console.log();

NTest(sum, 2, 1, 1);
NTest(sum, 0, 0, 0);
NTest(sum, 553.5, 550, 3.5);
NTest(sum, 0, '0', 0);
NTest(sum, 1, '1', 0);
NTest(sum, 1, 1);
NTest(sum, 3, 1, 1, 1);
NTest(sum, 0, [], {});
NTest(sum, 'comon', 'com', 'on');
NTest(sum, 3, [1, 2], ['0']);
NTest(sum, 1, true, false);
NTest(sum, 0, null, undefined);
NTest(sum, '[object Object][object Object]', {}, {});
NTest(sum, 5, {a: 2, valueOf: function() { return this.a}}, {a: 3, valueOf: function() { return this.a}});
NTest(sum, 5, {a: 2, toString: function() { return this.a}}, {a: 3, toString: function() { return this.a}});
console.log();

// ========== MULTI
console.log('TEST MULTI');
console.log();

const forMulti = [
	[1, 1, 1],
	[3, '3', 1],
	[6, '2', '3'],
	[2, 'not', 2],
	[1, true, true],
	['', null, undefined],
	[0, null, null],
	[0, undefined, undefined],
	[0, '', true],
	[1, ' ', true],
	[1, [1], [1]],
	['[object Object]', {}, {}],
	[6, {a: 2, valueOf: function() { return this.a}}, {a: 3, valueOf: function() { return this.a}}],
	[6, {a: 2, toString: function() { return this.a}}, {a: 3, toString: function() { return this.a}}]
];

forMulti.forEach( (_, i) => NTest(multi, ...forMulti[i]));
console.log();

// ========== DIVIDE
console.log('TEST DIVIDE');
console.log();

const forDivide = [
	[1, 1, 1],
	[Infinity, 1, 0],
	[Infinity, true, false],
	[3, '6', '2'],
	[4, '8', 2],
	[2, {a: 10, valueOf: function() { return this.a}}, {a: 5, valueOf: function() { return this.a}}],
	[4, {a: 12, toString: function() { return this.a}}, {a: 3, toString: function() { return this.a}}],
	[0, null, null],
	[Infinity, undefined, null],
	[1, [1], [1]],
	[0, 0, '']
];

forDivide.forEach( (_, i) => NTest(divide, ...forDivide[i]));
console.log();

// ========== SUBTRUCTION
console.log('TEST SUBTRUCTION');
console.log();

const forSubtruction = [
	[4, 8, 4],
	[2, '5', 3],
	[0, Infinity, Infinity],
	[1, true, false],
	[5, {a: 10, valueOf: function() { return this.a}}, {a: 5, valueOf: function() { return this.a}}],
	[9, {a: 12, toString: function() { return this.a}}, {a: 3, toString: function() { return this.a}}],
	[0, null , null],
	[0, null, undefined],
	[4, [5], [1]],
	[8, 8, ''],
	[8, 8, ' '],
	[-Infinity, -Infinity, -Infinity]
];

forSubtruction.forEach( (_, i) => NTest(subtraction, ...forSubtruction[i]));
console.log();

function NTest(func, result, ...args){
	const callResult = func(...args);
	const passFailed = callResult === result ? 'PASS' : 'FAILED';
	const str = `${ passFailed }: ${ func.name }(${ args }) Expected: ${ result }, Received: ${ callResult }`;

	const styles = {
			PASS : 'background-color: green; padding: 5px; color: white;',
			FAILED : 'background-color: red; padding: 5px; color: black;',
	}
	console.log('%c%s', styles[passFailed], str);
}
