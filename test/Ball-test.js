const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/Ball');

describe('Ball', () => {
let newBall

  beforeEach(() => { 
   newBall = new Ball(50, 50, 5)
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
    assert.equal(newBall.dx, 2)
    assert.equal(newBall.dy, 2)
    assert.equal(newBall.color, 'white')
  })

  it('should move', () => {
    newBall.moveBall(newBall);
    assert.equal(newBall.x, newBall.x++)
    assert.equal(newBall.y, newBall.y++)
  })

});

