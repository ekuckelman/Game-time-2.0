const chai = require('chai');
const assert = chai.assert;
const Blocks = require('../lib/Blocks');
const Ball = require('../lib/Ball.js');
const locus = require('locus');
const Block = require('../lib/Block.js');



describe('Blocks', () => {
  let newBlocks;
  let newBall;
  let newBlock

  beforeEach(() => { 
   newBlocks = new Blocks();
   newBall = new Ball(150, 135, 12);
   newBlock = new Block(68, 20, '#5f7b7d');
  });

  it('should exist', () => {
    assert.isFunction(Blocks);
  });

  it('should know the height and width of each block', ()=> {
    assert.equal(newBlock.width, 68);
    assert.equal(newBlock.height, 20);
  });

  it('each block should have a color by default', ()=> {
    assert.equal(newBlock.color, '#5f7b7d');
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
    assert.equal(newBlocks.count, 0);
    newBlocks.blockBallCollision = function() {
    assert.equal(newBlocks.count, 1);  
    };
  });

  it('should return true that the blocks count is 44', ()=> {
    assert.equal(newBlocks.count, 0);
    newBlocks.blocksCount = function() {
    assert.equal(newBlocks.count, 44);  
    };
  });  
});