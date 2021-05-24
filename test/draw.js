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
    player.update();
    player.draw();
  }, 150);
}());

window.addEventListener('keydown', ((evt) => {
  player.isHoldingKey = true;
  console.log(evt);
  const direction = evt.key.replace('Arrow', '');
  if (player.lastPressedKey && direction != player.lastPressedKey) {
    player.isHoldingKey = false;
  }
  player.changeDirection(direction);
}));

window.addEventListener('keyup', ((evt) => {
  console.log("Key was released");
  player.isHoldingKey = false;
}));