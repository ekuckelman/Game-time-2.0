const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const startButton = document.querySelector('.start');
const restartButton = document.querySelector('.reStart');
const levelNum = document.querySelector('.level');
let newGame = new Game();
let audio = new Audio("./images/Bomb+2.mp3");
let audio2 = new Audio("./images/Power Failure-SoundBible.com-1821346166.mp3");
let rightPressed;
let leftPressed;

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
document.addEventListener('keydown', (e) => keyDown(e), false);
document.addEventListener('keyup', (e) => keyUp(e), false);

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

function startGame() {
  let startScreen = document.querySelector('.start-screen');
  startScreen.classList.add('start-game');
  gameLoop();
}

function restartGame() {
  let showGameOver = document.querySelector('.show-game-over');
  window.location.reload(true);
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  newGame.draw(context);
  newGame.move(canvas,rightPressed,leftPressed);
  newGame.collision(canvas,context,audio,audio2);
  newGame.stats(context);
  if(newGame.gameOver()) {
    return;
  } 
  nextLevel() 
  requestAnimationFrame(gameLoop);
};

function nextLevel() {
  if(newGame.newLevel(context)){
    levelNum.innerText = `Level ${newGame.level}`;
  }
}





