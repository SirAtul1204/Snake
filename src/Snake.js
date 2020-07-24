//Snake Class
class Snake {
	//Constructor with p5 as a argument, so that I can save it a
	//variable and can use it through out the class
	constructor(p5) {
		this.p5 = p5;
		this.x = [300];
		this.y = [300];
		this.speedX = 0;
		this.speedY = 0;
		this.dir = "";
		this.score = 0;
	}

	//Function called when a Key is Pressed and Changes the Direction of the movement of the Snake.
	changeDirection(a, b) {
		this.speedX = a;
		this.speedY = b;
	}

	//Method to check if the Snake(it's Head) ate the Food
	checkEat(food, width, height) {
		if (
			Math.abs(this.x[this.x.length - 1] - food.x) < 20 &&
			Math.abs(this.y[this.x.length - 1] - food.y) < 20
		) {
			//Increasing the length of Snake
			if (this.dir === "UP") {
				this.x.push(food.x);
				this.y.push(food.y - 20);
			} else if (this.dir === "LEFT") {
				this.x.push(food.x - 20);
				this.y.push(food.y);
			} else if (this.dir === "RIGHT") {
				this.x.push(food.x + 20);
				this.y.push(food.y);
			} else if (this.dir === "DOWN") {
				this.x.push(food.x);
				this.y.push(food.y + 20);
			}

			//Changing the location of food, to make the illusion of getting new food
			food.x = food.getRandomFood(width);
			food.y = food.getRandomFood(height);

			this.score++;
			return this.score;
		}
	}

	//Function responsible for movement of the Snake
	update(width, height) {
		let headX = this.x[this.x.length - 1];
		let headY = this.y[this.y.length - 1];

		this.x.shift();
		this.y.shift();

		headX += this.speedX;
		headY += this.speedY;

		this.x.push(headX);
		this.y.push(headY);

		for (let i = 0; i < this.x.length; i++) {
			if (this.x[i] + 20 > width) {
				this.x[i] = 0;
			} else if (this.x[i] < 0) {
				this.x[i] = width;
			} else if (this.y[i] + 20 > height) {
				this.y[i] = 0;
			} else if (this.y[i] < 0) {
				this.y[i] = height;
			}
		}
	}

	//Function that draws Snake on the Canvas
	draw() {
		for (let i = 0; i < this.x.length; i++) {
			this.p5.fill(0, 255, 0);
			this.p5.noStroke();
			this.p5.rect(this.x[i], this.y[i], 20, 20);
		}
	}

	//Function to check Death/Game-End
	checkDeath() {
		let flag = 0;
		for (let i = 0; i < this.x.length - 1; i++) {
			if (
				Math.abs(this.x[this.x.length - 1] - this.x[i]) < 20 &&
				Math.abs(this.y[this.y.length - 1] - this.y[i]) < 20
			) {
				this.p5.noLoop();
				flag = 1;
			}
		}
		if (flag === 1) {
			return true;
		} else return false;
	}
}

export default Snake;
