class Obstacle {
  constructor() {
    this.option = random(1);
    this.size = 50;
    this.x = width;
    this.img = obstacleImg;
    if (this.option >= 0.5) {
      this.y = height - this.size;
    } else {
      this.y = height - this.size - 300;
      this.img = obst2;
    }
  }

  show() {
    image(this.img, this.x, this.y - 10, this.size, this.size);
  }

  move() {
    this.x = this.x - 6;
  }
}
