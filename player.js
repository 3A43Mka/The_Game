const stepSound1 = new Audio('./rsc/sounds/step1.mp3');
const stepSound2 = new Audio('./rsc/sounds/step2.mp3');
const stepSound3 = new Audio('./rsc/sounds/step3.mp3');
const stepSound4 = new Audio('./rsc/sounds/step4.mp3');
const stepSound5 = new Audio('./rsc/sounds/step5.mp3');
const stepSound6 = new Audio('./rsc/sounds/step6.mp3');
const stepSound7 = new Audio('./rsc/sounds/step7.mp3');
const stepSound8 = new Audio('./rsc/sounds/step8.mp3');
const stepSound9 = new Audio('./rsc/sounds/step9.mp3');
const stepSound10 = new Audio('./rsc/sounds/step10.mp3');
const stepSound11 = new Audio('./rsc/sounds/step11.mp3');
const stepSound12 = new Audio('./rsc/sounds/step12.mp3');

const swingSound1 = new Audio('./rsc/sounds/swing1.mp3');
const swingSound2 = new Audio('./rsc/sounds/swing2.mp3');

function Player() {
  this.x = 0;
  this.y = 0;
  this.coins = 0;
  this.directionMap = [0, 0, 0, 0]; // 0 - right, 1 - down, 2 - left, 3 - up
  this.punchDirectionMap = [0, 0, 0, 0]; // 0 - right, 1 - down, 2 - left, 3 - up
  this.punchX = 0;
  this.punchY = 0;
  this.punchCooldown = 0;
  this.stepMap = [stepSound1, stepSound2, stepSound3, stepSound4, stepSound5,
    stepSound6, stepSound7, stepSound8, stepSound9, stepSound10,
    stepSound11, stepSound12];
  this.swingMap = [swingSound1, swingSound2];
  this.stepCycle = 0;
  this.swingCycle = 0;

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
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "lightgrey";
      ctx.fillRect(this.punchX, this.punchY, scale, scale);
      ctx.globalAlpha = 1;
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

    if (this.directionMap.some((x) => x === 1)) {
      this.produceStep();
    }
  }

  this.movePunch = function () {
    this.punchX = this.x;
    this.punchY = this.y;

    if (this.isPunching()) {
      if (this.punchDirectionMap[0] === 1) this.punchX = this.x + scale * 1;
      if (this.punchDirectionMap[1] === 1) this.punchY = this.y + scale * 1;
      if (this.punchDirectionMap[2] === 1) this.punchX = this.x - scale * 1;
      if (this.punchDirectionMap[3] === 1) this.punchY = this.y - scale * 1;
      this.produceSwing();
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

  this.getPunchCoords = function () {
    return {x: this.punchX, y: this.punchY}
  }

  this.produceStep = function () {
    this.stepMap[this.stepCycle].play();
    this.stepCycle += 1;
    this.stepCycle = this.stepCycle % 11;
  }

  this.produceSwing = function () {
    this.swingMap[this.swingCycle].play();
    this.swingCycle += 1;
    this.swingCycle = this.swingCycle % 2;
  }

}