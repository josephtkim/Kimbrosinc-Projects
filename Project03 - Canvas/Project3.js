$(document).ready(function(){

	var xcoord;
	var ycoord;

	$(document).mousemove(function(player) {
		xcoord = player.pageX - 15;
		ycoord = player.pageY - 30;
		
		$('.player').offset({
			left: player.pageX - 15,
			top: player.pageY - 15
		});
	});
	
	var $board = $('#board');
	var sound = new Audio("../Project3 - Canvas/Drop.wav");
	
	$(document).click(function(){
		row = '<p style="left:'+xcoord+'; top:'+ycoord+';"><img src="../Project3 - Canvas/Tissue.png"></p>';
		$board.append(row);
		row = '';
		sound.play();
	});	
});