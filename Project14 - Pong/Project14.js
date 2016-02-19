/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Thanks to Matt Mongeau of thoughtbot.com for the skeleton with which to build this game. 

	// Set up animate
	var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60)
		};
		
	// Set all the important variables
	var canvas = document.getElementById("myCanvas");
	var width = 700;
	var height = 400;
	canvas.width = width;
	canvas.height = height;
	var context = canvas.getContext('2d');
	var player = new Player();
	var computer = new Computer();
	var ball = new Ball(355, 200);
	var player1Score = 0;
	var player2Score = 0;
	var sound1 = new Audio("../Project14 - Pong/beep.wav");
	var keysDown = {};

	// Display the current score
	function drawScore() {	
		context.font = "30px Copperplate";
		context.fillText(player1Score, 200, 40);
		context.fillText(player2Score, 500, 40);
		// draw the center line
		for (var i = 2; i < 400; i += 13)
		{
			context.fillStyle = "white";
			context.fillRect(354, i, 4, 5);
		}
	}

	// render everything
	var render = function () {
		context.fillStyle = "black";
		context.fillRect(0, 0, width, height);
		player.render();
		computer.render();
		ball.render();
		drawScore();
	};

	// update player, ball and computer paddle
	var update = function () {
		player.update();
		computer.update(ball);
		ball.update(player.paddle, computer.paddle);
	};

	// step
	var step = function () {
		update();
		render();
		animate(step);
	};

	// Create the paddle
	function Paddle(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.x_speed = 0;
		this.y_speed = 0;
	}

	// render the paddle onto the canvas
	Paddle.prototype.render = function () {
		context.fillStyle = "white";
		context.fillRect(this.x, this.y, this.width, this.height);
	};

	// Moving the paddle 
	Paddle.prototype.move = function (x, y) {
		this.x += x;
		this.y += y;
		this.x_speed = x;
		this.y_speed = y;
		if (this.y < 0) {
			this.y = 0;
			this.y_speed = 0;
		} else if (this.y + this.height > height) {
			this.y = height - this.height;
			this.y_speed = 0;
		}
	};

	// create computer player
	function Computer() {
		this.paddle = new Paddle(680, 170, 10, 60);
	}
	
	// render the computer paddle
	Computer.prototype.render = function () {
		this.paddle.render();
	};
	
	// Update the computer paddle
	Computer.prototype.update = function (ball) {
		var y_pos = ball.y;
		var diff = -((this.paddle.y + (this.paddle.height / 2)) - y_pos);
		if (diff < 0 && diff < -4) {
			diff = -5;
		} else if (diff > 0 && diff > 4) {
			diff = 5;
		}
		this.paddle.move(0, diff);
		if (this.paddle.y < 0) {
			this.paddle.y = 0;
		} else if (this.paddle.y + this.paddle.height > height) {
			this.paddle.y = height - this.paddle.height;
		}
	};
	
	// creating the player
	function Player() {
		this.paddle = new Paddle(10, 170, 10, 60);
	}

	Player.prototype.render = function () {
		this.paddle.render();
	};
	
	// updating the player
	Player.prototype.update = function () {
		for (var key in keysDown) {
			var value = Number(key);
			if (value == 38) {
				this.paddle.move(0, -4);
			} else if (value == 40) {
				this.paddle.move(0, 4);
			} else {
				this.paddle.move(0, 0);
			}
		}
	};
	
	// creating a ball
	function Ball(x, y) {
		this.x = x;
		this.y = y;
		this.x_speed = -3;
		this.y_speed = 0;
	}
	
	// rendering the ball
	Ball.prototype.render = function () {
		context.beginPath();
		context.arc(this.x, this.y, 5, 2 * Math.PI, false);
		context.fillStyle = "white";
		context.fill();
	};
	
	// updating the ball based on the positions of both players
	Ball.prototype.update = function (paddle1, paddle2) {
		this.x += this.x_speed;
		this.y += this.y_speed;
		var top_x = this.x - 5;
		var top_y = this.y - 5;
		var bottom_x = this.x + 5;
		var bottom_y = this.y + 5;

		if (this.y - 5 < 0) {
			this.y = 5;
			this.y_speed = -this.y_speed;
			sound1.play();
		} else if (this.y + 5 > height) {
			this.y = 395;
			this.y_speed = -this.y_speed;
			sound1.play();
		}

		if (this.x < 0 || this.x > width) {
			if (this.x < 0) {
				player2Score += 1;
			}
			else if (this.x > width) {
				player1Score += 1;
			}
			this.x_speed = -3;
			this.y_speed = 0;
			this.x = 350;
			this.y = 200;
		}

		if (top_x < 350) {
			if (top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x && top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y) {
				this.x_speed = 3;
				this.y_speed += (paddle1.y_speed / 2);
				this.x += this.x_speed;
				sound1.play();
			}
		} else {
			if (top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x && top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y) {
				this.x_speed = -3;
				this.y_speed += (paddle2.y_speed / 2);
				this.x += this.x_speed;
				sound1.play();
			}
		}
	};

	// start it up
	document.body.appendChild(canvas);
	animate(step);

	// add the key event listeners
	window.addEventListener("keydown", function (event) {
		keysDown[event.keyCode] = true;
	});
	window.addEventListener("keyup", function (event) {
		delete keysDown[event.keyCode];
	});
});