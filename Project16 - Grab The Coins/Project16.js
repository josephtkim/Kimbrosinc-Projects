/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Set up everything
	var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60)
		};
	var canvas = document.getElementById("myCanvas");
	var width = 700;
	var height = 400;
	canvas.width = width;
	canvas.height = height;
	var context = canvas.getContext('2d');
	var player = new Player();
	
	base_image = new Image();
	base_image.src = '../Project16 - Grab The Coins/coin.png';
	
	var sound1 = new Audio("../Project16 - Grab The Coins/coingrab.wav");
	
	// Create the objects to grab. Just named ball for now. 
	var ball = new Ball(10, 200);
	var ball2 = new Ball(115, 200);
	var ball3 = new Ball(220, 200);
	var ball4 = new Ball(325, 200);
	var ball5 = new Ball(430, 200);
	var ball6 = new Ball(535, 200);
	var ball7 = new Ball(640, 200);
		
	var ball8 = new Ball(10, 100);
	var ball9 = new Ball(115, 100);
	var ball10 = new Ball(220, 100);
	var ball11 = new Ball(325, 100);
	var ball12 = new Ball(430, 100);
	var ball13 = new Ball(535, 100);
	var ball14 = new Ball(640, 100);

	// Ball functions
	function Ball(x, y) {
		this.x = x;
		this.y = y;
	}	
	Ball.prototype.render = function () {
		context.drawImage(base_image, this.x, this.y)
	};	
	Ball.prototype.update = function (paddle1) {
		var top_x = this.x - 5;
		var top_y = this.y - 5;
		var bottom_x = this.x + 40;
		var bottom_y = this.y + 50;

		if ((top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x && top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y) ||
			(top_x > (paddle1.x - paddle1.width) && bottom_x < paddle1.x && top_y > (paddle1.y - paddle1.height) && bottom_y < paddle1.y)) {
			this.x = -100;
			sound1.play();
		}
	};

	var keysDown = {};

	// Render and update everything
	var render = function () {
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);
		ball.render();
		ball2.render();
		ball3.render();
		ball4.render();
		ball5.render();
		ball6.render();
		ball7.render();
		ball8.render();
		ball9.render();
		ball10.render();
		ball11.render();
		ball12.render();
		ball13.render();
		ball14.render();
		player.render();
	};
	var update = function () {
		player.update();
		ball.update(player.paddle);
		ball2.update(player.paddle);
		ball3.update(player.paddle);
		ball4.update(player.paddle);
		ball5.update(player.paddle);
		ball6.update(player.paddle);
		ball7.update(player.paddle);
		ball8.update(player.paddle);
		ball9.update(player.paddle);
		ball10.update(player.paddle);
		ball11.update(player.paddle);
		ball12.update(player.paddle);
		ball13.update(player.paddle);
		ball14.update(player.paddle);
	};
	var step = function () {
		update();
		render();
		animate(step);
	};

	// The paddle functions
	function Paddle(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.x_speed = 0;
		this.y_speed = 0;
	};
	Paddle.prototype.render = function () {
		context.fillStyle = "red";
		context.fillRect(this.x, this.y, this.width, this.height);
	};
	Paddle.prototype.move = function (x, y) {
		this.x += x;
		this.y += y;
		this.x_speed = x;
		this.y_speed = y;

		if (this.x < 0) {
			this.x = 0;
			this.x_speed = 0;
		} else if (this.y < 0) {
			this.y = 0;
			this.y_speed = 0;
		} else if (this.x + this.width > width) {
			this.x = width - this.width;
			this.x_speed = 0;
		} else if (this.y + this.height > height) {
			this.y = height - this.height;
			this.y_speed = 0;
		} 
	};
	
	// create and update the player paddle
	function Player() {
		this.paddle = new Paddle(20, 335, 40, 60);
	}
	Player.prototype.render = function () {
		this.paddle.render();
	};	
	Player.prototype.update = function () {
		for (var key in keysDown) {
			var value = Number(key);
			/*if (value == 38) {
				this.paddle.move(0, -4);
			} else if (value == 40) {
				this.paddle.move(0, 4);
			}*/ if (value == 39) {
				this.paddle.move(4, 0);
			} else if (value == 37) {
				this.paddle.move(-4, 0);
			} else if (value == 32) {
				this.paddle.move(0, -10);
			}
		}
		this.paddle.move(0, 4);
	};

	// Start it up and add event listeners
	document.body.appendChild(canvas);
	animate(step);

	window.addEventListener("keydown", function (event) {
		keysDown[event.keyCode] = true;
	});
	window.addEventListener("keyup", function (event) {
		delete keysDown[event.keyCode];
	});
});