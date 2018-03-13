var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x = 50;
var y = 50;
var radius = 20;


requestAnimationFrame(function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  x = x + 1;
  context.beginPath();
  context.arc(x, y, 30, 0, 2 * Math.PI, false);
  context.fillStyle = 'blue';
  context.fill();
  context.closePath();

  requestAnimationFrame(gameLoop);
});