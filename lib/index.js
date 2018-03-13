var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Game = require('./Game.js');
var newGame = new Game(50, 50, 10);

requestAnimationFrame(function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  newGame.draw(context);
  newGame.move();
  requestAnimationFrame(gameLoop);
});
