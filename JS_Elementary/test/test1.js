mocha.setup('bdd');
let assert = chai.assert;

describe ('renderChessDesk', () => {

  const test = (...args) => {
    let expected = '\n';
    let [height, width, symbol] = args;

    for (let i = 0; i < height; i += 1) {

			for (let j = 0; j < width; j += 1) {

				if (!(i % 2)) {
          expected += !(j % 2) ? symbol : ' ';
        } else {
          expected += !(j % 2) ? ' ' : symbol;
        }

      }
			expected += '\n';
    }

    it (`шахматная доска с высотой ${height}, шириной ${width} и символом ${symbol}`, () => {
      assert.equal(renderChessDesk(...args), expected);
    });

    it('длина итоговой строки', () => {
      assert.equal(renderChessDesk(...args).length, height * width + height);
    });

    it('выходной параметр - тип srting', () => {
      assert.isString(renderChessDesk(...args));
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

mocha.run();