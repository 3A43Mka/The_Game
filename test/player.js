function Player() {
  this.x = 0;
  this.y = 0;
  this.coins = 0;
  this.direction = null;
  this.isHoldingKey = false;
  this.lastPressedKey = null;

  this.draw = function () {
    ctx.fillStyle = "#FFFFFF";

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function () {
    if (this.direction && this.isHoldingKey) {
      this.movePlayer(this.direction);
      if (!this.isHoldingKey) {
        this.direction = null;
      }
    }
  }

  this.movePlayer = function (direction) {
    switch (direction) {
      case 'Up':
        this.y -= scale * 1;
        break;
      case "Down":
        this.y += scale * 1;
        break;
      case 'Left':
        this.x -= scale * 1;
        break;
      case 'Right':
        this.x += scale * 1;
        break;
    }
  }

  this.changeDirection = function (direction) {
    if (this.isHoldingKey) {
      this.direction = direction;
    } else {
      this.direction = null;
    }
  }
}