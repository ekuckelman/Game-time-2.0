const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const newGame = new Game(50, 50, 10);


requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  newGame.draw(context);
  newGame.move();
  requestAnimationFrame(gameLoop);
});


