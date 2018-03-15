class Blocks {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = '#7A9696';
    this.blocksRowCount = 4;
    this.blocksColumnCount = 9;
  }

  drawBlocks(context) {
    for (let column = 0; column < this.blocksColumnCount; column++) {
      for (let row = 0; row < this.blocksRowCount; row++) {
        this.x = (column * (this.width + 2)) + 5;
        this.y = (row * (this.height + 2)) + 5;
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
      }
    }
  }
}

module.exports = Blocks;