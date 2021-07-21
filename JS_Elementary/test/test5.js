mocha.setup('bdd');
let assert = chai.assert;

describe('isLuckyTicket', () => {

  it ('функция возвращает тип данных "object"', () => {
    assert.isObject(isLuckyTicket(obj));
  });

  it ('функция возвращает объект {winner : simple, tickets : {simple : 1, hard : 1}', () => {
    assert.deepEqual(isLuckyTicket(obj), {winner : 'simple', tickets : {simple : 1, hard : 1}});
  });

  it ('функция возвращает тип данных не "object"', () => {
    assert.isNotObject(isLuckyTicket(obj), 'result is not an object');
  });

  it ('функция возвращает объект {winner : simple}', () => {
    assert.deepEqual(isLuckyTicket(obj), {winner : 'simple', tickets : {simple : 1, hard : 1}},
      'wrong result');
  });

  it ('функция возвращает объект {winner : simple, tickets: 2}', () => {
    assert.deepEqual(isLuckyTicket(obj), {winner : 'simple', tickets : {simple : 1, hard : 1}},
      'wrong result');
  });
});

mocha.run();