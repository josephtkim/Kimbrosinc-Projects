/* By Joseph Kim, 2016 */

$(document).ready(function() {
	// Thanks to William Malone for the tutorial to make this work
	var canvas = document.getElementById("Canvas");
	var ctx = canvas.getContext("2d");
	var xcoord;
	var ycoord;
	var painting;	
	
	var offsetX = 8;
	var offsetY = 89;
	
	// Brush attributes
	var color = "black";
	var width = 1;
	
	// Check the canvas position when the user clicks the canvas
	$('#Canvas').mousedown(function(e){
		var mouseX = e.pageX - offsetX;
		var mouseY = e.pageY - offsetY;

		painting = true;
		addClick(e.pageX - offsetX, e.pageY - offsetY);
		updateCanvas();		
	});
	
	// Check that the mouse is moving around in the canvas
	$('#Canvas').mousemove(function(e){
		if (painting) {
			addClick(e.pageX - offsetX, e.pageY - offsetY, true);
			updateCanvas();
		}
	});
	
	// If the mouse is not clicking on the canvas, change paint to false
	$('#Canvas').mouseup(function(e){
		painting = false;
	});
	
	// Mouse leaves the canvas
	$('#Canvas').mouseleave(function(e){
		painting = false;
	});
	
	// 
	var clickX = new Array();
	var clickY = new Array();
	var clickDrag = new Array();

	function addClick(x, y, dragging)
	{
		clickX.push(x);
		clickY.push(y);
		clickDrag.push(dragging);
	}
	
	// Change the color of the writing
	$("#Black").click(function(){
		color = "black";
		updateCanvas();
	})
	$("#Red").click(function(){
		color = "red";
		updateCanvas();
	})
	$("#Yellow").click(function(){
		color = "yellow";
		updateCanvas();
	})
	$("#Green").click(function(){
		color = "green";
		updateCanvas();
	})
	$("#Blue").click(function(){
		color = "blue";
		updateCanvas();
	})
	$("#Purple").click(function(){
		color = "purple";
		updateCanvas();
	})
	$("#Brown").click(function(){
		color = "brown";
		updateCanvas();
	})
	
	$("#Small").click(function(){
		width = 1;
		updateCanvas();
	})
	$("#Medium").click(function(){
		width = 4;
		updateCanvas();
	})
	$("#Large").click(function(){
		width = 7;
		updateCanvas();
	})
	
	// Clear the canvas
	$("#Clear").click(function(){
		clickX = new Array();
		clickY = new Array();
		clickDrag = new Array();
		updateCanvas();
	})
	
	// Make the program work
	function updateCanvas() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		
		ctx.strokeStyle = color;
		ctx.lineJoin = "round";
		ctx.lineWidth = width;
		
		for(var i=0; i < clickX.length; i++) {		
			ctx.beginPath();
			if(clickDrag[i] && i){
			  ctx.moveTo(clickX[i-1], clickY[i-1]);
			 }else{
			   ctx.moveTo(clickX[i]-1, clickY[i]);
			 }
			 ctx.lineTo(clickX[i], clickY[i]);
			 ctx.closePath();
			 ctx.stroke();
		  }
	}
})	