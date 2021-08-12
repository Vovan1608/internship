import { checkEnvelops } from '../src/task2.mjs';

let assert = chai.assert;

describe ('checkEnvelops', () => {

  it(`конверты нельзя вложить друг в друга`, () => {
    assert.equal(checkEnvelops({a: 5, b: 6}, {c: 5, d: 6}), 0);
  });

  it(`конверт 1 можно вложить во 2`, () => {
    assert.equal(checkEnvelops({a: 2, b: 3}, {c: 5, d: 6}), 1);
  });

  it(`конверт 2 можно вложить в 1`, () => {
    assert.equal(checkEnvelops({a: 4, b: 5}, {c: 2, d: 3}), 2);
  });
});