/* By Joseph Kim, 2016 */

$(document).ready(function(){		
	// canvas objects
	var canvas = document.getElementById("canvas"),
	    context = canvas.getContext('2d');	
	
	// Start the snake body as 3 segments, each 10 pixels long
	var segment = 10,
		snakebody = [{x: 10, y: 30}, {x: 20, y: 30}, {x: 30, y: 30}];
	
	// food variables
	var foodcheck = 0, 
	    foodx = 0,
		foody = 0;

	// More important variables
	var speed = 10,
	    score = 0,
		intervals = 200,
		direction = "right";
	
	var start;
	var color = "green";

	// shift all the snake segments to follow the head
	function shiftsnake() {
		for (var i = snakebody.length - 1; i > 0; i--) {
			snakebody[i].x = snakebody[i-1].x;
			snakebody[i].y = snakebody[i-1].y;
		}
	}
	
	// Fill each part of the snake
	function fillsnake() {
		for (var i = 0; i < snakebody.length; i++) {
			context.fillRect(snakebody[i].x, snakebody[i].y, segment, segment);
		}
	}
	
	// Draw the snake 
	function drawsnake() {
		if (direction === "right") {
			shiftsnake();
			snakebody[0].x += speed;
			context.fillStyle = color;					
			fillsnake();
		} else if (direction === "left") {
			shiftsnake();
			snakebody[0].x -= speed;
			context.fillStyle = color;
			fillsnake();
		} else if (direction === "down") {
			shiftsnake();
			snakebody[0].y += speed;
			context.fillStyle = color;
			fillsnake();
		} else if (direction === "up") {
			shiftsnake();
			snakebody[0].y -= speed;
			context.fillStyle = color;
			fillsnake();
		}
		
		// Food collision check
		if ((snakebody[0].x >= (foodx) && snakebody[0].x < (foodx + segment)) && (snakebody[0].y >= (foody) && snakebody[0].y < (foody + segment))) {
			foodcheck = 0;
			snakebody.push({x: snakebody[(snakebody.length)-1].x, y: snakebody[(snakebody.length)-1].y});
			score += 1;
			speedup()
		}
		
		// Self collision check
		for (var i = 3; i < snakebody.length; i++) {
			if (snakebody[0].x === snakebody[i].x && snakebody[0].y === snakebody[i].y) {
				clearInterval(start);
				document.getElementById("newgame").style.visibility = "visible";
			} 
		}
		
		// Collide with the walls
		if (snakebody[0].x < 0 || snakebody[0].x > canvas.width - 8) {
			clearInterval(start);
			document.getElementById("newgame").style.visibility = "visible";
		}
		else if (snakebody[0].y < 0 || snakebody[0].y > canvas.height - 8) {
			clearInterval(start);			
			document.getElementById("newgame").style.visibility = "visible";
		}
	}
	
	// Draw the food somewhere randomly on the canvas
	function drawfood() {
		if (foodcheck === 0) {
			foodx = Math.floor((Math.random() * 430) + 1);
			foody = Math.floor((Math.random() * 430) + 1);
			foodx = foodx - (foodx % 10);
			foody = foody - (foody % 10);
			foodcheck = 1;
		}
		context.fillStyle = "white";			
		context.fillRect(foodx, foody, segment, segment);
	}
	
	function drawScore() {	
		context.font = "15px CopperPlate";
		context.fillText("score: " + score, 5, 17);
	}
	
	function update() {		
		context.lineWidth=1;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.beginPath();
		context.fillStyle = "white";
		drawsnake();
		drawfood();
		drawScore();
	}

	// New game
	function newgame() {
		snakebody = [{x: 10, y: 30}, {x: 20, y: 30}, {x: 30, y: 30}];
		score = 0;
		intervals = 200,
		foodcheck = 0;
		direction = "right";
		start = setInterval(update, intervals);
	}
	
	// Speed up the game each time food is eaten
	function speedup() {
		clearInterval(start);
		if (intervals > 60) {
			intervals -= 7;
		}
		start = setInterval(update, intervals);
	}
	
	// Check the key pressed
	$(document).on('keydown', function(event) {
		var key = event.keyCode;
		
		if (key == 38 && direction != "down") {
			setTimeout(function() {
				direction = "up";
			}, 30);
		} else if (key == 40 && direction != "up") {
			setTimeout(function() {
				direction = "down";
			}, 30);
		} else if (key == 37 && direction != "right") {
			setTimeout(function() {
				direction = "left";
			}, 30);
		} else if (key == 39 && direction != "left") {
			setTimeout(function() {
				direction = "right";
			}, 30);
		}		
		event.preventDefault();
	})
	
	// New game and start game buttons
	$("#newgame").click(function(){
		newgame();
		document.getElementById("newgame").style.visibility = "hidden";
	})	
	$("#startgame").click(function() {
		start = setInterval(update, intervals);
		document.getElementById("startgame").style.visibility = "hidden";
	})
})