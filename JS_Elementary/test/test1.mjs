import {renderChessDesk} from '../src/task1.mjs';

mocha.setup('bdd');
let assert = chai.assert;

describe ('renderChessDesk', () => {

  it('height = 5, width = 7, symbol = #', () => {
    const resultStr = '# # # #\n # # # \n# # # #\n # # # \n# # # #';
    assert.equal(renderChessDesk(5, 7, '#'), resultStr);
  });

  it('length should be 39', () => {
    const resultStr = renderChessDesk(5, 7, '#');
    assert.equal(resultStr.length, 39);
  });

  it('length should be 44', () => {
    const resultStr = renderChessDesk(5, 8, '#');
    assert.equal(resultStr.length, 44);
  });

  it('length should be 419', () => {
    const resultStr = renderChessDesk(20, 20, '#');
    assert.equal(resultStr.length, 419);
  });

  it('length should be 1', () => {
    const resultStr = renderChessDesk(1, 1, '#');
    assert.equal(resultStr.length, 1);
  });
});

mocha.run();