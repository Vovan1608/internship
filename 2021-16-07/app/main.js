mocha.setup('bdd');
let assert = chai.assert;

describe('render', function () {

  it('шахматная доска с высотой 4, шириной 12 и символом *', function () {
    assert.equal(render(...args), '* * * * * * \n * * * * * *\n* * * * * * \n * * * * * *');
  });

	it('шахматная доска с высотой 4, шириной 12 и символом *', function () {
    assert.notEqual(render(...args), '* * * * * * * * * * * * * * * * * * * * * * * *');
  });

	it('первый параметр функции с типом данных number', function () {
    assert.isNumber(args[0]);
  });

  it('второй параметр функции с типом данных number', function () {
    assert.isNumber(args[1]);
  });

	it('третий параметр функции с типом данных string', function () {
    assert.isString(args[2]);
  });

	it('функции передано три параметра', function() {
    assert.equal(args.length,  3);
  });

  it('выходной параметр - тип srting', function() {
    assert.isString(render(...args));
  });

  it('длина итоговой строки', function() {
    assert.equal(render(...args).length, 1);
  });
});


mocha.run();