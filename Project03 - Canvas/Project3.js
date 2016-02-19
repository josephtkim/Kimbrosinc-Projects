/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Initialize
	var xcoord;
	var ycoord;

	// Get the mouse coordinates
	$(document).mousemove(function(player) {
		xcoord = player.pageX - 15;
		ycoord = player.pageY - 30;
		
		$('.player').offset({
			left: player.pageX - 15,
			top: player.pageY - 15
		});
	});
	
	// Get the location to put the images
	var $board = $('#board');
	
	// Silly sound effect
	var sound = new Audio("../Project3 - Canvas/Drop.wav");
	
	// Click to add the image to the webpage
	$(document).click(function(){
		row = '<p style="left:'+xcoord+'; top:'+ycoord+';"><img src="../Project3 - Canvas/Tissue.png"></p>';
		$board.append(row);
		row = '';
		sound.play();
	});	
});