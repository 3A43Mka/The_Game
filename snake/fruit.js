function Fruit() {
  this.x = 0;
  this.y = 0;

  this.pickLocation = function () {
    this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
  }

  this.draw = function () {
    ctx.fillStyle = "#4cafab";
    ctx.fillRect(this.x, this.y, scale, scale)
  }
}