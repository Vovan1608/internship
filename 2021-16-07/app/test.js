mocha.setup('bdd');
let assert = chai.assert;

// test first task
describe ('render', () => {

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

    it('длина итоговой строки', () => {
      assert.equal(render(...args).length, height * width + height - 1);
    });

    it('выходной параметр - тип srting', () => {
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
describe ('checkEnvelops', () => {
  const getRandom = num =>  Math.random() * num;
  const MAX_VALUE = 999999;

  for (let i = 0; i < NUM_OF_CASES; i += 1) {
    let [a, b, c, d] = [0, 0, 0, 0].map(el => el = getRandom(MAX_VALUE));

    if (a < c && b < d || a < d && b < c) {
      it(`конверт1 можно вложить в конверт2`, () => {
        assert.equal(checkEnvelops({a, b}, {c, d}), 1);
      });
    }

    if (a > c && b > d || a > d && b > c) {
      it(`конверт2 можно вложить в конверт1`, () => {
        assert.equal(checkEnvelops({a, b}, {c, d}), 2);
      });
    }

    if (a === c && b === d || a === d && b === c) {
      it(`конверты нельзя вложить друг в друга`, () => {
        assert.equal(checkEnvelops({a, b}, {c, d}), 0);
      });
    }
  }
});

// test third task
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

// test fourth task
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


// test fifth task
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

// test sixth task
describe('getNumberSequence', () => {

  it ('возвращает строку "5,6,7,8,9"', () => {
    assert.equal(getNumberSequence(5, 5), '5,6,7,8,9');
  });

  it ('возвращает тип данных "string"', () => {
    assert.isString(getNumberSequence(20, 5));
  });

  it ('функция возвращает тип данных не "string"', () => {
    assert.isNotString(getNumberSequence(20, 5));
  });

  it ('функция возвращает строку длиной не 20', () => {
    assert.equal(getNumberSequence(20, 5), 20);
  });

  it ('функция возвращает строку длиной не 39', () => {
    assert.fail(getNumberSequence(20, 5).length, 39, 'length is not 39');
  });
});

// test seventh task
describe ('getFibonacci', () => {

  it ('функция возвращает масcив [1,2,3,4,5]', () => {
    assert.deepEqual(getFibonacci({min: 0, max: 120}), [1,2,3,4,5]);
  });

  it ('функция возвращает масcив', () => {
    assert.isArray(getFibonacci({min: 0, max: 120}));
  });

  it ('функция возвращает не масcив', () => {
    assert.isNotArray(getFibonacci({min: 0, max: 120}), 'result is not array');
  });

  it ('функция возвращает масcив отличный от [1,2,3,4,5]', () => {
    assert.notDeepEqual(getFibonacci({min: 0, max: 120}), [1,2,3,4,5], 'wrong result');
  });
});

mocha.run();