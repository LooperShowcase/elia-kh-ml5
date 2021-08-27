let player;
let back;
let plyerIMG;
let obstacleImg;
let obstacles = [];
let obst2;

function preload() {
  back = loadImage("backround.jpg");
  plyerIMG = loadImage("player.png");
  obstacleImg = loadImage("obstacle.png");
  obst2 = loadImage("obst2.png");
}

function setup() {
  createCanvas(400, 400);
  player = new Player();
}

function draw() {
  background(back);

  if (random(1) < 0.05) {
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      text("game over");
      noLoop();
    }
  }

  player.show();
  player.move();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
