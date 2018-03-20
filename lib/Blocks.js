
class Blocks {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.color = '#5f7b7d';
    this.blocksArray = [];
    this.count = 0;
  }
  
  isActive(context, brickX, brickY) {
      context.beginPath();
      context.rect(brickX, brickY, this.width, this.height);
      context.fillStyle = '#5f7b7d';
      context.fill();
      context.closePath();
  } 

  createBlockArray(){
    for(let c = 0; c < 11; c++) {
      this.blocksArray[c] = [];
      for(let r = 0; r < 4; r++) {
        this.blocksArray[c][r] = {
          x:0,
          y:0,
          status: 'active',
        }
      }
    }
  }
   
  drawBlocks(context) { 
    for (let c = 0; c < 11; c++) {
      for (let r = 0; r < 4; r++) {
        if (this.blocksArray[c][r].status === 'active') {
          let blockX = (c * (this.width + 5)) + 20;
          let blockY = (r * (this.height + 5)) + 25;
          this.blocksArray[c][r].x = blockX;
          this.blocksArray[c][r].y = blockY; 
          this.isActive(context, blockX, blockY);
        } 
      }
    }
  }

  blockBallCollision(newBall,context) {
    for (let c = 0; c < 11; c++) {
      for (let r = 0; r < 4; r++) {
        let eachBlock = this.blocksArray[c][r];
          if (eachBlock.status === 'active') {
            if (newBall.x > eachBlock.x && newBall.x < eachBlock.x + this.width && newBall.y - newBall.radius < eachBlock.y + this.height && newBall.y - newBall.radius < eachBlock.y + this.height) {
              newBall.dy = - newBall.dy;
              eachBlock.status = 'inactive';
              this.count ++;
              this.blocksCount();
              return true;
            }
          } 
      }
    }
  }
  blocksCount(){
    if(this.count === 44){
      alert('next')
    }
    console.log(this.count)
  }
}

module.exports = Blocks;






