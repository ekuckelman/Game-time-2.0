var Ball = require('./Ball.js');
var newBall = new Ball(50, 50, 10);
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