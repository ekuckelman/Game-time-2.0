const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/Ball');

describe('Ball', () => {

  beforeEach(() => { 
    const newBall = new Ball(50, 50, 5)
  });

  it('should exist', () => {
    assert.equal(Ball, ());
  });
});

// module.exports = Ball;
