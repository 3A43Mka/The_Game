const canvas = document.querySelector(".canvas");
const logs = document.querySelector(".logs");

const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let player;
let dummy1;
let dummy2;
let dummy3;

(function setup() {
  player = new Player();
  dummy1 = new Dummy(5, 7, 4);
  dummy2 = new Dummy(15, 7, 6);
  dummy3 = new Dummy(3, 17, 8);

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    player.update();

    dummy1.update(player);
    dummy2.update(player);
    dummy3.update(player);

    dummy1.draw();
    dummy2.draw();
    dummy3.draw();

    player.draw();
  }, 150);
}());
// 0 - right, 1 - down, 2 - left, 3 - up
window.addEventListener('keydown', keyDownHandler);

window.addEventListener('keyup', keyUpHandler);

function drawBackground() {
  ctx.fillStyle = "darkgrey";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function keyDownHandler(evt) {
  const direction = evt.key;
  console.log(direction, "was pressed");
  const newP = document.createElement("P");
  newP.innerText = direction;
  logs.appendChild(newP);
  switch (direction) {
    case 'ArrowRight':
      if (player.getDirectionMap()[0] !== 1) player.updateDirectionMap(0, 1);
      break;
    case 'ArrowDown':
      if (player.getDirectionMap()[1] !== 1) player.updateDirectionMap(1, 1);
      break;
    case 'ArrowLeft':
      if (player.getDirectionMap()[2] !== 1) player.updateDirectionMap(2, 1);
      break;
    case 'ArrowUp':
      if (player.getDirectionMap()[3] !== 1) player.updateDirectionMap(3, 1);
      break;
    case 'd':
      if (player.getPunchDirectionMap()[0] !== 1) player.updatePunchDirectionMap(0, 1);
      break;
    case 's':
      if (player.getPunchDirectionMap()[1] !== 1) player.updatePunchDirectionMap(1, 1);
      break;
    case 'a':
      if (player.getPunchDirectionMap()[2] !== 1) player.updatePunchDirectionMap(2, 1);
      break;
    case 'w':
      if (player.getPunchDirectionMap()[3] !== 1) player.updatePunchDirectionMap(3, 1);
      break;
  }
}

function keyUpHandler(evt) {
    const direction = evt.key;
    console.log(direction, "was released");
    switch (direction) {
      case 'ArrowRight':
        if (player.getDirectionMap()[0] !== 0) player.updateDirectionMap(0, 0);
        break;
      case 'ArrowDown':
        if (player.getDirectionMap()[1] !== 0) player.updateDirectionMap(1, 0);
        break;
      case 'ArrowLeft':
        if (player.getDirectionMap()[2] !== 0) player.updateDirectionMap(2, 0);
        break;
      case 'ArrowUp':
        if (player.getDirectionMap()[3] !== 0) player.updateDirectionMap(3, 0);
        break;
      case 'd':
        if (player.getPunchDirectionMap()[0] !== 0) player.updatePunchDirectionMap(0, 0);
        break;
      case 's':
        if (player.getPunchDirectionMap()[1] !== 0) player.updatePunchDirectionMap(1, 0);
        break;
      case 'a':
        if (player.getPunchDirectionMap()[2] !== 0) player.updatePunchDirectionMap(2, 0);
        break;
      case 'w':
        if (player.getPunchDirectionMap()[3] !== 0) player.updatePunchDirectionMap(3, 0);
        break;
    }
}