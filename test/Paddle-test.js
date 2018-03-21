const chai = require('chai');
const assert = chai.assert;
const Paddle = require('../lib/Paddle');

describe('Paddle', () => {
  let newPaddle;

  beforeEach(() => { 
   newPaddle = new Paddle(50, 50);
  });

  it('should exist', () => {
    assert.isFunction(Paddle);
  });

  it('should have a width and height as arguments', ()=> {
    assert.equal(newPaddle.w, 50);
    assert.equal(newPaddle.h, 50);
  });

  it('should have a default color', ()=> {
    assert.equal(newPaddle.color, '#e0afaf');
  });

  it('should have an x and a y as properties', ()=> {
    assert.equal(newPaddle.x, 420 - 50);
    assert.equal(newPaddle.y, 430 - 50);
  });

  it('should move the paddle', ()=> {
    newPaddle.movePaddle();
    assert.equal(newPaddle.x, 370);
  });
});