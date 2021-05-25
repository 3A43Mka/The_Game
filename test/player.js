function Player() {
  this.x = 0;
  this.y = 0;
  this.coins = 0;
  this.directionMap = [0, 0, 0, 0]; // 0 - right, 1 - down, 2 - left, 3 - up
  this.punchDirectionMap = [0, 0, 0, 0]; // 0 - right, 1 - down, 2 - left, 3 - up
  this.punchX = 0;
  this.punchY = 0;
  this.punchCooldown = 0;

  this.draw = function () {
    this.drawPlayer();
    this.drawPunch();
    console.log(this.punchX, this.punchY);
  }

  this.drawPlayer = function () {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.drawPunch = function () {
    if (this.isPunching()) {
      ctx.fillStyle = "lightgrey";
      ctx.fillRect(this.punchX, this.punchY, scale, scale);
      this.addPunchCooldown();
    }
  }

  this.update = function () {
    this.updatePunchCooldown();
    this.movePlayer();
    this.movePunch();

    // console.log("PUNCHDIRMAP", this.punchDirectionMap);
    // console.log("PUNCHCOOLDOWN", this.punchCooldown);
  }

  this.movePlayer = function () {
    if (this.directionMap[0] === 1) this.x += scale * 1;
    if (this.directionMap[1] === 1) this.y += scale * 1;
    if (this.directionMap[2] === 1) this.x -= scale * 1;
    if (this.directionMap[3] === 1) this.y -= scale * 1;
  }

  this.movePunch = function () {
    this.punchX = this.x;
    this.punchY = this.y;

    if (this.isPunching()) {
      if (this.punchDirectionMap[0] === 1) this.punchX = this.x + scale * 1;
      if (this.punchDirectionMap[1] === 1) this.punchY = this.y + scale * 1;
      if (this.punchDirectionMap[2] === 1) this.punchX = this.x - scale * 1;
      if (this.punchDirectionMap[3] === 1) this.punchY = this.y - scale * 1;
    }
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

  this.updatePunchDirectionMap = function (index, x) {

    if (!((x === 1) || (x === 0))) {
      throw Error("Invalid value for punch direction map");
    }

    if ((index < 0) || (index >= this.punchDirectionMap.length)) {
      throw Error("Punch direction map index is out of range");
    }

    this.punchDirectionMap[index] = x;
  }

  this.updatePunchCooldown = function () {
    if (this.punchCooldown > 0) {
      this.punchCooldown--;
    }
  }

  this.getDirectionMap = function () {
    return this.directionMap;
  }

  this.getPunchDirectionMap = function () {
    return this.punchDirectionMap;
  }

  this.isPunching = function () {
    return (this.punchDirectionMap.some((x) => x === 1) && (this.punchCooldown <= 0));
  }

  this.addPunchCooldown = function () {
    if (this.punchCooldown <= 0) {
      this.punchCooldown += 5;
    }
  }

}