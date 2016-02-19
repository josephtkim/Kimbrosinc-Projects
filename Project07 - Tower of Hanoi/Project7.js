/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Set up some variables
	var col1 = [5, 4, 3, 2, 1];
	var col2 = [];
	var col3 = [];
	var length1 = col1.length - 1;
	var gameover = 0;
	
	// set values
	document.getElementsByName('placeholder1-1')[0].value=1;
	document.getElementsByName('placeholder1-2')[0].value=2;
	document.getElementsByName('placeholder1-3')[0].value=3;
	document.getElementsByName('placeholder1-4')[0].value=4;
	document.getElementsByName('placeholder1-5')[0].value=5;
	
	document.getElementsByName('placeholder2-1')[0].value=0;
	document.getElementsByName('placeholder2-2')[0].value=0;
	document.getElementsByName('placeholder2-3')[0].value=0;
	document.getElementsByName('placeholder2-4')[0].value=0;
	document.getElementsByName('placeholder2-5')[0].value=0;
	
	document.getElementsByName('placeholder3-1')[0].value=0;
	document.getElementsByName('placeholder3-2')[0].value=0;
	document.getElementsByName('placeholder3-3')[0].value=0;
	document.getElementsByName('placeholder3-4')[0].value=0;
	document.getElementsByName('placeholder3-5')[0].value=0;
	
	// set names
	document.getElementsByName('placeholder1-1')[0].name="placeholder1-1";
	document.getElementsByName('placeholder1-2')[0].name="placeholder1-2";
	document.getElementsByName('placeholder1-3')[0].name="placeholder1-3";
	document.getElementsByName('placeholder1-4')[0].name="placeholder1-4";
	document.getElementsByName('placeholder1-5')[0].name="placeholder1-5";
	
	document.getElementsByName('placeholder2-1')[0].name="placeholder2-1";
	document.getElementsByName('placeholder2-2')[0].name="placeholder2-2";
	document.getElementsByName('placeholder2-3')[0].name="placeholder2-3";
	document.getElementsByName('placeholder2-4')[0].name="placeholder2-4";
	document.getElementsByName('placeholder2-5')[0].name="placeholder2-5";
	
	document.getElementsByName('placeholder3-1')[0].name="placeholder3-1";
	document.getElementsByName('placeholder3-2')[0].name="placeholder3-2";
	document.getElementsByName('placeholder3-3')[0].name="placeholder3-3";
	document.getElementsByName('placeholder3-4')[0].name="placeholder3-4";
	document.getElementsByName('placeholder3-5')[0].name="placeholder3-5";
	
	var block1 = "../Project7 - Tower of Hanoi/block1.png";
	var block2 = "../Project7 - Tower of Hanoi/block2.png";
	var block3 = "../Project7 - Tower of Hanoi/block3.png";
	var block4 = "../Project7 - Tower of Hanoi/block4.png";
	var block5 = "../Project7 - Tower of Hanoi/block5.png";
	
	document.getElementById("1-1").src = block1;
	document.getElementById("1-2").src = block2;
	document.getElementById("1-3").src = block3;
	document.getElementById("1-4").src = block4;
	document.getElementById("1-5").src = block5;
	
	var firstcolval;
	var secondcolval;
	
	var currentblockvalue;
	
	////////////////////////////////// FUNCTIONS ////////////////////////////////
	function deleteimg(colnum) {
		var positioning;
		
		if (colnum == 1){
			if (col1.length == 5) {
				positioning = "1-1";
			}
			else if (col1.length == 4) {
				positioning = "1-2";
			}
			else if (col1.length == 3) {
				positioning = "1-3";
			}
			else if (col1.length == 2) {
				positioning = "1-4";
			}
			else if (col1.length == 1) {
				positioning = "1-5";
			};
		}
		else if (colnum == 2) {
			if (col2.length == 5) {
				positioning = "2-1";
			}
			else if (col2.length == 4) {
				positioning = "2-2";
			}
			else if (col2.length == 3) {
				positioning = "2-3";
			}
			else if (col2.length == 2) {
				positioning = "2-4";
			}
			else if (col2.length == 1) {
				positioning = "2-5";
			};
 		}
		else if (colnum == 3) {
			if (col3.length == 5) {
				positioning = "3-1";
			}
			else if (col3.length == 4) {
				positioning = "3-2";
			}
			else if (col3.length == 3) {
				positioning = "3-3";
			}
			else if (col3.length == 2) {
				positioning = "3-4";
			}
			else if (col3.length == 1) {
				positioning = "3-5";
			};
		}

		return positioning;
	};
	
	function imagesrcposition(colnum) {
		var source;
		if (colnum == 1){
			if (col1.length == 5) {
				source = "1-1";
			}
			else if (col1.length == 4) {
				source = "1-2";
			}
			else if (col1.length == 3) {
				source = "1-3";
			}
			else if (col1.length == 2) {
				source = "1-4";
			}
			else if (col1.length == 1) {
				source = "1-5";
			};
		}
		else if (colnum == 2) {
			if (col2.length == 5) {
				source = "2-1";
			}
			else if (col2.length == 4) {
				source = "2-2";
			}
			else if (col2.length == 3) {
				source = "2-3";
			}
			else if (col2.length == 2) {
				source = "2-4";
			}
			else if (col2.length == 1) {
				source = "2-5";
			};
 		}
		else if (colnum == 3) {
			if (col3.length == 5) {
				source = "3-1";
			}
			else if (col3.length == 4) {
				source = "3-2";
			}
			else if (col3.length == 3) {
				source = "3-3";
			}
			else if (col3.length == 2) {
				source = "3-4";
			}
			else if (col3.length == 1) {
				source = "3-5";
			};
		}
		
		return source;
	};
	
	function blocknum(blockvalue) {
		var blocknumber;

		if (blockvalue == 1) {
			blocknumber = block1;
		}
		else if (blockvalue == 2) {
			blocknumber = block2;
		}
		else if (blockvalue == 3) {
			blocknumber = block3;
		}
		else if (blockvalue == 4) {
			blocknumber = block4;
		}
		else if (blockvalue == 5) {
			blocknumber = block5;
		};
		
		return blocknumber;
	};
	
	function placeholdervalue(colnum, blockval){
	
		if (colnum == 1){
			if (col1.length == 5) {
				document.getElementsByName('placeholder1-1')[0].value = blockval;
			}
			else if (col1.length == 4) {
				document.getElementsByName('placeholder1-2')[0].value = blockval;
			}
			else if (col1.length == 3) {
				document.getElementsByName('placeholder1-3')[0].value = blockval;
			}
			else if (col1.length == 2) {
				document.getElementsByName('placeholder1-4')[0].value = blockval;
			}
			else if (col1.length == 1) {
				document.getElementsByName('placeholder1-5')[0].value = blockval;
			};
		}
		else if (colnum == 2) {
			if (col2.length == 5) {
				document.getElementsByName('placeholder2-1')[0].value = blockval;
			}
			else if (col2.length == 4) {
				document.getElementsByName('placeholder2-2')[0].value = blockval;
			}
			else if (col2.length == 3) {
				document.getElementsByName('placeholder2-3')[0].value = blockval;
			}
			else if (col2.length == 2) {
				document.getElementsByName('placeholder2-4')[0].value = blockval;
			}
			else if (col2.length == 1) {
				document.getElementsByName('placeholder2-5')[0].value = blockval;
			};
 		}
		else if (colnum == 3) {
			if (col3.length == 5) {
				document.getElementsByName('placeholder3-1')[0].value = blockval;
			}
			else if (col3.length == 4) {
				document.getElementsByName('placeholder3-2')[0].value = blockval;
			}
			else if (col3.length == 3) {
				document.getElementsByName('placeholder3-3')[0].value = blockval;
			}
			else if (col3.length == 2) {
				document.getElementsByName('placeholder3-4')[0].value = blockval;
			}
			else if (col3.length == 1) {
				document.getElementsByName('placeholder3-5')[0].value = blockval;
			};
		}
	};
	
	function clearplaceholdervalue(colnum){
	
		if (colnum == 1){
			if (col1.length == 5) {
				document.getElementsByName('placeholder1-1')[0].value = 0;
			}
			else if (col1.length == 4) {
				document.getElementsByName('placeholder1-2')[0].value = 0;
			}
			else if (col1.length == 3) {
				document.getElementsByName('placeholder1-3')[0].value = 0;
			}
			else if (col1.length == 2) {
				document.getElementsByName('placeholder1-4')[0].value = 0;
			}
			else if (col1.length == 1) {
				document.getElementsByName('placeholder1-5')[0].value = 0;
			};
		}
		else if (colnum == 2) {
			if (col2.length == 5) {
				document.getElementsByName('placeholder2-1')[0].value = 0;
			}
			else if (col2.length == 4) {
				document.getElementsByName('placeholder2-2')[0].value = 0;
			}
			else if (col2.length == 3) {
				document.getElementsByName('placeholder2-3')[0].value = 0;
			}
			else if (col2.length == 2) {
				document.getElementsByName('placeholder2-4')[0].value = 0;
			}
			else if (col2.length == 1) {
				document.getElementsByName('placeholder2-5')[0].value = 0;
			};
 		}
		else if (colnum == 3) {
			if (col3.length == 5) {
				document.getElementsByName('placeholder3-1')[0].value = 0;
			}
			else if (col3.length == 4) {
				document.getElementsByName('placeholder3-2')[0].value = 0;
			}
			else if (col3.length == 3) {
				document.getElementsByName('placeholder3-3')[0].value = 0;
			}
			else if (col3.length == 2) {
				document.getElementsByName('placeholder3-4')[0].value = 0;
			}
			else if (col3.length == 1) {
				document.getElementsByName('placeholder3-5')[0].value = 0;
			};
		}
	};
	
	////////////////////////////////// FUNCTIONS END ////////////////////////////////
	// Click some block and then click the pole to move it
	$('.pole1').click(function() {
		if (currentblockvalue > 0 && gameover == 0) {
			secondcolval = 1;
			
			if (col1[(col1.length - 1)] > currentblockvalue || col1.length == 0) {
				
				if (firstcolval == 1) {
					document.getElementById(deleteimg(firstcolval)).src = "";
					clearplaceholdervalue(firstcolval);
					col1.pop();
				}
				else if (firstcolval == 2) {
					document.getElementById(deleteimg(firstcolval)).src = "";
					clearplaceholdervalue(firstcolval);
					col2.pop();														
				}
				else if (firstcolval == 3) {
					document.getElementById(deleteimg(firstcolval)).src = "";
					clearplaceholdervalue(firstcolval);
					col3.pop();				
				};
				
				col1.push(currentblockvalue);
				document.getElementById(imagesrcposition(secondcolval)).src = blocknum(currentblockvalue);
				placeholdervalue(secondcolval, currentblockvalue);
				
				currentblockvalue = "";
				secondcolval = "";
			}
			else {
				alert("invalid move");				
			};
			
			if (col3.length == 5) {
				alert("YOU WIN!");
				gameover = 1;
			};
		};		
	});
	$('.pole2').click(function() {		
		if (currentblockvalue > 0 && gameover == 0) {
			secondcolval = 2;	
			
			if (col2[(col2.length - 1)] > currentblockvalue || col2.length == 0) {
				
				if (firstcolval == 1) {
					document.getElementById(deleteimg(firstcolval)).src = "";
					clearplaceholdervalue(firstcolval);
					col1.pop();
				}
				else if (firstcolval == 2) {
					document.getElementById(deleteimg(firstcolval)).src = "";
					clearplaceholdervalue(firstcolval);
					col2.pop();													
				}
				else if (firstcolval == 3) {
					document.getElementById(deleteimg(firstcolval)).src = "";
					clearplaceholdervalue(firstcolval);
					col3.pop();					
				};
				
				col2.push(currentblockvalue);				
				document.getElementById(imagesrcposition(secondcolval)).src = blocknum(currentblockvalue);
				placeholdervalue(secondcolval, currentblockvalue);
				
				currentblockvalue = "";
				secondcolval = "";
			}
			else {
				alert("invalid move");
			};
			
			if (col3.length == 5) {
				alert("YOU WIN!");
				gameover = 1;
			};
		};
	});
	$('.pole3').click(function() {
		
		if (currentblockvalue > 0 && gameover == 0) {
			secondcolval = 3;
			
			if (col3[(col3.length - 1)] > currentblockvalue || col3.length == 0) {
				
				if (firstcolval == 1) {
					document.getElementById(deleteimg(firstcolval)).src = "";
					clearplaceholdervalue(firstcolval);
					col1.pop();
				}
				else if (firstcolval == 2) {
					document.getElementById(deleteimg(firstcolval)).src = "";
					clearplaceholdervalue(firstcolval);
					col2.pop();													
				}
				else if (firstcolval == 3) {
					document.getElementById(deleteimg(firstcolval)).src = "";
					clearplaceholdervalue(firstcolval);
					col3.pop();			
				};
				
				col3.push(currentblockvalue);
				document.getElementById(imagesrcposition(secondcolval)).src = blocknum(currentblockvalue);			
				placeholdervalue(secondcolval, currentblockvalue);

				currentblockvalue = "";
				secondcolval = "";
			}
			else {
				alert("invalid move");
			};
			
			if (col3.length == 5) {
				alert("YOU WIN!");
				gameover = 1;
			};
		};				
	
	});
	//
	
	// Get the block and the block's column that you clicked on
	$('.placeholder').click(function(){
	if ((this).value > 0 || (((this).value == col1[(col1.length - 1)]) || ((this).value == col2[(col2.length - 1)])) || ((this).value == col3[(col3.length - 1)])) {
			currentblockvalue = (this).value;
		
			if ( ((this).name == "placeholder1-1") || ((this).name == "placeholder1-2") || ((this).name == "placeholder1-3") || ((this).name == "placeholder1-4") || ((this).name == "placeholder1-5")){
				firstcolval = 1;
			}
			else if (((this).name == "placeholder2-1") || ((this).name == "placeholder2-2") || ((this).name == "placeholder2-3") || ((this).name == "placeholder2-4") || ((this).name == "placeholder2-5")){
				firstcolval = 2;
			}
			else if (((this).name == "placeholder3-1") || ((this).name == "placeholder3-2") || ((this).name == "placeholder3-3") || ((this).name == "placeholder3-4") || ((this).name == "placeholder3-5")){
				firstcolval = 3;
			};
		};
	});
	
	// Restart button
	$('#button').click(function(){
		location.reload();
	});
});