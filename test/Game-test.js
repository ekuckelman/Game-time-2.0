const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game')

describe('Game', () => {
  let newGame;

  beforeEach(() => {
    newGame = new Game();
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

  it.skip('should make the ball and the paddle move', () => {
     assert.isFunction(newGame.move())
  })


  it.skip('should increase the score when the ball and blocks collide', () => {
    newGame.collision();
    assert.equal(newGame.collision(), newGame.scoreCount == 1)
  })

})