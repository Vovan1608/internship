import { getFibonachiFromRange } from '../src/task7.mjs';

let assert = chai.assert;

describe ('getFibonacci', () => {

  it ('функция возвращает строку 1,2,3,5', () => {
    assert.deepEqual(getFibonachiFromRange({min: 2, max: 5}), '1,2,3,5');
  });

  it ('функция возвращает тип данныч string', () => {
    assert.isString(getFibonachiFromRange({min: 2, max: 10}));
  });

  it ('функция возвращает строку 0,1,1,2,3,5,8', () => {
    assert.deepEqual(getFibonachiFromRange({length: 7}), '0,1,1,2,3,5,8');
  });
});