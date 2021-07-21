mocha.setup('bdd');
let assert = chai.assert;

const NUM_OF_CASES = 10;

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

mocha.run();