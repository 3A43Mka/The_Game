function Player() {
  this.x = 0;
  this.y = 0;
  this.coins = 0;
  this.isHoldingKey = false;
  this.directionMap = [0, 0, 0, 0]; // 0 - right, 1 - down, 2 - left, 3 - up

  this.draw = function () {
    ctx.fillStyle = "#FFFFFF";

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function () {
    this.movePlayer();
  }

  this.movePlayer = function () {
    if (this.directionMap[0] === 1) this.x += scale * 1;
    if (this.directionMap[1] === 1) this.y += scale * 1;
    if (this.directionMap[2] === 1) this.x -= scale * 1;
    if (this.directionMap[3] === 1) this.y -= scale * 1;
  }

  this.startHoldingKey = function () {
    this.isHoldingKey = true;
  }

  this.endHoldingKey = function () {
    this.isHoldingKey = false;
  }

  this.updateDirectionMap = function (index, x) {

    if (!((x === 1) || (x === 0))) {
      throw Error("Invalid value for direction map");
    }

    if ((index < 0) || (index >= this.directionMap.length)) {
      throw Error("Direction map index is out of range");
    }

    this.directionMap[index] = x;
  }

  this.getDirectionMap = function () {
    return this.directionMap;
  }



}