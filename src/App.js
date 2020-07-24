import React, { Component } from "react";
import Sketch from "react-p5";
import Snake from "./Snake";
import Food from "./Food";

class App extends Component {
	constructor(props) {
		super(props);
		this.snake = null;
		this.state.score = 0;
		this.state.gameEnded = false;
	}
	state = {};

	//p5 setup function
	setup = (p5, canvasParentRef) => {
		p5.createCanvas(600, 600).parent(canvasParentRef);
		p5.frameRate(12);

		//Creating Snake and Food Object
		this.snake = new Snake(p5);
		this.food = new Food(p5, p5.width, p5.height, this.snake);
	};

	//p5 draw function
	draw = (p5) => {
		p5.background(0);
		this.food.draw();
		this.snake.update(p5.width, p5.height);
		this.snake.checkEat(this.food, p5.width, p5.height);
		let score = this.snake.score;
		this.setState({ score: score });
		let gameEnded = this.snake.checkDeath();
		this.setState({ gameEnded: gameEnded });
		this.snake.draw();
	};

	//p5 keyPressed function
	// Up_ARROW = 38, LEFT_ARROW = 37, RIGHT_ARROW = 39, DOWN_ARROW = 40
	keyPressed = (p5) => {
		if (p5.keyCode === 38) {
			this.snake.changeDirection(0, -20);
			this.snake.dir = "UP";
		} else if (p5.keyCode === 37) {
			this.snake.changeDirection(-20, 0);
			this.snake.dir = "LEFT";
		} else if (p5.keyCode === 39) {
			this.snake.changeDirection(20, 0);
			this.snake.dir = "RIGHT";
		} else if (p5.keyCode === 40) {
			this.snake.changeDirection(0, 20);
			this.snake.dir = "DOWN";
		}
	};

	//Function to render Play Again button after the game ends
	getPlayAgainButton = () => {
		if (this.state.gameEnded) {
			return (
				<button className="btn" onClick={this.playAgain}>
					{" "}
					Play Again
				</button>
			);
		}
		return <div></div>;
	};

	//Play Again Function, that just reloads the Web Page
	playAgain = () => {
		window.location.reload();
	};

	//React render function
	render() {
		return (
			<React.Fragment>
				<p className="score">Score: {this.state.score}</p>
				<Sketch setup={this.setup} draw={this.draw} keyPressed={this.keyPressed} />
				{this.getPlayAgainButton()}
			</React.Fragment>
		);
	}
}

export default App;
