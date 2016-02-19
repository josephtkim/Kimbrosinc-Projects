/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Make this run smoove
	var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
		window.setTimeOut(callback, 1000 / 60)
	};
	
	// set up the canvas
	var canvas = document.getElementById("canvas");
	var width = 600,
		height = 500;
	canvas.width = width;
	canvas.height = height;
	var context = canvas.getContext('2d');
	
	// set important values
	var paddle_width = 100,
		paddle_height = 10,
		block_width = 64.6,
		block_height = 16,
		player1Score = 0,
		lives = 5,
		cols = 9,
		rows = 7,
		offset = 70;
		
	var brickcount = cols * rows;
		
	var gameover = 0;
	
	// Create the important things
	var player = new Player(), 			// Player
		ball = new Ball(width/2, 240);  // Ball
		
	//create the bricks	
	var bricks = [];
	
	for (var i = 0; i < cols; i++) {
		bricks[i] = [];
		for (var j = 0; j < rows; j++) {
			bricks[i][j] = {x: 0, y: 0, exists: 1};
		}
	}

	// Draw the bricks 
	function drawBricks() {
		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < cols; j++) {
				if (bricks[j][i].exists == 1) {
					var brickX = j * (block_width + 2) + 1;
					var brickY = i * (block_height + 2) + offset;
					bricks[j][i].x = brickX;
					bricks[j][i].y = brickY;
					
					var color;
					
					if (i === 0) {
						color = "blue";						
					} else if (i === 1) {
						color = "purple";
					} else if (i === 2) {
						color = "red";
					} else if (i === 3) {
						color = "orange";
					} else if (i === 4) {
						color = "yellow";
					} else if (i === 5) {
						color = "green";
					} else if (i === 6) {
						color = "blue";
					}
					
					context.fillStyle = color;
					context.fillRect(brickX, brickY, block_width, block_height);
				}
			}
		}
	}

	// Check for brick collisions
	function collision(top_x, bottom_x, top_y, bottom_y) {
		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < cols; j++) {
				var b = bricks[j][i];
				if (b.exists == 1) {
					if (top_y < (b.y + block_height) && bottom_y > b.y && top_x < (b.x + block_width) && bottom_x > b.x) {
						b.exists = 0;
						ball.y_speed = -ball.y_speed;
						player1Score += 1;
						brickcount -= 1;
					}
				}
			}
		}
	}
	
	// Check if game is over
	function gameovercheck() {
		if (lives === 0) {
			ball.y_speed = 0;
			ball.x_speed = 0;
			context.font = "40px Copperplate";
			context.fillText("GAME OVER", width/2 - 120, height/2 + 35);
			gameover = 1;
			document.getElementById("newgame").style.visibility = "visible";
		}
		else if (brickcount === 0) {
			ball.y_speed = 0;
			ball.x_speed = 0;
			context.font = "40px Copperplate";
			context.fillText("YOU WIN!", width/2 - 95, height/2 + 35);
			gameover = 1;
			document.getElementById("newgame").style.visibility = "visible";
		}
	}
		
	var keysDown = {};
	
	// Draw the score 
	function drawScore() {
		context.font = "20px Copperplate";
		context.fillText("Score: " + player1Score, 20, 39);
		context.fillText("Lives: " + lives, width - 85, 39);
		context.fillStyle = "white";
		context.fillRect(0, 65, width, 5);
	};

	// Functions that keep running
	var render = function () {
		context.fillStyle = "black";
		context.fillRect(0, 0, width, height);
		player.render();
		ball.render();
		drawScore();
		gameovercheck();
		drawBricks();
	};
	var update = function () {
		player.update();
		ball.update(player.paddle);
	};
	var step = function () {
		update();
		render();
		animate(step);
	};

	// Move the paddle 
	Paddle.prototype.move = function (x, y) {
		this.x += x;
		this.y += y;
		this.x_speed = x;
		this.y_speed = y;
		if (this.x < 0) {
			this.x = 0;
			this.x_speed = 0;
		} else if (this.x + this.width > width) {
			this.x = width - this.width;
			this.x_speed = 0;
		}
	};
	
	// Set up the player paddle
	function Paddle(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.x_speed = 0;
		this.y_speed = 0;
	}
	function Player() {
		this.paddle = new Paddle(width/2 - paddle_width/2, height - 20, paddle_width, paddle_height);
	}	
	function Ball(x, y) {
		this.x = x;
		this.y = y;
		this.x_speed = 0;
		this.y_speed = 4;
	}

	// Render stuff
	Player.prototype.render = function () { 
		this.paddle.render(); 
	};	
	Paddle.prototype.render = function () {  
		context.fillStyle = "white";
		context.fillRect(this.x, this.y, this.width, this.height);
	};
	Ball.prototype.render = function () { 
		context.beginPath();
		context.arc(this.x, this.y, 7, 2 * Math.PI, false);
		context.fillStyle = "white";
		context.fill();
	};
	
	// Update
	Player.prototype.update = function () { // Player movement
		for (var key in keysDown) {
			var value = Number(key);
			if (value == 37) {
				this.paddle.move(-6, 0);
			} else if (value == 39) {
				this.paddle.move(6, 0);
			} else {
				this.paddle.move(0, 0);
			}
		}
	};
	Ball.prototype.update = function (paddle1) {
		this.x += this.x_speed;
		this.y += this.y_speed;
		var top_x = this.x - 5;
		var top_y = this.y - 5;
		var bottom_x = this.x + 5;
		var bottom_y = this.y + 5;

		if (this.y - 5 < 70) {
			this.y = 75;
			this.y_speed = -this.y_speed;
		} else if (this.y > height) {
			this.x_speed = 0;
			this.y_speed = 4;
			if (lives >= 1) {
				lives -= 1;
				this.x = width / 2;
				this.y = 230;
				paddle1.x = width/2 - paddle_width/2;
			}
		}

		if (this.x - 5 <= 0 || this.x >= width - 5) {
			this.x_speed = -this.x_speed;
		}

		// check collision with paddle
		if (top_y < (paddle1.y) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
			this.y_speed = -this.y_speed * 1.03;
			this.x_speed += (paddle1.x_speed / 4);
		}
		
		// Check collisions with bricks
		collision(top_x, bottom_x, top_y, bottom_y);
	};

	document.body.appendChild(canvas);
	animate(step);

	window.addEventListener("keydown", function (event) {
		keysDown[event.keyCode] = true;
	});
	window.addEventListener("keyup", function (event) {
		delete keysDown[event.keyCode];
	});
	
	// Start a new game
	function newgame() {
		lives = 5;
		player1Score = 0;
		brickcount = cols * rows;
		
		for (var i = 0; i < cols; i++) {
			bricks[i] = [];
			for (var j = 0; j < rows; j++) {
				bricks[i][j] = {x: 0, y: 0, exists: 1};
			}
		}
		
		ball.x = width / 2;
		ball.y = 230;
		
		ball.y_speed = 4;
		ball.x_speed = 0;
		gameover = 0;
	}
	
	// New game button
	$("#newgame").click(function() {
		newgame();
		document.getElementById("newgame").style.visibility = "hidden";
	})
	
})