const chai = require('chai');
const assert = chai.assert;
const Blocks = require('../lib/Blocks');
const Ball = require('../lib/Ball.js');
const locus = require('locus');

describe('Blocks', () => {
  let newBlocks;
  let newBall;
  beforeEach(() => { 
   newBlocks = new Blocks(50, 50);
   newBall = new Ball(60, 60, 12);
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

  it('should not have any blocks in the array on default', ()=> {
    assert.deepEqual(newBlocks.blocksArray, []);
  });

  it('should start the count of hit bricks at 0', ()=> {
    assert.equal(newBlocks.count, 0);
  });

  it('should add blocks to the array', ()=> {
    newBlocks.createBlockArray();
    assert.deepEqual(newBlocks.blocksArray.length, 11);
  });

  it('should add to the count of hit bricks when a brick is hit', ()=> {
    newBlocks.createBlockArray();
    assert.equal(newBlocks.count, 0);
    newBlocks.blockBallCollision(newBall);
    newBlocks.count++;
    assert.equal(newBlocks.count, 1); 
    assert.isFunction(newBlocks.blocksCount);
  }); 
});