class Blocks {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = '#7A9696';
    this.blocksRowCount = 4;
    this.blocksColumnCount = 9;
  }

  drawBlocks(context) {
    for (let column = 0; column < this.blocksColumnCount; column++) {
      for (let row = 0; row < this.blocksRowCount; row++) {
        this.x = (column * (this.w + 2)) + 5;
        this.y = (row * (this.h + 2)) + 5;
        context.beginPath();
        context.rect(this.x, this.y, this.w, this.h);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
      }
    }
  }
}

module.exports = Blocks;