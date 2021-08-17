import {renderChessDesk} from '../src/task1.mjs';
import {expect, assert, spy} from './helpers.mjs';

mocha.setup('bdd');

describe ('renderChessDesk', () => {

  let renderChessDeskSPY;

  beforeEach(() => {
    renderChessDeskSPY = spy(renderChessDesk);
  });

  afterEach(() => {
    spy.restore();
  });

  it('renderChessDesk has been called with correct parameters', () => {
    renderChessDeskSPY(5, 7, '#');
    expect(renderChessDeskSPY).to.have.been.called.with(5, 7, '#');
  });

  it('height = 5, width = 7, symbol = #', () => {
    const resultStr = '# # # #\n # # # \n# # # #\n # # # \n# # # #';
    assert.equal(renderChessDesk(5, 7, '#'), resultStr);
  });

  it('height = 2, width = 6, symbol = #', () => {
    const resultStr = '# # # \n # # #';
    assert.equal(renderChessDesk(2, 6, '#'), resultStr);
  });

  it('height = 1, width = 1, symbol = #', () => {
    const resultStr = '#';
    assert.equal(renderChessDesk(1, 1, '#'), resultStr);
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

  it('height is not a number or is not an integer', () => {
    const reason = 'height is not a number or is not an integer';
    assert.deepEqual(renderChessDesk('1', 7, '#'), {status: 'failed', reason});
  });

  it('width is not a number or is not an integer', () => {
    const reason = 'width is not a number or is not an integer';
    assert.deepEqual(renderChessDesk(1, '7', '#'), {status: 'failed', reason});
  });

  it('symbol should be string', () => {
    const reason = 'symbol should be string';
    assert.deepEqual(renderChessDesk(1, 7, 5), {status: 'failed', reason});
  });

  it('symbol should be length 1', () => {
    const reason = 'symbol should be length 1';
    assert.deepEqual(renderChessDesk(1, 7, '**'), {status: 'failed', reason});
  });
});

mocha.run();