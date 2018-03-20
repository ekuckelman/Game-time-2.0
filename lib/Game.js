const Ball = require('./Ball.js');
const Blocks = require('./Blocks.js');
const Paddle = require('./Paddle.js');
let newBall = new Ball(150, 135, 12);
const newBlocks = new Blocks(68, 20);
const newPaddle = new Paddle (120, 15);
let audio = new Audio("./images/Bomb+2.mp3");
let audio2 = new Audio("./images/Power Failure-SoundBible.com-1821346166.mp3");
let rightPressed;
let leftPressed;

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
    context.font = '22px Arial';
    context.fillText(`Score: ${this.scoreCount}`, 10, 18);
    context.font = '22px Arial';
    context.fillText(`Lives: ${this.lives}`, 750, 18);
  }

  move(canvas) {
    newBall.moveBall(canvas);
    newPaddle.movePaddle(rightPressed, leftPressed, canvas);
  }

  collision(canvas,context) {
    newBall.ballCollision(newPaddle)
    if(newBall.gameOver(newPaddle)) {
      audio2.play();
      this.lives--;
      newBall = new Ball(150, 135, 12);
    }
    if(newBlocks.blockBallCollision(newBall,context)) {
      audio.play();
      this.scoreCount++;
    }
  }

  gameOver() {
    if(this.lives === 0) {
      let showGameOver = document.querySelector('.show-game-over');
      showGameOver.classList.remove('game-over');
      return true;
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