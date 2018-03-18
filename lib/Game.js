const Ball = require('./Ball.js');
const Blocks = require('./Blocks.js');
const Paddle = require('./Paddle.js');
const newBall = new Ball(150, 135, 5);
const x = 5;
const y = 5;
const w = 30;
const h = 10;
const newBlocks = new Blocks({x, y, w, h});
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

  move(canvas) {
    newBall.moveBall(canvas);
    newPaddle.movePaddle(rightPressed, leftPressed, canvas);
  }

  collision(context) {
    newBall.ballCollision(newPaddle)
    newBlocks.blockBallCollision(newBall,context);
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