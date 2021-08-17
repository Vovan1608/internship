import { getPalindrome } from '../src/task4.mjs';
import { exp, assert, spy } from './helpers.mjs';

describe('getPalindrome', () => {
  let getPalindromeSpy;

  beforeEach(() => {
    getPalindromeSpy = spy(getPalindrome);
  });

  afterEach(() => {
    spy.restore();
  });

  it('checkEnvelops has been called with correct parameters', () => {
    getPalindromeSpy(12344327);
    exp(getPalindromeSpy, 12344327);
  });

  it('number 1234437 contains a palindrom 3443', () => {
    assert.equal(getPalindrome(1234437), 3443);
  });

  it('number 12344321 is palindrom', () => {
    assert.equal(getPalindrome(12344321), 12344321);
  });

  it('number 234554321852258 contains 2345543', () => {
    assert.equal(getPalindrome(234554321852258), 23455432);
  });

  it('return 0 if number doesn\'t contain palindrom', () => {
    assert.equal(getPalindrome(123456), 0);
  });

  it('not parameter', () => {
    const reason = 'not parameter at all';
    assert.deepEqual(getPalindrome(), {status: 'failed', reason});
  });

  it('parameter should be integer', () => {
    const reason = 'num should be integer number';
    assert.deepEqual(getPalindrome(123325.25), {status: 'failed', reason});
  });

  it('number should be in range', () => {
    const reason = 'number shoul be more or equal 10 and less or equal 9007199254740991';
    assert.deepEqual(getPalindrome(9e100), {status: 'failed', reason});
  });
});