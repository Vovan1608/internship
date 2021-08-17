import { getFibonachiFromRange } from '../src/task7.mjs';
import {expect, assert, spy} from './helpers.mjs';

describe ('getFibonacci', () => {
  let getFibonachiFromRangeSpy;

  beforeEach(() => {
    getFibonachiFromRangeSpy = spy(getFibonachiFromRange);
  });

  afterEach(() => {
    spy.restore();
  });

  it('checkEnvelops has been called with object length', () => {
    getFibonachiFromRangeSpy({length: 7});
    expect(getFibonachiFromRangeSpy).to.have.been.called.with({length: 7});
  });

  it('checkEnvelops has been called with object min-max', () => {
    getFibonachiFromRangeSpy({min: 2, max: 5});
    expect(getFibonachiFromRangeSpy).to.have.been.called.with({min: 2, max: 5});
  });

  it ('return 1,2,3,5', () => {
    assert.deepEqual(getFibonachiFromRange({min: 2, max: 5}), '1,2,3,5');
  });

  it ('return data string', () => {
    assert.isString(getFibonachiFromRange({min: 2, max: 10}));
  });

  it ('return 0,1,1,2,3,5,8', () => {
    assert.deepEqual(getFibonachiFromRange({length: 7}), '0,1,1,2,3,5,8');
  });

  it('not parameter', () => {
    const reason = 'not parameter at all';
    assert.deepEqual(getFibonachiFromRange(), {status: 'failed', reason});
  });

  it('parameter should be object', () => {
    const reason = 'param should be object';
    assert.deepEqual(getFibonachiFromRange(5), {status: 'failed', reason});
  });

  it('parameter must have property length', () => {
    const reason = 'context must have property length';
    assert.deepEqual(getFibonachiFromRange({lengthj: 7}), {status: 'failed', reason});
  });

  it('parameter must have properties min and max', () => {
    const reason = 'context must have properties min and max';
    assert.deepEqual(getFibonachiFromRange({minl: 2, max: 5}), {status: 'failed', reason});
  });

  it('parameter must have two properties', () => {
    const reason = 'context must have maximum two parameters';
    assert.deepEqual(getFibonachiFromRange({min: 2, max: 5, length: 7}), {status: 'failed', reason});
  });
});