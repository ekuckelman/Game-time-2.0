class Paddle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.x = (170 - w);
    this.y = (150 - h);
  }

  drawPaddle(context) {
    context.beginPath();
    context.rect(this.x, this.y, this.w, this.h);
    context.stroke();
    context.fillStyle = '#e0afaf';
    context.fill();
    context.closePath();
  }

  movePaddle(rightPressed, leftPressed, canvas) {
    if (rightPressed && this.x < canvas.width - this.w) {
      this.x += 7;
    } else if (leftPressed && this.x > 0) {
      this.x -= 7;
    }
  }
}

module.exports = Paddle;