const Ball = require('./Ball.js');
const Blocks = require('./Blocks.js');
const Paddle = require('./Paddle.js');
let newBall = new Ball(150, 135, 12);
let newBlocks = new Blocks();
let newPaddle = new Paddle (120, 15);

newBlocks.createBlockArray();

class Game {
  constructor() {
    this.scoreCount = 0;
    this.lives = 3;
    this.level = 1;
  }

  draw(context) {
    newBall.drawBall(context);
    newBlocks.drawBlocks(context);
    newPaddle.drawPaddle(context);
  }

  stats(context) {
    context.font = '22px Arial';
    context.fillText(`Score: ${this.scoreCount}`, 10, 18);
    context.font = '22px Arial';
    context.fillText(`Lives: ${this.lives}`, 750, 18);
  }

  move(canvas, rightPressed, leftPressed) {
    newBall.moveBall(canvas);
    newPaddle.movePaddle(rightPressed, leftPressed, canvas);
  }

  collision(canvas, context, audio, audio2, gameOver) {
    newBall.ballCollision(newPaddle);
    if (newBall.gameOver(newPaddle)) {
      audio2.play();
      this.lives--;
      newBall = new Ball(150, 135, 12);
    }
    if (newBlocks.blockBallCollision(newBall, context)) {
      audio.play();
      this.scoreCount++;
    }
  }

  newLevel(context) {
    if (newBlocks.blocksCount()) {
      this.level++;
      newBall = new Ball(150, 135, 12);
      newBall.dx++;
      newBlocks = new Blocks(68, 20);
      newPaddle = new Paddle (80, 15);
      newBlocks.createBlockArray();
      this.draw(context);
      return true;
    }
  }
}

module.exports = Game;