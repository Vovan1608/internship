import { getPalindrome } from '../src/task4.mjs';

let assert = chai.assert;

describe('getPalindrome', () => {

  it('число 1234437 содержит палиндром', () => {
    assert.equal(getPalindrome(1234437), '3443');
  });

  it('число 12344321 является палиндромом', () => {
    assert.strictEqual(getPalindrome(12344321), '12344321');
  });

  it('число 234554321852258 содержит палиндром', () => {
    assert.strictEqual(getPalindrome(234554321852258), '23455432');
  });
});