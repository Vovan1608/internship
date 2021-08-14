import { getNumericalSiquence } from '../src/task6.mjs';

let assert = chai.assert;

describe('getNumberSequence', () => {

  it ('return string "3,4,5,6,7"', () => {
    assert.equal(getNumericalSiquence(5, 5), '3,4,5,6,7');
  });

  it ('return data "string"', () => {
    assert.isString(getNumericalSiquence(10, 5));
  });

  it('not 1 parameter', () => {
    const reason = 'shold be two parameters';
    assert.deepEqual(getNumericalSiquence(), {status: 'failed', reason});
  });

  it('not 2 parameter', () => {
    const reason = 'shold be two parameters';
    assert.deepEqual(getNumericalSiquence(5), {status: 'failed', reason});
  });

  it('parameter 1 should be integer', () => {
    const reason = 'parameters shoud be an iteger number';
    assert.deepEqual(getNumericalSiquence(5.5, 144), {status: 'failed', reason});
  });

  it('parameter 2 should be integer', () => {
    const reason = 'parameters shoud be an iteger number';
    assert.deepEqual(getNumericalSiquence(5, 144.5), {status: 'failed', reason});
  });

  it('parameter 1 should be pozitive', () => {
    const reason = 'parameters should be greater 0';
    assert.deepEqual(getNumericalSiquence(-5, 144), {status: 'failed', reason});
  });

  it('parameter 2 should be pozitive', () => {
    const reason = 'parameters should be greater 0';
    assert.deepEqual(getNumericalSiquence(5, -144), {status: 'failed', reason});
  });
});