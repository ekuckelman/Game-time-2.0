var blocksArray;

class Blocks {
  constructor({x, y, w, h}) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.active = true;
  }
  
  isActive(blocks, context) {
      context.beginPath();
      context.rect(blocks.x, blocks.y, this.width, this.height);
      context.fillStyle = blocks.color;
      context.fill();
      context.closePath();
  } 
 
  drawBlocks(context, inactiveBlock) { 
    blocksArray = [];
      for(let i = 0; i < 9; i++) {
       for(let j = 0; j < 4; j++) {
        if(this.active === true){
        let newBlock = new Blocks({x:(i * (this.width + 2)) + 5, y:(j * (this.height + 2)) + 5, w:30, h:10});
        blocksArray.push(newBlock);
        }
      }
    }
      blocksArray.map((block, index) => {
        block.x = block.x + 1;
        block.y = block.y + 1;
        this.isActive(block, context);
      })
  }


  blockBallCollision(newBall,context){
    for(var i = 0; i < blocksArray.length; i++){
      if( getDistance(newBall.x, newBall.y, blocksArray[i].x, blocksArray[i].y) < newBall.radius + blocksArray[i].height + 3){
        newBall.color = "#"+((1<<24)*Math.random()|0).toString(16);
        blocksArray[i].active = false;
        blocksArray[i].color = 'red';
        this.isActive(blocksArray[i],context)
        // this.drawBlocks(context, blocksArray[i].active)
        newBall.dy = - newBall.dy;
      }
    }
  }
}

  function getDistance(ballX, ballY, blockX, blockY ){
    let xDistance = blockX - ballX;
    let yDistance = blockY - ballY;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance,2))
  }

module.exports = Blocks;
