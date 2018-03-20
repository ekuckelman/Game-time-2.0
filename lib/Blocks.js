 
let blocksArray;

class Blocks {
  constructor({w, h}) {
    this.width = w;
    this.height = h;
    this.color = '#5f7b7d';
  }
  
  isActive(context, brickX, brickY) {
      context.beginPath();
      context.rect(brickX, brickY, this.width, this.height);
      context.fillStyle = '#5f7b7d';
      context.fill();
      context.closePath();
  } 

  createBlockArray(){
    blocksArray = [];
      for(let c = 0; c < 11; c++) {
        blocksArray[c] = [];
       for(let r = 0; r < 4; r++) {
        blocksArray[c][r] = {
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
        if (blocksArray[c][r].status === 'active') {
          let blockX = (c * (this.width + 5)) + 20;
          let blockY = (r * (this.height + 5)) + 25;
          blocksArray[c][r].x = blockX;
          blocksArray[c][r].y = blockY;
          this.isActive(context, blockX, blockY)
        }
      }
    }
  }

  blockBallCollision(newBall,context) {
    for (let c = 0; c < 11; c++) {
      for (let r = 0; r < 4; r++) {
        let eachBlock = blocksArray[c][r];
          if (eachBlock.status === 'active') {
            if (newBall.x > eachBlock.x && newBall.x < eachBlock.x + this.width && newBall.y - newBall.radius < eachBlock.y + this.height && newBall.y - newBall.radius < eachBlock.y + this.height) {
              newBall.dy = - newBall.dy;
              eachBlock.status = 'inactive';
              return true;
            }
          } 
      }
    }
  }
}

module.exports = Blocks;


