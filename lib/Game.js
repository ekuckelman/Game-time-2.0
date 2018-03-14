const Ball = require('./Ball.js');
const newBall = new Ball(50, 50, 8);
class Game {
  constructor() {

  }

  draw(context) {
    newBall.drawBall(context);
  }

  move() {
     newBall.moveBall();
  }
}

module.exports = Game;