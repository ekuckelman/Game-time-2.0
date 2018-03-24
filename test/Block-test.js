const chai = require('chai');
const assert = chai.assert;
const Block = require('../lib/Block');


describe('block', () => {
  let newBlock;

  beforeEach(() => { 
   newBlock = new Block(68, 20, '#5f7b7d');
  });

  it('should exist', () => {
    assert.isFunction(Block);
  });

  it('should have an w and h as arguments', ()=> {
    assert.equal(newBlock.width, 68);
    assert.equal(newBlock.height, 20);
  });

  it('should have a color by default', ()=> {
    assert.equal(newBlock.color, '#5f7b7d');
  });
});