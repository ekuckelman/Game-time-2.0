const Ball = require('./Ball.js');
const Blocks = require('./Blocks.js');
const Paddle = require('./Paddle.js');
const newBall = new Ball(150, 135, 12);
const w = 68;
const h = 20;
const newBlocks = new Blocks({w, h});
const newPaddle = new Paddle (130, 15);
var rightPressed;
var leftPressed;
newBlocks.createBlockArray();

document.addEventListener('keydown', (e) => keyDown(e), false);
document.addEventListener('keyup', (e) => keyUp(e), false);

class Game {
  constructor() {
    this.scoreCount = 0;
    this.lives = 3;
  }

  draw(context) {
    newBall.drawBall(context);
    newBlocks.drawBlocks(context);
    newPaddle.drawPaddle(context);
  }

  stats(context) {
    context.font = '18px Arial';
    context.fillText(`Score: ${this.scoreCount}`, 10, 18);
    context.font = '18px Arial';
    context.fillText(`Lives: ${this.lives}`, 750, 18);

  }

  move(canvas) {
    newBall.moveBall(canvas);
    newPaddle.movePaddle(rightPressed, leftPressed, canvas);
  }

  collision(canvas,context) {
    newBall.ballCollision(newPaddle);
    if(newBlocks.blockBallCollision(newBall,context)) {
      this.scoreCount++;
    }
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