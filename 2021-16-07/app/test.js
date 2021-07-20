mocha.setup('bdd');
let assert = chai.assert;

// test first task
describe ('render', _ => {

  const test = (...args) => {
    let expected = '';
    let [height, width, symbol] = args;

    for (let i = 0; i < height; i += 1) {
      for (let j = 0; j < width; j += 1) {
        if (!(i % 2)) {
          expected += !(j % 2) ? symbol : ' ';
        } else {
          expected += !(j % 2) ? ' ' : symbol;
        }
        expected += '\n';
      }
    }

    it (`шахматная доска с высотой ${height}, шириной ${width} и символом ${symbol}`, _ => {
      assert.equal(render(...args), expected);
    });

    it('длина итоговой строки', _ => {
      assert.equal(render(...args).length, height * width + height - 1);
    });

    it('выходной параметр - тип srting', _ => {
      assert.isString(render(...args));
    });
  }

  const EXCLAMATION_POINT_IN_ASCII = 33;
  const AMPERSAND_IN_ASCII = 39;
  const START_FIRST_PARAM = 4;
  const END_FIRST_PARAM = 10;
  const START_SECOND_PARAM = 12;
  const END_SECOND_PARAM = 18;

  let i = START_FIRST_PARAM;
  let j = START_SECOND_PARAM;
  let k = EXCLAMATION_POINT_IN_ASCII;

  for (; i < END_FIRST_PARAM, j < END_SECOND_PARAM, k < AMPERSAND_IN_ASCII; i += 1, j += 1, k += 1) {
    test(i, j, String.fromCharCode(k));
  }
});

const NUM_OF_CASES = 100;

// test second task
describe ('checkEnvelops', _ => {
  const getRandom = num =>  Math.random() * num;
  const MAX_VALUE = 999999;

  for (let i = 0; i < NUM_OF_CASES; i += 1) {
    let [a, b, c, d] = [0, 0, 0, 0].map(el => el = getRandom(MAX_VALUE));

    if (a < c && b < d || a < d && b < c) {
      it(`конверт1 можно вложить в конверт2`, _ => {
        assert.equal(checkEnvelops({a, b}, {c, d}), 1);
      });
    }

    if (a > c && b > d || a > d && b > c) {
      it(`конверт2 можно вложить в конверт1`, _ => {
        assert.equal(checkEnvelops({a, b}, {c, d}), 2);
      });
    }

    if (a === c && b === d || a === d && b === c) {
      it(`конверты нельзя вложить друг в друга`, _ => {
        assert.equal(checkEnvelops({a, b}, {c, d}), 0);
      });
    }
  }
});

// test third task
describe ('sortingTriangles', _ => {
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

    it('упорядоченный массив имён треугольников', _ => {
      assert.equal(sortingTriangles(arr),
        arr
          .sort((cur, next) => getArea(next) - getArea(cur))
          .map(el => el.vertices)
      );
    });
  }
});

mocha.run();