mocha.setup('bdd');
let assert = chai.assert;

describe('render', _ => {

  const test = (...args) => {
    let expected = '';

    for (let i = 0; i < args[0]; i += 1) {
      for (let j = 0; j < args[1]; j += 1) {
        if (!(i % 2)) {
          expected += !(j % 2) ? args[2] : ' ';
        } else {
          expected += !(j % 2) ? ' ' : args[2];
        }
        expected += '\n';
      }
    }

    it (`шахматная доска с высотой ${args[0]}, шириной ${args[1]} и символом ${args[2]}`, _ => {
      assert.equal(render(...args), expected);
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

  for (i, j, k; i < END_FIRST_PARAM, j < END_SECOND_PARAM, k < AMPERSAND_IN_ASCII; i += 1, j += 1, k += 1) {
    test(i, j, String.fromCharCode(k));
  }

  it('шахматная доска с высотой 4, шириной 12 и символом *', (...args) => {
    assert.equal(render(...args), '* * * * * * \n * * * * * *\n* * * * * * \n * * * * * *');
  });

	it('шахматная доска с высотой 4, шириной 12 и символом *', (...args) => {
    assert.notEqual(render(...args), '* * * * * * * * * * * * * * * * * * * * * * * *');
  });

	it('первый параметр функции с типом данных number', (...args) => {
    assert.isNumber(args[0]);
  });

  it('второй параметр функции с типом данных number', (...args) => {
    assert.isNumber(args[1]);
  });

	it('третий параметр функции с типом данных string', (...args) => {
    assert.isString(args[2]);
  });

	it('функции передано три параметра', (...args) =>{
    assert.equal(args.length,  3);
  });

  it('выходной параметр - тип srting', (...args) =>{
    assert.isString(render(...args));
  });

  it('длина итоговой строки', (...args) =>{
    assert.equal(render(...args).length, args[0] * args[1] + args[0] - 1);
  });
});

mocha.run();