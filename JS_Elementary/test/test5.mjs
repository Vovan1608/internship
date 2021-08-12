import { getWinnerMethod } from '../src/task5.mjs';

let assert = chai.assert;

describe('getWinnerMethod', () => {

  const obj = {min: 200200, max: 222222};

  it ('функция возвращает тип данных "object"', () => {
    assert.isObject(getWinnerMethod(obj));
  });

  it (`функция возвращает {winner: "hard", tickets: {simple: 810, hard: 1414}}`, () => {
    const answer = {winner: "hard", tickets: {simple: 810, hard: 1414}}

    assert.deepEqual(getWinnerMethod(obj), answer);
  });
});