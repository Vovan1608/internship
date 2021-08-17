import { sortTriangles } from '../src/task3.mjs';
import { triangels } from '../src/data.mjs';
import { assert, spy, exp } from './helpers.mjs';

describe ('sortTriangles', () => {
  let sortTrianglesSpy;

  beforeEach(() => {
    sortTrianglesSpy = spy(sortTriangles);
  });

  afterEach(() => {
    spy.restore();
  });

  it('checkEnvelops has been called with correct parameters', () => {
    sortTrianglesSpy(triangels);
    exp(sortTrianglesSpy, triangels);
  });

  it('there isn\'t parameter', () => {
    const reason = 'arr is not defined or is not an array';
    assert.deepEqual(sortTriangles(), {status: 'failed', reason});
  });

  it('element of array isn\'t object', () => {
    const reason = '5 is not object';
    assert.deepEqual(sortTriangles([5]), {status: 'failed', reason});
  });

  it('element of array has more then four properies', () => {
    const reason = 'wrong number of properties of element ABC';
    const arr = [{vertices: 'ABC', a: 10, b: 20, c: 22.5, d: 36}];
    assert.deepEqual(sortTriangles(arr), {status: 'failed', reason});
  });

  it('element of array has less then four properies', () => {
    const reason = 'wrong number of properties of element ABC';
    const arr = [{vertices: 'ABC', a: 10, b: 20}];
    assert.deepEqual(sortTriangles(arr), {status: 'failed', reason});
  });

  it('is valid property "vertices" length', () => {
    const reason = 'ABCs of property vertices of element ABCs is wrong';
    const arr = [{vertices: 'ABCs', a: 10, b: 20, c:22.5}];
    assert.deepEqual(sortTriangles(arr), {status: 'failed', reason});
  });

  it('property "vertices" match to vertices', () => {
    const reason = 'names of properties of vertices propety don\'t match ABC';
    const arr = [{vertices: 'ABC', a: 10, g: 20, c:22.5}];
    assert.deepEqual(sortTriangles(arr), {status: 'failed', reason});
  });

  it('can\'t be triangel with parameters', () => {
    const reason = 'can\'t be triangle with that parameters in ABC';
    const arr = [{vertices: 'ABC', a: 10, b: 200, c:22.5}];
    assert.deepEqual(sortTriangles(arr), {status: 'failed', reason});
  });

  it('sorted list', () => {
    const result = ['JKL', 'POK', 'QWE', 'ABC', 'FGH', 'RTY'];
    assert.deepEqual(sortTriangles(triangels), result);
  });
});