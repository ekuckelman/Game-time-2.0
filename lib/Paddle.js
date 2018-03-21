class Paddle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.x = (420 - w);
    this.y = (430  - h);
    this.color = '#e0afaf';
  }

  drawPaddle(context) {
    context.beginPath();
    context.rect(this.x, this.y, this.w, this.h);
    context.stroke();
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  movePaddle(rightPressed, leftPressed, canvas) {
    if (rightPressed && this.x < canvas.width - this.w) {
      this.x += 6;
    } else if (leftPressed && this.x > 0) {
      this.x -= 6;
    }
  }
}

module.exports = Paddle;