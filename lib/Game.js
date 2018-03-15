const Ball = require('./Ball.js');
const Blocks = require('./Blocks.js');
const Paddle = require('./Paddle.js');
const newBall = new Ball(50, 50, 8);
const newBlocks = new Blocks(5, 5, 30, 10); 
const newPaddle = new Paddle (40, 5);
var rightPressed;
var leftPressed;

document.addEventListener('keydown', (e) => keyDown(e), false);
document.addEventListener('keyup', (e) => keyUp(e), false);

class Game {
  constructor() {

  }

  draw(context) {
    newBall.drawBall(context);
    newBlocks.drawBlocks(context);
    newPaddle.drawPaddle(context);
  }

  move() {
    newBall.moveBall();
    newPaddle.movePaddle(rightPressed, leftPressed);
  }
}

const keyDown = (e) => {
  if (e.keyCode === 39) {
    rightPressed = true;
  } else if (e.keyCode === 37) {
    leftPressed = true;
  }
};

const keyUp = (e) => {
  if (e.keyCode === 39) {
    rightPressed = false;
  } else if (e.keyCode === 37) {
    leftPressed = false;
  }
};

module.exports = Game;