mocha.setup('bdd');
let assert = chai.assert;

const NUM_OF_CASES = 100;

describe ('sortingTriangles', () => {
  const getArea = obj => {
    const {a, b, c} = obj;
    const halfP = (a + b + c) / 2;

    return Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));
  }

  const randomFloat = (min, max) => min + Math.random() * (max + 1 - min);
  const randomInteger = (min, max) => Math.round(randomFloat(min, max));

  const makeAnArrOfObj = (size, rangeOfSide) => {
    let arr = [];
    const A_IN_ASCII = 65;
    const Z_IN_ASCII = 90;
    const NUM_OF_VERTICES = 3;

    for (let i = 0; i < size; i += 1) {
      let obj = {
        vertices: `
          ${String.fromCharCode(randomInteger(A_IN_ASCII, Z_IN_ASCII))}
          ${String.fromCharCode(randomInteger(A_IN_ASCII, Z_IN_ASCII))}
          ${String.fromCharCode(randomInteger(A_IN_ASCII, Z_IN_ASCII))}
        `,
        a: randomFloat(0, rangeOfSide),
        b: randomFloat(0, rangeOfSide),
        c: randomFloat(0, rangeOfSide)
      }

      arr.push(obj);
    }

    return arr;
  }

  for (let i = 0; i < NUM_OF_CASES; i += 1) {
    const size = 50;
    const rangeOfSide = 10;
    let arr = makeAnArrOfObj(size, rangeOfSide);

    it('упорядоченный массив имён треугольников', () => {
      assert.equal(sortingTriangles(arr),
        arr
          .sort((cur, next) => getArea(next) - getArea(cur))
          .map(el => el.vertices)
      );
    });
  }
});

mocha.run();