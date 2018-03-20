const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
let newGame = new Game();
const startButton = document.querySelector('.start');

startButton.addEventListener('click', startGame);

function startGame() {
  let startScreen = document.querySelector('.start-screen');
  startScreen.classList.add('start-game');
  gameLoop();
}

 function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  newGame.draw(context);
  newGame.move(canvas);
  newGame.collision(canvas,context);
  newGame.stats(context);
  if(newGame.gameOver()){
    newGame = new Game();
  }  
  requestAnimationFrame(gameLoop);
};


