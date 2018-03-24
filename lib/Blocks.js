const Block = require('./Block.js');
const newBlock = new Block(68, 20, '#5f7b7d');

class Blocks {
  constructor() {
    this.blocksArray = [];
    this.count = 0;
  }
  
  isActive(context, brickX, brickY) {
    context.beginPath();
    context.rect(brickX, brickY, newBlock.width, newBlock.height);
    context.fillStyle = newBlock.color;
    context.fill();
    context.closePath();
  } 

  createBlockArray() {
    for (let c = 0; c < 11; c++) {
      this.blocksArray[c] = [];
      for (let r = 0; r < 4; r++) {
        this.blocksArray[c][r] = {
          x: 0,
          y: 0,
          status: 'active',
        };
      }
    }
  }
   
  drawBlocks(context) { 
    for (let c = 0; c < 11; c++) {
      for (let r = 0; r < 4; r++) {
        if (this.blocksArray[c][r].status === 'active') {
          let blockX = (c * (newBlock.width + 5)) + 20;
          let blockY = (r * (newBlock.height + 5)) + 25;

          this.blocksArray[c][r].x = blockX;
          this.blocksArray[c][r].y = blockY; 
          this.isActive(context, blockX, blockY);
        } 
      }
    }
  }

  blockBallCollision(newBall) {
    for (let c = 0; c < 11; c++) {
      for (let r = 0; r < 4; r++) {
        let eachBlock = this.blocksArray[c][r];

        if (eachBlock.status === 'active') {
          if (newBall.x > eachBlock.x && newBall.x < eachBlock.x + newBlock.width &&
            newBall.y - newBall.radius < eachBlock.y + newBlock.height &&
            newBall.y - newBall.radius < eachBlock.y + newBlock.height) {
            newBall.dy = - newBall.dy;
            eachBlock.status = 'inactive';
            this.count++;
            this.blocksCount();
            return true;
          }
        } 
      }
    }
  }

  blocksCount() {
    if (this.count === 44) {
      return true;
    }
  }
}

module.exports = Blocks;