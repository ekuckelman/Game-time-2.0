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
        //   // console.log('did it')
          context.beginPath();
          context.rect(this.x, this.y, this.width, this.height);
          context.fillStyle = '#7A9696';
          context.fill();
          context.closePath();
        } else {
          this.active = false;
          context.beginPath();
          context.rect(this.x, this.y, this.width, this.height);
          context.fillStyle = 'white';
          context.fill();
          context.closePath();
        }
      }

  drawBlocks(context) {
    // for (let column = 0; column < this.blocksColumnCount; column++) {
      // for (let row = 0; row < this.blocksRowCount; row++) {
      const blocksArray = [];
      for(let i = 0; i < 9; i++) {
        let newBlock = new Blocks(context);
        blocksArray.push(newBlock);
        // console.log(blocksArray);
        // this.x;
        // this.y;
        // this.x = ( i * (this.width + 2)) + 5;
        // this.y = (1 * (this.height + 2)) + 5;
        // this.id = {c:column, r:row};
      }
      blocksArray.map(block => {
        this.isActive(block, context);
      })
        // if(this.active) {
          //   // console.log('did it')
        //   context.beginPath();
        //   context.rect(this.x, this.y, this.width, this.height);
        //   context.fillStyle = '#7A9696';
        //   context.fill();
        //   context.closePath();
        // } else {
        //   this.active = false;
        //   context.beginPath();
        //   context.rect(this.x, this.y, this.width, this.height);
        //   context.fillStyle = 'white';
        //   context.fill();
        //   context.closePath();
        // }
      }
    }

module.exports = Blocks;