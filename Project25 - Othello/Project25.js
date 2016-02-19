$(document).ready(function(){
	var turnnumber = 1;
	var gameover = 0;
	var currentboard = [];
	
	// Set up matrix for all positions
	for (var i = 0; i < 10; i++) {
		currentboard.push([0,0,0,0,0,0,0,0,0,0]);
	}
	
	// Check if gameover
	function gameovercheck(currentboard) {
		var whitecount = 0;
		var blackcount = 0;
		var totalcount = 0;
		
		for (var i = 1; i <= 8; i++) {
			for (var j = 1; j <= 8; j++) {
				if (currentboard[i][j] === 1) {
					whitecount += 1;
					totalcount += 1;
				}
				else if (currentboard[i][j] === 2) {
					blackcount += 1;
					totalcount += 1;
				}
			}
		}
		
		if (totalcount === 64) {
			alert("Gameover");
			if (whitecount > blackcount) {
				alert("White Wins!");
			}
			else if (whitecount < blackcount) {
				alert("Black Wins!");
			}
			else if (whitecount === blackcount) {
				alert("Tie!");
			}
			gameover = 1;
			
			document.getElementById('skipturn').innerHTML = "New Game";
		}
		
	}
	
	// Create the board
	function generatefield(cols, rows){			
		var $grid = $('#board');
		var count = 1;
	
		for(var i = 1; i <= rows; i++)
	
		{
		var row = '<div>';
			for(var j = 1; j <= cols; j++)
			{								
					if (count % 2 === 0) {
						row += '<button class="square"" id="' +String(i)+ '-' +String(j)+ '" value="0"></button>';	
					}
					else 
					{
						row += '<button class="square" id="' +String(i)+ '-' +String(j)+ '" value="0"></button>';	
					}
					count += 1;
			}
			count += 1;
			row += '</div>';
			
			$grid.append(row);
		}
		
		document.getElementById('4-4').style.backgroundColor = "black";
		document.getElementById('4-4').value = "2";
		currentboard[4][4] = 2;
		
		document.getElementById('4-5').style.backgroundColor = "white";
		document.getElementById('4-5').value = "1";
		currentboard[4][5] = 1;
		
		document.getElementById('5-4').style.backgroundColor = "white";
		document.getElementById('5-4').value = "1";
		currentboard[5][4] = 1;
		
		document.getElementById('5-5').style.backgroundColor = "black";
		document.getElementById('5-5').value = "2";
		currentboard[5][5] = 2;
	}
	
	generatefield(8, 8);
	
	var squarestoflip = [];	
	flipcolors(squarestoflip);
	
	var up = [];
	var down = [];
	var left = [];
	var right = [];
	var upright = [];
	var upleft = [];
	var downright = [];
	var downleft = [];
	
	function cleararray(array){
		var length = array.length;
		for (var i = 0; i < length; i++) {
			array.pop();
		}
	}
	
	function changetoposition(row, col) {
		return String(row) + '-' + String(col);
	}
	
	// Given the position of the clicked square and the current layout of the board, determine if move is possible
	function checklegitmove(position, currentboard, currentturn) {
		var evaluation;
	
		var currentcolor = (2 - (currentturn % 2));
		var nextcolor = (3 - currentcolor);
		
		var up = [];
		var down = [];
		var left = [];
		var right = [];
		var upright = [];
		var upleft = [];
		var downright = [];
		var downleft = [];
		
		//alert(currentcolor);
		
		var row = parseInt(position.substr(0, position.indexOf('-')));
		var col = parseInt(position.substr(position.indexOf('-')+1, position.length));
		var evaluation = 0;
		
		//alert(row);
		//alert(col);
	
		//alert(row);
		//alert(col);
		
		// Check in 8 directions
		// [upleft]   [up]    [upright]
		// [left]     [cur]   [right]
		// [downleft] [down]  [downright]
		
		// upward check
		if ((currentboard[row-1][col] === nextcolor) && (currentboard[row-2][col] === nextcolor) && (currentboard[row-3][col] === nextcolor) && (currentboard[row-4][col] === nextcolor) && (currentboard[row-5][col] === nextcolor) && (currentboard[row-6][col] === nextcolor) && (currentboard[row-7][col] === currentcolor)) {
			up.push(changetoposition(row-1, col));
			up.push(changetoposition(row-2, col));
			up.push(changetoposition(row-3, col));
			up.push(changetoposition(row-4, col));
			up.push(changetoposition(row-5, col));
			up.push(changetoposition(row-6, col));
			evaluation = 1;
			//alert("all up");
		} 
		else if ((currentboard[row-1][col] === nextcolor) && (currentboard[row-2][col] === nextcolor) && (currentboard[row-3][col] === nextcolor) && (currentboard[row-4][col] === nextcolor) && (currentboard[row-5][col] === nextcolor) && (currentboard[row-6][col] === currentcolor)) {
			up.push(changetoposition(row-1, col));
			up.push(changetoposition(row-2, col));
			up.push(changetoposition(row-3, col));
			up.push(changetoposition(row-4, col));
			up.push(changetoposition(row-5, col));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col] === nextcolor) && (currentboard[row-2][col] === nextcolor) && (currentboard[row-3][col] === nextcolor) && (currentboard[row-4][col] === nextcolor) && (currentboard[row-5][col] === currentcolor)) {
			up.push(changetoposition(row-1, col));
			up.push(changetoposition(row-2, col));
			up.push(changetoposition(row-3, col));
			up.push(changetoposition(row-4, col));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col] === nextcolor) && (currentboard[row-2][col] === nextcolor) && (currentboard[row-3][col] === nextcolor) && (currentboard[row-4][col] === currentcolor)) {
			up.push(changetoposition(row-1, col));
			up.push(changetoposition(row-2, col));
			up.push(changetoposition(row-3, col));
			evaluation = 1;
		}  
		else if ((currentboard[row-1][col] === nextcolor) && (currentboard[row-2][col] === nextcolor) && (currentboard[row-3][col] === currentcolor)) {
			up.push(changetoposition(row-1, col));
			up.push(changetoposition(row-2, col));
			evaluation = 1;
		}  
		else if ((currentboard[row-1][col] === nextcolor) && (currentboard[row-2][col] === currentcolor)) {
			up.push(changetoposition(row-1, col));
			evaluation = 1;
		}
		else {
			cleararray(up);
		}
			
		// down
		if ((currentboard[row+1][col] === nextcolor) && (currentboard[row+2][col] === nextcolor) && (currentboard[row+3][col] === nextcolor) && (currentboard[row+4][col] === nextcolor) && (currentboard[row+5][col] === nextcolor) && (currentboard[row+6][col] === nextcolor) && (currentboard[row+7][col] === currentcolor)) {
			down.push(changetoposition(row+1, col));
			down.push(changetoposition(row+2, col));
			down.push(changetoposition(row+3, col));
			down.push(changetoposition(row+4, col));
			down.push(changetoposition(row+5, col));
			down.push(changetoposition(row+6, col));
			//alert("all down");
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col] === nextcolor) && (currentboard[row+2][col] === nextcolor) && (currentboard[row+3][col] === nextcolor) && (currentboard[row+4][col] === nextcolor) && (currentboard[row+5][col] === nextcolor) && (currentboard[row+6][col] === currentcolor)) {
			down.push(changetoposition(row+1, col));
			down.push(changetoposition(row+2, col));
			down.push(changetoposition(row+3, col));
			down.push(changetoposition(row+4, col));
			down.push(changetoposition(row+5, col));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col] === nextcolor) && (currentboard[row+2][col] === nextcolor) && (currentboard[row+3][col] === nextcolor) && (currentboard[row+4][col] === nextcolor) && (currentboard[row+5][col] === currentcolor)) {
			down.push(changetoposition(row+1, col));
			down.push(changetoposition(row+2, col));
			down.push(changetoposition(row+3, col));
			down.push(changetoposition(row+4, col));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col] === nextcolor) && (currentboard[row+2][col] === nextcolor) && (currentboard[row+3][col] === nextcolor) && (currentboard[row+4][col] === currentcolor)) {
			down.push(changetoposition(row+1, col));
			down.push(changetoposition(row+2, col));
			down.push(changetoposition(row+3, col));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col] === nextcolor) && (currentboard[row+2][col] === nextcolor) && (currentboard[row+3][col] === currentcolor)) {
			down.push(changetoposition(row+1, col));
			down.push(changetoposition(row+2, col));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col] === nextcolor) && (currentboard[row+2][col] === currentcolor)) {
			down.push(changetoposition(row+1, col));
			evaluation = 1;
		}
		else {
			cleararray(down);
		}
			
		// left
		if ((currentboard[row][col-1] === nextcolor) && (currentboard[row][col-2] === nextcolor) && (currentboard[row][col-3] === nextcolor) && (currentboard[row][col-4] === nextcolor) && (currentboard[row][col-5] === nextcolor) && (currentboard[row][col-6] === nextcolor) && (currentboard[row][col-7] === currentcolor)) {
			left.push(changetoposition(row, col-1));
			left.push(changetoposition(row, col-2));
			left.push(changetoposition(row, col-3));
			left.push(changetoposition(row, col-4));
			left.push(changetoposition(row, col-5));
			left.push(changetoposition(row, col-6));
			//alert("all left");
			evaluation = 1;
		} 
		else if ((currentboard[row][col-1] === nextcolor) && (currentboard[row][col-2] === nextcolor) && (currentboard[row][col-3] === nextcolor) && (currentboard[row][col-4] === nextcolor) && (currentboard[row][col-5] === nextcolor) && (currentboard[row][col-6] === currentcolor)) {
			left.push(changetoposition(row, col-1));
			left.push(changetoposition(row, col-2));
			left.push(changetoposition(row, col-3));
			left.push(changetoposition(row, col-4));
			left.push(changetoposition(row, col-5));
			evaluation = 1;
		} 
		else if ((currentboard[row][col-1] === nextcolor) && (currentboard[row][col-2] === nextcolor) && (currentboard[row][col-3] === nextcolor) && (currentboard[row][col-4] === nextcolor) && (currentboard[row][col-5] === currentcolor)) {
			left.push(changetoposition(row, col-1));
			left.push(changetoposition(row, col-2));
			left.push(changetoposition(row, col-3));
			left.push(changetoposition(row, col-4));
			evaluation = 1;
		} 
		else if ((currentboard[row][col-1] === nextcolor) && (currentboard[row][col-2] === nextcolor) && (currentboard[row][col-3] === nextcolor) && (currentboard[row][col-4] === currentcolor)) {
			left.push(changetoposition(row, col-1));
			left.push(changetoposition(row, col-2));
			left.push(changetoposition(row, col-3));
			evaluation = 1;
		} 
		else if ((currentboard[row][col-1] === nextcolor) && (currentboard[row][col-2] === nextcolor) && (currentboard[row][col-3] === currentcolor)) {
			left.push(changetoposition(row, col-1));
			left.push(changetoposition(row, col-2));
			evaluation = 1;
		} 
		else if ((currentboard[row][col-1] === nextcolor) && (currentboard[row][col-2] === currentcolor)) {
			left.push(changetoposition(row, col-1));
			evaluation = 1;
		}
		else {
			cleararray(left);
		}
		
		// right
		if ((currentboard[row][col+1] === nextcolor) && (currentboard[row][col+2] === nextcolor) && (currentboard[row][col+3] === nextcolor) && (currentboard[row][col+4] === nextcolor) && (currentboard[row][col+5] === nextcolor) && (currentboard[row][col+6] === nextcolor) && (currentboard[row][col+7] === currentcolor)) {
			right.push(changetoposition(row, col+1));
			right.push(changetoposition(row, col+2));
			right.push(changetoposition(row, col+3));
			right.push(changetoposition(row, col+4));
			right.push(changetoposition(row, col+5));
			right.push(changetoposition(row, col+6));
			//alert("all right");
			evaluation = 1;
		} 
		else if ((currentboard[row][col+1] === nextcolor) && (currentboard[row][col+2] === nextcolor) && (currentboard[row][col+3] === nextcolor) && (currentboard[row][col+4] === nextcolor) && (currentboard[row][col+5] === nextcolor) && (currentboard[row][col+6] === currentcolor)) {
			right.push(changetoposition(row, col+1));
			right.push(changetoposition(row, col+2));
			right.push(changetoposition(row, col+3));
			right.push(changetoposition(row, col+4));
			right.push(changetoposition(row, col+5));
			evaluation = 1;
		} 
		else if ((currentboard[row][col+1] === nextcolor) && (currentboard[row][col+2] === nextcolor) && (currentboard[row][col+3] === nextcolor) && (currentboard[row][col+4] === nextcolor) && (currentboard[row][col+5] === currentcolor)) {
			right.push(changetoposition(row, col+1));
			right.push(changetoposition(row, col+2));
			right.push(changetoposition(row, col+3));
			right.push(changetoposition(row, col+4));
			evaluation = 1;
		} 
		else if ((currentboard[row][col+1] === nextcolor) && (currentboard[row][col+2] === nextcolor) && (currentboard[row][col+3] === nextcolor) && (currentboard[row][col+4] === currentcolor)) {
			right.push(changetoposition(row, col+1));
			right.push(changetoposition(row, col+2));
			right.push(changetoposition(row, col+3));
			evaluation = 1;
		} 
		else if ((currentboard[row][col+1] === nextcolor) && (currentboard[row][col+2] === nextcolor) && (currentboard[row][col+3] === currentcolor)) {
			right.push(changetoposition(row, col+1));
			right.push(changetoposition(row, col+2));
			evaluation = 1;
		} 
		else if ((currentboard[row][col+1] === nextcolor) && (currentboard[row][col+2] === currentcolor)) {
			right.push(changetoposition(row, col+1));
			evaluation = 1;
		}
		else {
			cleararray(right);
		}
		///////////////////////////////
			
		// upright
		if ((currentboard[row-1][col+1] === nextcolor) && (currentboard[row-2][col+2] === nextcolor) && (currentboard[row-3][col+3] === nextcolor) && (currentboard[row-4][col+4] === nextcolor) && (currentboard[row-5][col+5] === nextcolor) && (currentboard[row-6][col+6] === nextcolor) && (currentboard[row-7][col+7] === currentcolor)) {
			upright.push(changetoposition(row-1, col+1));
			upright.push(changetoposition(row-2, col+2));
			upright.push(changetoposition(row-3, col+3));
			upright.push(changetoposition(row-4, col+4));
			upright.push(changetoposition(row-5, col+5));
			upright.push(changetoposition(row-6, col+6));
			//alert("all up right");
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col+1] === nextcolor) && (currentboard[row-2][col+2] === nextcolor) && (currentboard[row-3][col+3] === nextcolor) && (currentboard[row-4][col+4] === nextcolor) && (currentboard[row-5][col+5] === nextcolor) && (currentboard[row-6][col+6] === currentcolor)) {
			upright.push(changetoposition(row-1, col+1));
			upright.push(changetoposition(row-2, col+2));
			upright.push(changetoposition(row-3, col+3));
			upright.push(changetoposition(row-4, col+4));
			upright.push(changetoposition(row-5, col+5));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col+1] === nextcolor) && (currentboard[row-2][col+2] === nextcolor) && (currentboard[row-3][col+3] === nextcolor) && (currentboard[row-4][col+4] === nextcolor) && (currentboard[row-5][col+5] === currentcolor)) {
			upright.push(changetoposition(row-1, col+1));
			upright.push(changetoposition(row-2, col+2));
			upright.push(changetoposition(row-3, col+3));
			upright.push(changetoposition(row-4, col+4));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col+1] === nextcolor) && (currentboard[row-2][col+2] === nextcolor) && (currentboard[row-3][col+3] === nextcolor) && (currentboard[row-4][col+4] === currentcolor)) {
			upright.push(changetoposition(row-1, col+1));
			upright.push(changetoposition(row-2, col+2));
			upright.push(changetoposition(row-3, col+3));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col+1] === nextcolor) && (currentboard[row-2][col+2] === nextcolor) && (currentboard[row-3][col+3] === currentcolor)) {
			upright.push(changetoposition(row-1, col+1));
			upright.push(changetoposition(row-2, col+2));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col+1] === nextcolor) && (currentboard[row-2][col+2] === currentcolor)) {
			upright.push(changetoposition(row-1, col+1));
			evaluation = 1;
		}
		else {
			cleararray(upright);
		}
		
		// downright
		if ((currentboard[row+1][col+1] === nextcolor) && (currentboard[row+2][col+2] === nextcolor) && (currentboard[row+3][col+3] === nextcolor) && (currentboard[row+4][col+4] === nextcolor) && (currentboard[row+5][col+5] === nextcolor) && (currentboard[row+6][col+6] === nextcolor) && (currentboard[row+7][col+7] === currentcolor)) {
			downright.push(changetoposition(row+1, col+1));
			downright.push(changetoposition(row+2, col+2));
			downright.push(changetoposition(row+3, col+3));
			downright.push(changetoposition(row+4, col+4));
			downright.push(changetoposition(row+5, col+5));
			downright.push(changetoposition(row+6, col+6));
			//alert("all down right");
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col+1] === nextcolor) && (currentboard[row+2][col+2] === nextcolor) && (currentboard[row+3][col+3] === nextcolor) && (currentboard[row+4][col+4] === nextcolor) && (currentboard[row+5][col+5] === nextcolor) && (currentboard[row+6][col+6] === currentcolor)) {
			downright.push(changetoposition(row+1, col+1));
			downright.push(changetoposition(row+2, col+2));
			downright.push(changetoposition(row+3, col+3));
			downright.push(changetoposition(row+4, col+4));
			downright.push(changetoposition(row+5, col+5));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col+1] === nextcolor) && (currentboard[row+2][col+2] === nextcolor) && (currentboard[row+3][col+3] === nextcolor) && (currentboard[row+4][col+4] === nextcolor) && (currentboard[row+5][col+5] === currentcolor)) {
			downright.push(changetoposition(row+1, col+1));
			downright.push(changetoposition(row+2, col+2));
			downright.push(changetoposition(row+3, col+3));
			downright.push(changetoposition(row+4, col+4));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col+1] === nextcolor) && (currentboard[row+2][col+2] === nextcolor) && (currentboard[row+3][col+3] === nextcolor) && (currentboard[row+4][col+4] === currentcolor)) {
			downright.push(changetoposition(row+1, col+1));
			downright.push(changetoposition(row+2, col+2));
			downright.push(changetoposition(row+3, col+3));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col+1] === nextcolor) && (currentboard[row+2][col+2] === nextcolor) && (currentboard[row+3][col+3] === currentcolor)) {
			downright.push(changetoposition(row+1, col+1));
			downright.push(changetoposition(row+2, col+2));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col+1] === nextcolor) && (currentboard[row+2][col+2] === currentcolor)) {
			downright.push(changetoposition(row+1, col+1));
			evaluation = 1;
		}
		else {
			cleararray(downright);
		}
	
		// downleft
		if ((currentboard[row+1][col-1] === nextcolor) && (currentboard[row+2][col-2] === nextcolor) && (currentboard[row+3][col-3] === nextcolor) && (currentboard[row+4][col-4] === nextcolor) && (currentboard[row+5][col-5] === nextcolor) && (currentboard[row+6][col-6] === nextcolor) && (currentboard[row+7][col-7] === currentcolor)) {
			downleft.push(changetoposition(row+1, col-1));
			downleft.push(changetoposition(row+2, col-2));
			downleft.push(changetoposition(row+3, col-3));
			downleft.push(changetoposition(row+4, col-4));
			downleft.push(changetoposition(row+5, col-5));
			downleft.push(changetoposition(row+6, col-6));
			//alert("all downleft");
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col-1] === nextcolor) && (currentboard[row+2][col-2] === nextcolor) && (currentboard[row+3][col-3] === nextcolor) && (currentboard[row+4][col-4] === nextcolor) && (currentboard[row+5][col-5] === nextcolor) && (currentboard[row+6][col-6] === currentcolor)) {
			downleft.push(changetoposition(row+1, col-1));
			downleft.push(changetoposition(row+2, col-2));
			downleft.push(changetoposition(row+3, col-3));
			downleft.push(changetoposition(row+4, col-4));
			downleft.push(changetoposition(row+5, col-5));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col-1] === nextcolor) && (currentboard[row+2][col-2] === nextcolor) && (currentboard[row+3][col-3] === nextcolor) && (currentboard[row+4][col-4] === nextcolor) && (currentboard[row+5][col-5] === currentcolor)) {
			downleft.push(changetoposition(row+1, col-1));
			downleft.push(changetoposition(row+2, col-2));
			downleft.push(changetoposition(row+3, col-3));
			downleft.push(changetoposition(row+4, col-4));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col-1] === nextcolor) && (currentboard[row+2][col-2] === nextcolor) && (currentboard[row+3][col-3] === nextcolor) && (currentboard[row+4][col-4] === currentcolor)) {
			downleft.push(changetoposition(row+1, col-1));
			downleft.push(changetoposition(row+2, col-2));
			downleft.push(changetoposition(row+3, col-3));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col-1] === nextcolor) && (currentboard[row+2][col-2] === nextcolor) && (currentboard[row+3][col-3] === currentcolor)) {
			downleft.push(changetoposition(row+1, col-1));
			downleft.push(changetoposition(row+2, col-2));
			evaluation = 1;
		} 
		else if ((currentboard[row+1][col-1] === nextcolor) && (currentboard[row+2][col-2] === currentcolor)) {
			downleft.push(changetoposition(row+1, col-1));
			evaluation = 1;
		}
		else {
			cleararray(downleft);
		}
		
				
		// upleft
		if ((currentboard[row-1][col-1] === nextcolor) && (currentboard[row-2][col-2] === nextcolor) && (currentboard[row-3][col-3] === nextcolor) && (currentboard[row-4][col-4] === nextcolor) && (currentboard[row-5][col-5] === nextcolor) && (currentboard[row-6][col-6] === nextcolor) && (currentboard[row-7][col-7] === currentcolor)) {
			upleft.push(changetoposition(row-1, col-1));
			upleft.push(changetoposition(row-2, col-2));
			upleft.push(changetoposition(row-3, col-3));
			upleft.push(changetoposition(row-4, col-4));
			upleft.push(changetoposition(row-5, col-5));
			upleft.push(changetoposition(row-6, col-6));
			//alert("all up left");
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col-1] === nextcolor) && (currentboard[row-2][col-2] === nextcolor) && (currentboard[row-3][col-3] === nextcolor) && (currentboard[row-4][col-4] === nextcolor) && (currentboard[row-5][col-5] === nextcolor) && (currentboard[row-6][col-6] === currentcolor)) {
			upleft.push(changetoposition(row-1, col-1));
			upleft.push(changetoposition(row-2, col-2));
			upleft.push(changetoposition(row-3, col-3));
			upleft.push(changetoposition(row-4, col-4));
			upleft.push(changetoposition(row-5, col-5));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col-1] === nextcolor) && (currentboard[row-2][col-2] === nextcolor) && (currentboard[row-3][col-3] === nextcolor) && (currentboard[row-4][col-4] === nextcolor) && (currentboard[row-5][col-5] === currentcolor)) {
			upleft.push(changetoposition(row-1, col-1));
			upleft.push(changetoposition(row-2, col-2));
			upleft.push(changetoposition(row-3, col-3));
			upleft.push(changetoposition(row-4, col-4));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col-1] === nextcolor) && (currentboard[row-2][col-2] === nextcolor) && (currentboard[row-3][col-3] === nextcolor) && (currentboard[row-4][col-4] === currentcolor)) {
			upleft.push(changetoposition(row-1, col-1));
			upleft.push(changetoposition(row-2, col-2));
			upleft.push(changetoposition(row-3, col-3));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col-1] === nextcolor) && (currentboard[row-2][col-2] === nextcolor) && (currentboard[row-3][col-3] === currentcolor)) {
			upleft.push(changetoposition(row-1, col-1));
			upleft.push(changetoposition(row-2, col-2));
			evaluation = 1;
		} 
		else if ((currentboard[row-1][col-1] === nextcolor) && (currentboard[row-2][col-2] === currentcolor)) {
			upleft.push(changetoposition(row-1, col-1));
			evaluation = 1;
		}
		else {
			cleararray(upleft);
		}
		/*
		alert("up down left right upright upleft downright downleft:");
		alert(up);
		alert(down);
		alert(left);
		alert(right);
		alert(upright);
		alert(upleft);
		alert(downright);
		alert(downleft);
		*/
		////////////////////
		if (evaluation === 1) {
			for (var i = 0; i < up.length; i++) {
				squarestoflip.push(up[i]);
			}		
			for (var i = 0; i < down.length; i++) {
				squarestoflip.push(down[i]);
			}
			for (var i = 0; i < left.length; i++) {
				squarestoflip.push(left[i]);
			}
			for (var i = 0; i < right.length; i++) {
				squarestoflip.push(right[i]);
			}
			for (var i = 0; i < upright.length; i++) {
				squarestoflip.push(upright[i]);
			}
			for (var i = 0; i < upleft.length; i++) {
				squarestoflip.push(upleft[i]);
			}
			for (var i = 0; i < downright.length; i++) {
				squarestoflip.push(downright[i]);
			}
			for (var i = 0; i < downleft.length; i++) {
				squarestoflip.push(downleft[i]);
			}
			
			// checking if legit
			if (squarestoflip.length > 0) {
				flipcolors(squarestoflip);
			}
			else {
				//alert("Not a legit move!");
			}
			return evaluation;
		}
	}
	
	function flipcolors(squarestoflip) {
		for (var i = 0; i < squarestoflip.length; i++) {
			//alert("all values in squarestoflip:");
			//alert(squarestoflip[i]);
			//alert(document.getElementById(squarestoflip[i]).value);
			
			if (document.getElementById(squarestoflip[i]).value === "2") {
				document.getElementById(squarestoflip[i]).style.backgroundColor = "white";
				document.getElementById(squarestoflip[i]).value = "1";
				var row = ((document.getElementById(squarestoflip[i])).id).substr(0, (document.getElementById(squarestoflip[i]).id).indexOf('-'));
				var col = ((document.getElementById(squarestoflip[i])).id).substr(((document.getElementById(squarestoflip[i])).id).indexOf('-')+1, ((document.getElementById(squarestoflip[i])).id).length);
											
				currentboard[row][col] = 1;
			}
							
			else if (document.getElementById(squarestoflip[i]).value === "1") {
				document.getElementById(squarestoflip[i]).style.backgroundColor = "black";
				document.getElementById(squarestoflip[i]).value = "2";
				var row = ((document.getElementById(squarestoflip[i])).id).substr(0, (document.getElementById(squarestoflip[i]).id).indexOf('-'));
				var col = ((document.getElementById(squarestoflip[i])).id).substr(((document.getElementById(squarestoflip[i])).id).indexOf('-')+1, ((document.getElementById(squarestoflip[i])).id).length);
								
				currentboard[row][col] = 2;
			}			
		}
		cleararray(squarestoflip);
	}
	
	// Click the squares
	$(".square").click(function(){		
		//alert(currentboard[row][col]);
		
		if ((this).value === "0" && gameover === 0) {
			if (checklegitmove((this).id, currentboard, turnnumber) === 1) { 
		
				var row = ((this).id).substr(0, (this.id).indexOf('-'));
				var col = ((this).id).substr(((this).id).indexOf('-')+1, ((this).id).length);
				
				if (turnnumber % 2 === 1) {
					(this).style.backgroundColor = "white";
					(this).value = "1";
					currentboard[row][col] = 1;	
					turnnumber += 1;
				}
				else if (turnnumber % 2 === 0) {
					(this).style.backgroundColor = "black";
					(this).value = "2";
					currentboard[row][col] = 2;	
					turnnumber += 1;
				}
			}
			squarestoflip = [];
			gameovercheck(currentboard);
			
			if (turnnumber % 2 === 1) {
				var buttoncolor = "white";
				var textcolor = "black";
			}
			else if (turnnumber % 2 === 0) {
				var buttoncolor = "black";
				var textcolor = "white";
			}
			
			document.getElementById('skipturn').style.backgroundColor = buttoncolor;
			document.getElementById('skipturn').style.color = textcolor;
		}		
		
	})
	
	// Show current piece on board
	$(".square").mouseover(function(){
		if ((this).value === "0") {
			if (turnnumber % 2 === 1) {
				var color = "white";
			}
			else if (turnnumber % 2 === 0) {
				var color = "black";
			}
			$(this).css("background-color", color);
		}
    });
    $(".square").mouseout(function(){
		if ((this).value === "0") {
			$(this).css("background-color", "green");
		}
    });
	
	$("#skipturn").click(function(){
		if (gameover === 0) {
			turnnumber += 1;
			if (turnnumber % 2 === 1) {
				var buttoncolor = "white";
				var textcolor = "black";
			}
			else if (turnnumber % 2 === 0) {
				var buttoncolor = "black";
				var textcolor = "white";
			}
			
			document.getElementById('skipturn').style.backgroundColor = buttoncolor;
			document.getElementById('skipturn').style.color = textcolor;
		}
		else if (gameover === 1) {
			location.reload();
		}
	})
	
	// TODO
	// Show current player turn
	// Update game graphics
	
})