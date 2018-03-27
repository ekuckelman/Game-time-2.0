const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game');
const Ball = require('../lib/Ball');
const Paddle = require('../lib/Paddle');
const Blocks = require('../lib/Blocks.js');

describe('Game', () => {
  let newGame;
  let newBall;
  let newPaddle;
  let newBlocks;

  beforeEach(() => {
    newGame = new Game();
    newBall = new Ball(68, 20);
    newPaddle = new Paddle(120, 15);
    newBlocks = new Blocks();
  })

  it('should exist', () => {
    assert.isFunction(Game)
  })

  it('should have a score property that starts at cero', () => {
    assert.equal(newGame.scoreCount, 0)
  })

  it('should have lives and levels as properties', () => {
    assert.equal(newGame.lives, 3);
    assert.equal(newGame.level, 1)
  })

  it('should make the ball and the paddle move', () => {
     assert.isFunction(newGame.move)
  })

  it('should make the ball and blocks collide', () => {
    newGame.collision();
    assert.isFunction(newGame.collision)
  })

  it('should decrease the lives when newBall.gameOver returns true', () => {
    // set up
    audio = {play: function(){}}
    audio2 = {play: function(){}}
    newBall.gameOver = function(){
      return true
    }
    // execution
    newGame.collision(audio, audio2)

    // assertion
    assert.equal(newGame.lives, 3) 
  })

  it('should increase the score when newBlocks.blockBallCollision returns true', () => {
   // set up
   newBall = {x:60, y:20}
   newBlocks.blockBallCollision = function(){
    newGame.scoreCount ++
    return true
   }
    // execution
    newGame.collision(audio, audio2)
    // assertion
    assert.equal(newGame.scoreCount, 1)
  })

  it('should have different levels', () => {
    assert.isFunction(newGame.newLevel)
  })

  it('should increase the difficulty', () => {
    assert.equal(newGame.level, 1);
    newBlocks.blocksCount()
    newGame.level++;
    assert.equal(newGame.level, 2);

  })


})