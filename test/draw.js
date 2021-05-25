const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let player;

(function setup() {
  player = new Player();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    player.update();
    player.draw();
  }, 150);
}());
// 0 - right, 1 - down, 2 - left, 3 - up
window.addEventListener('keydown', keyDownHandler);

window.addEventListener('keyup', keyUpHandler);

function drawBackground() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function keyDownHandler(evt) {
  const direction = evt.key.replace('Arrow', '');
  console.log(direction, "was pressed");
  switch (direction) {
    case 'Right':
      if (player.getDirectionMap()[0] !== 1) player.updateDirectionMap(0, 1);
      break;
    case 'Down':
      if (player.getDirectionMap()[1] !== 1) player.updateDirectionMap(1, 1);
      break;
    case 'Left':
      if (player.getDirectionMap()[2] !== 1) player.updateDirectionMap(2, 1);
      break;
    case 'Up':
      if (player.getDirectionMap()[3] !== 1) player.updateDirectionMap(3, 1);
      break;
  }
}

function keyUpHandler(evt) {
  const direction = evt.key.replace('Arrow', '');
  console.log(direction, "was released");
  switch (direction) {
    case 'Right':
      if (player.getDirectionMap()[0] !== 0) player.updateDirectionMap(0, 0);
      break;
    case 'Down':
      if (player.getDirectionMap()[1] !== 0) player.updateDirectionMap(1, 0);
      break;
    case 'Left':
      if (player.getDirectionMap()[2] !== 0) player.updateDirectionMap(2, 0);
      break;
    case 'Up':
      if (player.getDirectionMap()[3] !== 0) player.updateDirectionMap(3, 0);
      break;
  }
}