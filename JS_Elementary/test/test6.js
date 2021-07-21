mocha.setup('bdd');
let assert = chai.assert;

describe('getNumberSequence', () => {

  it ('возвращает строку "5,6,7,8,9"', () => {
    assert.equal(getNumberSequence(5, 5), '5,6,7,8,9');
  });

  it ('возвращает тип данных "string"', () => {
    assert.isString(getNumberSequence(20, 5));
  });

  it ('функция возвращает тип данных не "string"', () => {
    assert.isNotString(getNumberSequence(20, 5));
  });

  it ('функция возвращает строку длиной не 20', () => {
    assert.equal(getNumberSequence(20, 5), 20);
  });

  it ('функция возвращает строку длиной не 39', () => {
    assert.fail(getNumberSequence(20, 5).length, 39, 'length is not 39');
  });
});

mocha.run();