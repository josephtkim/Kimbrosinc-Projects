$(document).ready(function(){
	var song = document.getElementById("song");	
	
	$('#speedrange').click(function() {			
		var speed = document.getElementById("speedrange").value / 100;
		
		song.playbackRate = speed;
		document.getElementsByName('displayspeed')[0].value = speed;
	})
	
})