/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Set some important variables
	var cols,
		rows,
		col,
		row;	

	var gameover = 0;	
		
	var toflip = [];

	var cols = Math.floor((Math.random() * 5) + 2);
	var rows = cols;
	var switchesleft = cols * rows;
	
	// Create the field!
	function generatefield(cols, rows){
		// Game frame
		var width = cols * 60;
		var height = rows * 60;
		
		document.getElementById("container").style.height = String(height) + "px";	
		document.getElementById("container").style.width = String(width) + "px";	
		
		document.getElementById("messagecontainer").style.top = height / 2 + 75;
		
		var $grid = $('#field');
								
		$grid = $('#field');
	
		for(var i = 1; i <= rows; i++) {
			var row = '<div>';
			for(var j = 1; j <= cols; j++)
			{				
				row += '<button class="square" id="' +String(i)+ '-' +String(j)+ '" value="1"></button>';
			}
			row += '</div>';
			
			$grid.append(row);
		}
	}
	
	generatefield(cols, rows);	
	
	// Flip the lights
	function flip(toflip) {
		var length = toflip.length;
		for (var j = 0; j < length; j++) {
			if (document.getElementById(toflip[j]).value == "1") {
				document.getElementById(toflip[j]).value = "0";
				document.getElementById(toflip[j]).style.backgroundColor = "black";
				switchesleft -= 1;
			}
			else if (document.getElementById(toflip[j]).value == "0") {
				document.getElementById(toflip[j]).value = "1";
				document.getElementById(toflip[j]).style.backgroundColor = "#66ffff";
				switchesleft += 1;
			}
		}	
		if (switchesleft === 0) {
			gameover = 1;
			document.getElementById("message").style.visibility = "visible";
			document.getElementById("messagecontainer").style.visibility = "visible";
			document.getElementById("newgame").style.color = "black";
			document.getElementById("newgame").style.backgroundColor = "white";
		}
	}
	
	// Clear the array of values to flip
	function cleararray(toflip) {
		var length = toflip.length;
		for (var j = 0; j < length; j++) {
			toflip.pop();
		}
	}
	
	// Get the lights to switch 
	function switchlights(blockid, rows, cols) {
		row = parseInt(blockid.substr(0, blockid.indexOf('-')));
		col = parseInt(blockid.substr(blockid.indexOf('-')+1, blockid.length));
		toflip.push(blockid);
		// Above
		if (row > 1) {
			var id1 = String(row-1) + '-' + String(col);
			toflip.push(id1);
		}
		// Left
		if (col > 1) {
			var id2 = String(row) + '-' + String(col-1);
			toflip.push(id2);
		}
		// Right
		if (col < cols) {
			var id3 = String(row) + '-' + String(col+1);
			toflip.push(id3);
		}		
		// Below
		if (row < rows) {
			var id4 = String(row+1) + '-' + String(col);
			toflip.push(id4);
		}
		
		flip(toflip);
		cleararray(toflip);
	}
	
	$(".square").click(function(){
		if (gameover === 0) {
			switchlights((this).id, cols, rows);
		}
	})
	$("#newgame").click(function() {
			location.reload();
	})
})