const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
let newGame = new Game();
const startButton = document.querySelector('.start');
const restartButton = document.querySelector('.reStart');
const level = document.querySelector('.level');

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

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
  newGame.move(canvas);
  newGame.collision(canvas,context);
  newGame.stats(context);
  if(newGame.gameOver()) {
    return;
  }  
  if(newGame.newLevel()){
    level.innerText = `Level ${newGame.level + 1}`;
  }
  requestAnimationFrame(gameLoop);
};


