const Gamepieces = require('./Gamepieces.js');

class Ball extends Gamepieces {
  constructor(x, y, radius) {
    super(x,y)
    this.radius = radius;
    this.dx = 4;
    this.dy = 4;
    this.color = 'white';
  }

  drawBall(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  moveBall(canvas) {
    if (this.x + this.radius > canvas.width || this.x < 10) {
      this.dx = - this.dx;
    }
    if (this.y + this.radius < 10) {
      this.dy = - this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    return this;
  }

  ballCollision(newPaddle){
     if (this.x + this.radius > newPaddle.x + 3 && this.x - this.radius - 2 < newPaddle.x + newPaddle.w && this.y + this.radius >= newPaddle.y) {
      this.dy = - this.dy;
      }
  }

  gameOver(newPaddle){
    if (this.y - this.radius >= newPaddle.y) {
      return true
    }
  }

}

module.exports = Ball;