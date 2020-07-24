//Food Class
class Food {
	//Passing canvas width, length and p5
	constructor(p5, width, height, snake) {
		this.p5 = p5;
		this.snake = snake;
		this.cnt = 0;
		//Getting Random Location of the food
		this.x = this.getRandomFood(width);
		this.y = this.getRandomFood(height);
	}

	//Function to get a random number between 0 and (a - 20)
	//20x20 is the size(width x height) of the Snake and the Food
	getRandomFood = (a) => {
		let x = Math.floor(Math.random() * a) - 20;
		if (
			x % 20 === 0 &&
			x > 0 &&
			!this.snake.x.includes(x) &&
			!this.snake.y.includes(x) &&
			this.cnt < 20
		) {
			this.cnt++;
			return x;
		} else {
			this.cnt = 0;
			return this.getRandomFood(a);
		}
	};

	//Function to draw Food on the Canvas
	draw() {
		this.p5.fill(255, 0, 0);
		this.p5.noStroke();
		this.p5.rect(this.x, this.y, 20, 20);
	}
}

export default Food;
