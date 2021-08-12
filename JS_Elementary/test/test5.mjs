import { getWinnerMethod } from '../src/task5.mjs';

let assert = chai.assert;

describe('getWinnerMethod', () => {

  const obj = {min: 1010, max: 1001};

  it ('функция возвращает тип данных "object"', () => {
    assert.isObject(getWinnerMethod(obj));
  });

  it (`функция возвращает {winner: "simple", tickets: {simple: 2, hard: 1}}`, () => {
    const answer = {winner: "simple", tickets: {simple: 2, hard: 1}}

    assert.deepEqual(getWinnerMethod(obj), answer);
  });
});