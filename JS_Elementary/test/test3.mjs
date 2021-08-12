import { sortTriangles } from '../src/task3.mjs';
import { triangels } from '../src/data.mjs';

let assert = chai.assert;

describe ('sortTriangles', () => {

  it('отсортированный список', () => {
    const result = ["JKL", "POK", "QWE", "ABC", "FGH", "RTY"];
    assert.deepEqual(sortTriangles(triangels), result);
  });
});