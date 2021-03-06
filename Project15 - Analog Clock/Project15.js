/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Set up the canvas
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var color = "white";
	
	// Change color of the clockface when clicked
	$(".clockface").click(function(){
		color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
	});
	
	var radius = canvas.height / 2;
	ctx.translate(radius, radius);
	setInterval(drawClock, 20);
	
	// function to draw the entire clock
	function drawClock(){
		drawFace(ctx, radius);
		drawNumbers(ctx, radius);
		drawTime(ctx, radius);
	}
	
	// draw the clock face
	function drawFace(ctx, radius) {
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, 2*Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(0, 0, radius*0.07, 0, 2*Math.PI);
		ctx.fillStyle = 'red';
		ctx.fill();
	}
	
	// draw the numbers on the clock face
	function drawNumbers(ctx, radius) {
		var ang;
		var num;
		ctx.font = radius*0.13 + "px cursive";
		ctx.textBaseline="middle";
		ctx.textAlign = "center";
		
		for (num = 1; num < 13; num++) {
			ang = num * Math.PI / 6;
			ctx.rotate(ang);
			ctx.translate(0, -radius*0.90);
			ctx.rotate(-ang);
			ctx.fillText(num.toString(), 0, 0);
			ctx.rotate(ang);
			ctx.translate(0, radius*0.90);
			ctx.rotate(-ang);
		}
	}
	
	// Draw the current time
	function drawTime(ctx, radius) {
		var now = new Date();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		
		hour = hour % 12;
		hour = (hour * Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
		drawHand(ctx, hour, radius*0.6, radius*0.05);
		
		minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
		drawHand(ctx, minute, radius*0.80, radius*0.05);
		
		second = (second*Math.PI/30);
		drawHand(ctx, second, radius*0.9, radius*0.01);
	}
	
	// Draw the clock hands
	function drawHand(ctx, pos, length, width) {
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.lineCap = "round";
		ctx.moveTo(0,0);
		ctx.rotate(pos);
		ctx.lineTo(0, -length);
		ctx.stroke();
		ctx.rotate(-pos);
	}
})