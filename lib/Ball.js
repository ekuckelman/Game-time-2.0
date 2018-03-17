
class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = -2;
    this.dy = 1;
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
    if (this.y + this.radius < 0) {
      this.dy = - this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    return this;
  }

  ballCollision(newPaddle){
     if (this.x > newPaddle.x && this.x + this.radius < newPaddle.x + newPaddle.w && this.y + this.radius >= newPaddle.y) {
      this.dy = - this.dy;
      }
  }

  ballBlockCollision(newBlocks) {
    //can't test yet, not finished
    if (this.y - this.radius <= (newBlocks.y + newBlocks.height) && this.x - this.radius <= newBlocks.width) {
      newBlocks.active = false;
      this.dy = -this.dy;
      }
  }
}

module.exports = Ball;