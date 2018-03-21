const chai = require('chai');
const assert = chai.assert;
const Gamepieces = require('../lib/Gamepieces');

describe('Gamepieces', () => {
  let newGamepieces;

  beforeEach(() => { 
   newGamepieces = new Gamepieces(50, 50);
  });

  it('should exist', () => {
    assert.isFunction(Gamepieces);
  });

  it('should have an x and y as arguments', ()=> {
    assert.equal(newGamepieces.x, 50);
    assert.equal(newGamepieces.y, 50);
  });
});