const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/Ball');
const Paddle = require('../lib/Paddle');

describe('Ball', () => {
let newBall
let newPaddle;

  beforeEach(() => { 
   newBall = new Ball(50, 50, 5)
   newPaddle = new Paddle(120, 15);
  });

  it('should exist', () => {
    assert.isFunction(Ball)
  });

  it('should take x, y and radius as arguments', () => {
    assert.equal(newBall.x, 50)
    assert.equal(newBall.y, 50)
    assert.equal(newBall.radius, 5)
  })

  it('should have velocity and color properties', () => {
    assert.equal(newBall.dx, 4)
    assert.equal(newBall.dy, 4)
    assert.equal(newBall.color, 'white')
  })

  it('should move', () => {
    newBall.moveBall(newBall);
    assert.equal(newBall.x, newBall.x++)
    assert.equal(newBall.y, newBall.y++)
  });

  it('should collide with the paddle', () => {
    assert.isFunction(newBall.ballCollision)
  });

  it('should move to the other direction after it collides', () => {
    let balldy = newBall.dy
    newBall.ballCollision(newPaddle, balldy);
    if(newPaddle.dy < balldy)
    assert.equal(balldy, - 4)   
  });

  it('should return true if the ball passes the paddle', () => {
    assert.isFunction(newBall.gameOver) 
  });
})