const Ball = require('./Ball.js');
const newBall = new Ball(50, 50, 8);
const Blocks = require('./Blocks.js');
const newBlocks = new Blocks(5, 5, 30, 10); 

class Game {
  constructor() {

  }

  draw(context) {
    newBall.drawBall(context);
    newBlocks.drawBlocks(context);
  }

  move() {
    newBall.moveBall();
  }
}

module.exports = Game;