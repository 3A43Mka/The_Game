function Dummy(x, y, health) {
  this.x = x * scale;
  this.y = y * scale;
  this.health = health;

  this.draw = function () {
    if (this.health > 0) {
      this.drawDummy();
      this.drawHealth();
    }
  }

  this.update = function (player) {
    const {x: punchX, y: punchY} = player.getPunchCoords();
    if (this.x === punchX && this.y === punchY && player.isPunching()) {
      this.takeHit();
    }
  }

  this.drawDummy = function () {
    ctx.fillStyle = "brown";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.drawHealth = function () {
    ctx.fillStyle = "white";
    ctx.font = '14px sans-serif';
    if (this.health === 1) ctx.fillStyle = "red";

    ctx.fillText(this.health, this.x+scale*0.3, this.y-scale*0.3, scale);
  }

  this.takeHit = function () {
    this.health--;
  }
}