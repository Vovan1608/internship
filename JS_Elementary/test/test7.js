mocha.setup('bdd');
let assert = chai.assert;

describe ('getFibonacci', () => {

  it ('функция возвращает масcив [1,2,3,4,5]', () => {
    assert.deepEqual(getFibonacci({min: 0, max: 120}), [1,2,3,4,5]);
  });

  it ('функция возвращает масcив', () => {
    assert.isArray(getFibonacci({min: 0, max: 120}));
  });

  it ('функция возвращает не масcив', () => {
    assert.isNotArray(getFibonacci({min: 0, max: 120}), 'result is not array');
  });

  it ('функция возвращает масcив отличный от [1,2,3,4,5]', () => {
    assert.notDeepEqual(getFibonacci({min: 0, max: 120}), [1,2,3,4,5], 'wrong result');
  });
});

mocha.run();