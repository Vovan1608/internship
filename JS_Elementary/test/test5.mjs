import { getWinnerMethod } from '../src/task5.mjs';
import {expect, assert, spy} from '../src/helpers.mjs';

describe('getWinnerMethod', () => {
  let getWinnerMethodSpy;
  const obj = {min: 1010, max: 1001};

  beforeEach(() => {
    getWinnerMethodSpy = spy(getWinnerMethod);
  });

  afterEach(() => {
    spy.restore();
  });

  it('checkEnvelops has been called with correct parameters', () => {
    getWinnerMethodSpy(obj);
    expect(getWinnerMethodSpy).to.have.been.called.with(obj);
  });

  it ('return object', () => {
    assert.isObject(getWinnerMethod(obj));
  });

  it (`return object {winner: "simple", tickets: {simple: 2, hard: 1}}`, () => {
    const answer = {winner: "simple", tickets: {simple: 2, hard: 1}}
    assert.deepEqual(getWinnerMethod(obj), answer);
  });

  it('not parameter', () => {
    const reason = 'not parameter at all';
    assert.deepEqual(getWinnerMethod(), {status: 'failed', reason});
  });

  it('parameter should be object', () => {
    const reason = 'parameter should be object';
    assert.deepEqual(getWinnerMethod(5), {status: 'failed', reason});
  });

  it('object has wrong properties', () => {
    const reason = 'object has wrong parameters';
    assert.deepEqual(getWinnerMethod({min: 1000000, max: 100100}), {status: 'failed', reason});
  });

  it('object has 2 properties', () => {
    const reason = 'object must have 2 parameters';
    assert.deepEqual(getWinnerMethod({min: 100000, max: 100100, hj: 2}), {status: 'failed', reason});
  });
});