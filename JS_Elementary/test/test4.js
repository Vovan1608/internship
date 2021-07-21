mocha.setup('bdd');
let assert = chai.assert;

describe('isPalindrome', () => {

  it('число 1234437 содержит палиндром', () => {
    assert.equal(isPalindrome(3443), 3443);
  });

  it('число 12344321 является палиндромом', () => {
    assert.strictEqual(isPalindrome(12344321), 12344321);
  });

  it('число 234554321852258 содержит палиндром', () => {
    assert.strictEqual(isPalindrome(234554321852258), 23455432);
  });

  it('число 123456789 не содержит палиндром', () => {
    assert.strictEqual(isPalindrome(123456789), 0);
  });

  it('число 123456789 не содержит палиндром', () => {
    assert.strictEqual(isPalindrome(123456789), 0);
  });

  it('функция возвращает тип данных "number"', () => {
    assert.isNumber(isPalindrome(123456789));
  });

  it('функция возвращает тип данных не "number"', () => {
    assert.fail(isPalindrome(123456789), '0', 'result is not a number');
  });

  it('функция возвращает не 0, если не находит палиндром', () => {
    assert.fail(isPalindrome(12344321), 0, 'expected result is 0');
  });

  it('функция возвращает 0, если находит палиндром', () => {
    assert.fail(isPalindrome(12344321), 12344321, 'expected result is 12344321');
  });

  it('функция возвращает не самый длиный палиндром, если находит неколько палиндромов', () => {
    assert.fail(isPalindrome(234554321852258), 23455432, 'expected result is 23455432');
  });

  it('функция возвращает самый правый палиндром, если находит неколько палиндромов', () => {
    assert.fail(isPalindrome(12215233464554), 1221, 'expected result is 1221');
  });
});

mocha.run();