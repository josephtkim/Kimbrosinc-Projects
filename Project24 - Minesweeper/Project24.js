/* By Joseph Kim, 2016 */

$(document).ready(function(){	
	// Set some variables to be used
	var Ecols = 8;
	var Erows = 8;
	var Emines = 10;
	var Eflags = 10;
	
	var Mcols = 16;
	var Mrows = 16;
	var Mmines = 40;
	var Mflags = 40;
	
	var Hcols = 30;
	var Hrows = 16;
	var Hmines = 99;
	var Hflags = 99;
	
	var gameover = 0;
	
	// create a function to generate a new game playing field 
	function newGame(cols, rows, mines) {
		curcols = cols;
		currows = rows;
		curmines = mines;
		curflags = mines;
		gameover = 0;
		generatefield(cols, rows, mines);
	}
	
	var positions = [];
	var positioncode = [];
	
	// Determine the positions of the mines
	function minepositions(cols, rows, mines) {
		var cols = cols;
		var rows = rows;		
		
		var count = 0;
		var totalcells = cols * rows;
		var random_position;		
		var minecount = mines;		
		
		positions = [];		
		positioncode = [];
		
		while (count < minecount) {
			random_position = Math.floor((Math.random() * totalcells) + 1);
						
			if (positions.indexOf(random_position) < 0)
			{
				positions.push(random_position);
				count += 1;
			}
			
			else {
				random_position = Math.floor((Math.random() * 10) + 1);				
			};
		}
		
		var rowcode;
		var colcode;
		var poscode = "";
		var length = positions.length;
		
		for (var i = 0; i < length; i++) {
			rowcode = Math.ceil(positions[i] / cols);
			
			if (positions[i] % cols === 0){
				colcode = positions[i] / rowcode;
			}
			else {
				colcode = positions[i] % cols;
			}
			
			poscode = String(rowcode) + '-' + String(colcode);
			positioncode.push(poscode);
		}
		
		return positioncode;
	}	
	
	var blockval = [];
	
	// Initialize the values for the squares as a matrix
	function createblocksval(cols, rows){
		var row = [];
		blockval = [];
		
		for (var j = 0; j <= rows + 1; j++) {
			row = [];
			for (var i = 0; i <= cols + 1; i++) {
				row.push(0);
			}
			blockval.push(row);
		}
		return blockval;
	}
	
	// Determine the square numbers based on the adjacent squares
	function blockvalues(positioncode, cols, rows) {
		var blockval = createblocksval(cols, rows);
		
		for (var i = 0; i < positioncode.length; i++) {
			var full = positioncode[i];
			var row = full.substr(0, full.indexOf('-'));
			var col = full.substr(full.indexOf('-')+1, full.length);
			
			// Add to the adjacent blocks
			blockval[parseInt(row)-1][parseInt(col)-1] += 1;
			blockval[parseInt(row)-1][parseInt(col)] += 1;
			blockval[parseInt(row)-1][parseInt(col)+1] += 1;
			
			blockval[parseInt(row)][parseInt(col)-1] += 1;
			blockval[parseInt(row)][parseInt(col)+1] += 1;
			
			blockval[parseInt(row)+1][parseInt(col)-1] += 1;
			blockval[parseInt(row)+1][parseInt(col)] += 1;
			blockval[parseInt(row)+1][parseInt(col)+1] += 1;
		}
		
		return blockval;
	}
	
	var row;
	var col;
	var adj1;
	var adj2;
	var adj3;
	var adj4;
	
	var adjacents = [];
	var indextoremove = [];
	var tocheck = [];
	
	var cleared = [];
	
	// Check if game is over 
	function gameovercheck() {
		if ((cleared.length === (currows * curcols - curmines)) && gameover === 0) {
			document.getElementById('smilestatebutton').style.backgroundImage = "url('beatgame.png')";
			gameover = 1;
		}
	}
	
	// Show all adjacent 0 value blocks
	function showadjacents(name, cols, rows) {
		row = name.substr(0, name.indexOf('-'));
		col = name.substr(name.indexOf('-')+1, name.length);
				
		// Four corners
		if (parseInt(row) === 1 && parseInt(col) === 1) {
			adj1 = String(row) + '-' + String(parseInt(col) + 1);
			adj2 = String(parseInt(row) + 1) + '-' + String(parseInt(col));
			adj3 = String(parseInt(row) + 1) + '-' + String(parseInt(col) + 1);
			
			adjacents.push(adj1);
			adjacents.push(adj2);
			adjacents.push(adj3);
		}
		else if (parseInt(row) === 1 && parseInt(col) === cols) {
			adj1 = String(row) + '-' + String(parseInt(col) - 1);
			adj2 = String(parseInt(row) + 1) + '-' + String(parseInt(col));
			adj3 = String(parseInt(row) + 1) + '-' + String(parseInt(col) - 1);		

			adjacents.push(adj1);
			adjacents.push(adj2);
			adjacents.push(adj3);
		}
		else if (parseInt(row) === rows && parseInt(col) === 1) {
			adj1 = String(row) + '-' + String(parseInt(col) + 1);
			adj2 = String(parseInt(row) - 1) + '-' + String(parseInt(col));
			adj3 = String(parseInt(row) - 1) + '-' + String(parseInt(col) + 1);

			adjacents.push(adj1);
			adjacents.push(adj2);
			adjacents.push(adj3);
		}
		else if (parseInt(row) === rows && parseInt(col) === cols) {
			adj1 = String(row) + '-' + String(parseInt(col) - 1);
			adj2 = String(parseInt(row) - 1) + '-' + String(parseInt(col));
			adj3 = String(parseInt(row) - 1) + '-' + String(parseInt(col) - 1);

			adjacents.push(adj1);
			adjacents.push(adj2);
			adjacents.push(adj3);
		}		
		// edges
		// Top and bottom edges
		else if (parseInt(row) === 1 && parseInt(col) > 1 && parseInt(col) < cols) {
			adj1 = String(row) + '-' + String(parseInt(col) - 1);
			adj2 = String(parseInt(row) + 1) + '-' + String(parseInt(col) - 1);
			adj3 = String(parseInt(row) + 1) + '-' + String(parseInt(col));
			adj4 = String(parseInt(row) + 1) + '-' + String(parseInt(col) + 1);
			adj5 = String(row) + '-' + String(parseInt(col) + 1);

			adjacents.push(adj1);
			adjacents.push(adj2);
			adjacents.push(adj3);
			adjacents.push(adj4);
			adjacents.push(adj5);
		}		
		else if (parseInt(row) === rows && parseInt(col) > 1 && parseInt(col) < cols) {
			adj1 = String(row) + '-' + String(parseInt(col) - 1);
			adj2 = String(parseInt(row) - 1) + '-' + String(parseInt(col) - 1);
			adj3 = String(parseInt(row) - 1) + '-' + String(parseInt(col));
			adj4 = String(parseInt(row) - 1) + '-' + String(parseInt(col) + 1);
			adj5 = String(row) + '-' + String(parseInt(col) + 1);

			adjacents.push(adj1);
			adjacents.push(adj2);
			adjacents.push(adj3);
			adjacents.push(adj4);
			adjacents.push(adj5);
		}
		// Left and right edges
		else if (parseInt(col) === 1 && parseInt(row) > 1 && parseInt(row) < rows) {
			adj1 = String(row) + '-' + String(parseInt(col) + 1);
			adj2 = String(parseInt(row) - 1) + '-' + String(parseInt(col));
			adj3 = String(parseInt(row) - 1) + '-' + String(parseInt(col) + 1);
			adj4 = String(parseInt(row) + 1) + '-' + String(parseInt(col));
			adj5 = String(parseInt(row) + 1) + '-' + String(parseInt(col) + 1);

			adjacents.push(adj1);
			adjacents.push(adj2);
			adjacents.push(adj3);
			adjacents.push(adj4);
			adjacents.push(adj5);
		}
		else if (parseInt(col) === cols && parseInt(row) > 1 && parseInt(row) < rows) {
			adj1 = String(row) + '-' + String(parseInt(col) - 1);
			adj2 = String(parseInt(row) - 1) + '-' + String(parseInt(col));
			adj3 = String(parseInt(row) - 1) + '-' + String(parseInt(col) - 1);
			adj4 = String(parseInt(row) + 1) + '-' + String(parseInt(col));
			adj5 = String(parseInt(row) + 1) + '-' + String(parseInt(col) - 1);

			adjacents.push(adj1);
			adjacents.push(adj2);
			adjacents.push(adj3);
			adjacents.push(adj4);
			adjacents.push(adj5);
		}
		else {
			adj1 = String(parseInt(row) - 1) + '-' + String(parseInt(col) - 1);
			adj2 = String(parseInt(row) - 1) + '-' + String(parseInt(col));
			adj3 = String(parseInt(row) - 1) + '-' + String(parseInt(col) + 1);
			adj4 = String(parseInt(row) + 1) + '-' + String(parseInt(col) - 1);		
			adj5 = String(parseInt(row) + 1) + '-' + String(parseInt(col));
			adj6 = String(parseInt(row) + 1) + '-' + String(parseInt(col) + 1);
			
			adj7 = String(row) + '-' + String(parseInt(col) - 1);
			adj8 = String(row) + '-' + String(parseInt(col) + 1);
			
			adjacents.push(adj1);
			adjacents.push(adj2);
			adjacents.push(adj3);
			adjacents.push(adj4);
			adjacents.push(adj5);
			adjacents.push(adj6);
			adjacents.push(adj7);
			adjacents.push(adj8);
		}
		
		for (var i = 0; i < adjacents.length; i++){
			if (document.getElementById(adjacents[i]).value === "0") {
				document.getElementById(adjacents[i]).style.backgroundColor = "lightgray";
				document.getElementById(adjacents[i]).style.border = "none";
				if (cleared.indexOf(adjacents[i]) < 0) {
					cleared.push(adjacents[i]);
				}
			}
			else {
				document.getElementById(adjacents[i]).innerHTML = document.getElementById(adjacents[i]).value;
				document.getElementById(adjacents[i]).style.backgroundColor = "lightgray";
				document.getElementById(adjacents[i]).style.border = "none";
				if (cleared.indexOf(adjacents[i]) < 0) {
					cleared.push(adjacents[i]);
				}
			}
			if (document.getElementById(adjacents[i]).value === "0" && tocheck.indexOf(adjacents[i]) < 0) {
				tocheck.push(adjacents[i]);
				showadjacents(adjacents[i], cols, rows);
			}
		}

	}
	
	function cleartocheck(){
		var length = tocheck.length;
		for (var i = 0; i < length; i++) {
			tocheck.pop();
		}
	}
	
	function checkads() {
		for (var j = 0; j < tocheck.length; j++) {
			showadjacents(tocheck[j], cols, rows);
		}
	}

	var cols;
	var rows;
	var mines;
	var currows;
	var curcols;
	var curmines;
	var curflags;
	
	// Generate the game layout
	function generatefield(cols, rows, mines){			
		// Game frame
		var width = cols * 20;
		var height = rows * 20;
		
		var positioncode = minepositions(cols, rows, mines);
		//alert(positioncode);
		blockval = blockvalues(positioncode, cols, rows);
		
		document.getElementById("container").style.height = String(height) + "px";	
		document.getElementById("container").style.width = String(width) + "px";	
		
		document.getElementById("game").style.height = String(height + 20) + "px";
		document.getElementById("game").style.width = String(width + 20) + "px";	
		document.getElementById("game").style.paddingTop = String(40) + "px";	

		document.getElementById("info").style.width = String(width) + "px";
		document.getElementById("info").style.height = String(34) + "px";
		
		var $grid = $('#minefield');
		cols = cols;
		rows = rows;
		mines = mines;
		
		// Remaining flags, smiley, timer
		var flags = mines;
								
		$grid = $('#minefield');
	
		for(var i = 1; i <= rows; i++)
	
		{
		var row = '<div>';
			for(var j = 1; j <= cols; j++)
			{				
				var compare = String(i) + '-' + String(j);
				if (positioncode.indexOf(compare) >= 0){
					//alert(compare + "is a mine!");
					row += '<button class="mine" value="-100" id="mine"></button>';
				}
				else {
					row += '<button class="square" value=' +blockval[i][j] +' id="' +String(i)+ '-' +String(j)+ '"></button>';
				};
			}
			row += '</div>';
			
			$grid.append(row);
		}
	}
	
	// Set up the game
	var difficulty = document.getElementById('game').className;
	
	if (difficulty === "diffE") {		
		newGame(Ecols, Erows, Emines);
	}
	else if (difficulty === "diffM") {
		newGame(Mcols, Mrows, Mmines);
	}
	else if (difficulty === "diffH") {		
		newGame(Hcols, Hrows, Hmines);
	};
	
	$("#smilestatebutton").click(function(){
		location.reload();
	})
	
	// Check what wss clicked, a square or mine
	$('.square').click(function(){
		if(gameover === 0){			
			if ((this).value === "0") {
				if (cleared.indexOf((this).id) < 0) {
					cleared.push((this).id);
				}
				(this).style.backgroundColor = "lightgray";
				(this).style.border = "none";
				adjacents = [];
				showadjacents(((this).id), curcols, currows);
				checkads();
				cleartocheck();
			}
			else if ((this).value > 0) {
				if (cleared.indexOf((this).id) < 0) {
					cleared.push((this).id);
				}
				(this).innerHTML = (this).value;	
				(this).style.backgroundColor = "lightgray";
				(this).style.border = "none";
			}
		}
		gameovercheck();
	})						
	$('.mine').click(function(){	
		if(gameover === 0){			
			var mines = document.getElementsByClassName('mine');
			for (var i = 0, length = mines.length; i < length; i++) {
				mines[i].style.backgroundColor = "red";
			}
			gameover = 1;
			document.getElementById('smilestatebutton').style.backgroundImage = "url('lose.png')";
		}
	})
	
	// while holding click on a square the smiley shows surprise
	$(".square").mousedown(function () {
		if(gameover === 0){	
			loopthis = setInterval(repeatingfunction, 100);
		}
	}).mouseup(function () {
		if(gameover === 0){	
			clearInterval(loopthis);
			document.getElementById('smilestatebutton').style.backgroundImage = "url('normal.png')";
		}
	});
	function repeatingfunction() {
		document.getElementById('smilestatebutton').style.backgroundImage = "url('clicking.png')";
	}
	$(".mine").mousedown(function () {
		if(gameover === 0){	
			loopthis = setInterval(repeatingfunction, 100);
		}
	}).mouseup(function () {
		if(gameover === 0){	
			clearInterval(loopthis);
			document.getElementById('smilestatebutton').style.backgroundImage = "url('normal.png')";
		}
	});
	function repeatingfunction() {
		document.getElementById('smilestatebutton').style.backgroundImage = "url('clicking.png')";
	}
	
	$("#minefield").mouseleave(function(){
		if (gameover === 0) {
			document.getElementById('smilestatebutton').style.backgroundImage = "url('normal.png')";
			clearInterval(loopthis);		
		}
	})
	
	// Place flag on mine
	$(".mine").mousedown(function(ev){
      if(ev.which == 3)
      {
		  if(gameover === 0){	
			  if ((this).style.backgroundColor === "blue") {
				 (this).style.backgroundColor = "#f2f2f2";
				 curflags += 1;				  
			  }
			  else if (curflags > 0) {			   
				  if ((this).style.backgroundColor !== "#f2f2f2") {
					  (this).style.backgroundColor = "blue";
					  curflags -= 1;
				  }
			  }
		  }
      }
	});
	
	// Right click to place flag
	$(".square").mousedown(function(ev){
      if(ev.which == 3)
      {
		  if(gameover === 0){	
			  if ((this).style.backgroundColor === "blue") {
				 (this).style.backgroundColor = "#f2f2f2";	
			  }
			  else if (curflags > 0) {  
				  if ((this).style.backgroundColor !== "blue" && (this).style.backgroundColor !== "lightgray") {
					  (this).style.backgroundColor = "blue";
				  }
			  }		  	
		  }
      }
	});
})