class Blocks {
  constructor({x, y, w, h}) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = '#7A9696';
    this.blocksRowCount = 4;
    this.blocksColumnCount = 9;
    this.active = true;
  }
  
  isActive(blocks, context) {
    if(blocks.active) {
      context.beginPath();
      context.rect(blocks.x, blocks.y, this.width, this.height);
      context.fillStyle = '#7A9696';
      context.fill();
      context.closePath();
    } else {
        this.active = false;
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = 'white';
      }
  }
 
  drawBlocks(context) { 
    const blocksArray = [];
      for(let i = 0; i < 9; i++) {
       for(let j = 0; j < 4; j++) {
        let newBlock = new Blocks({x:(i * (this.width + 2)) + 5, y:(j * (this.height + 2)) + 5, w:30, h:10});
        blocksArray.push(newBlock);
      }
    }
      blocksArray.map((block, index) => {
        block.x = block.x + 1;
        block.y = block.y + 1;
        this.isActive(block, context);
      })
  }
}

module.exports = Blocks;