class Player {
  constructor() {
    this.size = 50;
    this.x = 50;
    this.y = height - this.size;
    this.velocity = 0;
    this.gravity = 0.5;
  }
  show() {
    image(plyerIMG, this.x, this.y - 40, this.size, this.size);
  }

  jump() {
    this.velocity = -10;
  }
  move() {
    this.velocity = this.velocity + this.gravity;
    this.y = this.y + this.velocity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 20,
      this.size - 20,

      currentObs.x,
      currentObs.y,
      currentObs.size - 20,
      currentObs.size - 20
    );
    return isColliding;
  }
}
