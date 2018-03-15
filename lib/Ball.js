

const Paddle = require('./Paddle.js');


class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = -3;
    this.dy = -3;
  }

  drawBall(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
    context.closePath();
  }

  moveBall(canvas) {
    if (this.x + this.radius > (canvas.width) || this.x < 10) {
      this.dx = - this.dx;
    }
    if (this.y + this.radius > (canvas.height) || this.y < 10) {
      this.dy = - this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    return this;
  }

  ballCollision(newPaddle){
     // console.log(newPaddle.x)
     if (this.y >= newPaddle.y) {
      this.dy = - this.dy;
      } 
  }
}

module.exports = Ball;