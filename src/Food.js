class Food {
  constructor(p5, width, height) {
    this.p5 = p5;
    this.x = this.getRandomFood(width);
    this.y = this.getRandomFood(height);
  }

  getRandomFood = (a) => {
    let x = Math.floor(Math.random() * a) - 20;
    if (x % 20 === 0 && x > 0) {
      return x;
    } else {
      return this.getRandomFood(a);
    }
  };

  draw() {
    this.p5.fill(255, 0, 0);
    this.p5.noStroke();
    this.p5.rect(this.x, this.y, 20, 20);
  }
}

export default Food;
