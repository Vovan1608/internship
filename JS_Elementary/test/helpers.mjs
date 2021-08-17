const assert = chai.assert;
const expect = chai.expect;
const spy = chai.spy;

const exp = (spyFunc, ...params) => {
	return expect(spyFunc).to.have.been.called.with(...params);
}

export {
	assert,
	spy,
	exp
}