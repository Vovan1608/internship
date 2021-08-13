import { checkEnvelops } from '../src/task2.mjs';

let assert = chai.assert;

describe ('checkEnvelops', () => {

  it(`конверты нельзя вложить друг в друга`, () => {
    assert.equal(checkEnvelops({a: 5, b: 6}, {c: 5, d: 6}), 0);
  });

  it(`конверты нельзя вложить друг в друга`, () => {
    assert.equal(checkEnvelops({a: 4, b: 6}, {c: 5, d: 6}), 0);
  });

  it(`конверт 1 можно вложить во 2`, () => {
    assert.equal(checkEnvelops({a: 2, b: 3}, {c: 5, d: 6}), 1);
  });

  it(`конверт 2 можно вложить в 1`, () => {
    assert.equal(checkEnvelops({a: 4, b: 5}, {c: 2, d: 3}), 2);
  });

  it(`there isn't first parameter`, () => {
    const reason = `there isn't 1 parameter`;
    assert.deepEqual(checkEnvelops(), {status: 'failed', reason});
  });

  it(`there isn't second parameter`, () => {
    const reason = `there isn't 2 parameter`;
    assert.deepEqual(checkEnvelops({a: 2, b: 3}), {status: 'failed', reason});
  });

  it(`parameter 1 should be object`, () => {
    const reason = `5 isn't object`;
    assert.deepEqual(checkEnvelops(5, {a: 2, b: 3}), {status: 'failed', reason});
  });

  it(`parameter 2 should be object`, () => {
    const reason = `5 isn't object`;
    assert.deepEqual(checkEnvelops({a: 2, b: 3}, 5), {status: 'failed', reason});
  });

  it(`1 property of obj1 should be a number in range from 0 to 1000000`, () => {
    const reason = `properties of a should be in range from 0 to 1000000`;
    assert.deepEqual(checkEnvelops({a: 2e6, b: 3}, {c: 4, d: 3}), {status: 'failed', reason});
  });

  it(`2 property of obj1 should be a number in range from 0 to 1000000`, () => {
    const reason = `properties of b should be in range from 0 to 1000000`;
    assert.deepEqual(checkEnvelops({a: 2, b: 3e6}, {c: 4, d: 3}), {status: 'failed', reason});
  });

  it(`1 property of obj2 should be a number in range from 0 to 1000000`, () => {
    const reason = `properties of c should be in range from 0 to 1000000`;
    assert.deepEqual(checkEnvelops({a: 2, b: 3}, {c: 4e6, d: 3}), {status: 'failed', reason});
  });

  it(`2 property of obj2 should be a number in range from 0 to 1000000`, () => {
    const reason = `properties of d should be in range from 0 to 1000000`;
    assert.deepEqual(checkEnvelops({a: 2, b: 3}, {c: 4, d: 3e6}), {status: 'failed', reason});
  });
});