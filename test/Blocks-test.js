const chai = require('chai');
const assert = chai.assert;
const Blocks = require('../lib/Blocks');

describe('Blocks', () => {
  let newBlocks;

  beforeEach(() => { 
   newBlocks = new Blocks(50, 50);
  });

  it('should exist', () => {
    assert.isFunction(Blocks);
  });

  it('should have a width and height as parameters', ()=> {
    assert.equal(newBlocks.width, 50);
    assert.equal(newBlocks.height, 50);
  });

  it('should have a color by default', ()=> {
    assert.equal(newBlocks.color, '#5f7b7d');
  });
});