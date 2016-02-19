/* By Joseph Kim, 2016 */

$(document).ready(function(){
	var song = document.getElementById("song");	
	
	// Make the speed range work
	$('#speedrange').click(function() {			
		var speed = document.getElementById("speedrange").value / 100;
		
		song.playbackRate = speed;
		document.getElementsByName('displayspeed')[0].value = speed;
	})
})