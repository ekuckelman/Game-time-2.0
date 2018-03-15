
const canvas = document.getElementById('game');

class Paddle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.x = (canvas.width - w)/2;
    this.y = (canvas.height - h);
  }

  drawPaddle(context) {
    context.beginPath();
    context.rect(this.x,this.y,this.w,this.h)
    context.fillStyle = 'white';
    context.fill();
    context.closePath();
  }

  movePaddle(rightPressed,leftPressed) {
    if(rightPressed && this.x < canvas.width - this.w){
      this.x +=7;
    } else if(leftPressed && this.x > 0){
      this.x -=7;
    }
  }
}



  module.exports = Paddle;