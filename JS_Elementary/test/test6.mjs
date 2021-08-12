import { getNumericalSiquence } from '../src/task6.mjs';

let assert = chai.assert;

describe('getNumberSequence', () => {

  it ('возвращает строку "3,4,5,6,7"', () => {
    assert.equal(getNumericalSiquence(5, 5), '3,4,5,6,7');
  });

  it ('возвращает тип данных "string"', () => {
    assert.isString(getNumericalSiquence(10, 5));
  });

  it ('функция возвращает тип данных не "string"', () => {
    assert.isNotString(getNumericalSiquence(5, 5));
  });
});