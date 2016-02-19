/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Set up the important variables
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var functionswitch = 0;
	var amplitude = 10;
	var frequency = 1;
	var phase = 0;
	var color = "red";

	// Translate the canvas so the wave gets drawn properly
	ctx.translate(0, 200);
	
	var x = 0;
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(750,0);
	ctx.stroke();

	// Draw the wave
	function drawWave(){
		drawTime(ctx);
	}
	function drawTime(ctx) {
		var now = new Date();
		var second = now.getSeconds()
		second = (second*Math.PI/30);
		drawDot(ctx, second);
	}	
	function drawDot(ctx, second) {
		ctx.beginPath();
		ctx.fillStyle = color;
		x += 0.002;
		if (functionswitch == 0) {
			ctx.arc(x* 200, amplitude * Math.sin(2 * Math.PI * frequency * x + phase), 1, 0, 2*Math.PI);
		} else if (functionswitch == 1) {
			ctx.arc(x* 200, amplitude * Math.cos(2 * Math.PI * frequency * x + phase), 1, 0, 2*Math.PI);
		}
		ctx.fill();
	}
	
	// Switch between sine and cosine functions
	$('#sinebutton').click(function() {
		x = 0;
		
		color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
		functionswitch = 0;
		setInterval(drawWave, 3);
		
		amplitude = document.getElementsByName('amplitude')[0].value;
		frequency = document.getElementsByName('frequency')[0].value;
		phase = document.getElementsByName('phase')[0].value;
	});
	$('#cosinebutton').click(function() {
		x = 0;
		
		color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
		functionswitch = 1;
		setInterval(drawWave, 2);
		
		amplitude = document.getElementsByName('amplitude')[0].value;
		frequency = document.getElementsByName('frequency')[0].value;
		phase = document.getElementsByName('phase')[0].value;
	});
})