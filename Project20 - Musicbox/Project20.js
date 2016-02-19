/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Set up the canvas
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	// Get each note's sound
	var note1 = new Audio("../Project20 - Musicbox/noteA.wav");
	var note2 = new Audio("../Project20 - Musicbox/noteB.wav");
	var note3 = new Audio("../Project20 - Musicbox/noteC.wav");
	var note4 = new Audio("../Project20 - Musicbox/noteD.wav");
	var note5 = new Audio("../Project20 - Musicbox/noteE.wav");
	var note6 = new Audio("../Project20 - Musicbox/noteF.wav");
	var note7 = new Audio("../Project20 - Musicbox/noteG.wav");
	
	var notes = [note1, note2, note3, note4, note5, note6, note7];
	
	// Set up each column in the sheet
	var column0 = [0,0,0,0,0,0,0];
	var column1 = [0,0,0,0,0,0,0];
	var column2 = [0,0,0,0,0,0,0];
	var column3 = [0,0,0,0,0,0,0];
	var column4 = [0,0,0,0,0,0,0];
	var column5 = [0,0,0,0,0,0,0];
	var column6 = [0,0,0,0,0,0,0];
	var column7 = [0,0,0,0,0,0,0];
	var column8 = [0,0,0,0,0,0,0];
	var column9 = [0,0,0,0,0,0,0];
	var column10 = [0,0,0,0,0,0,0];
	var column11 = [0,0,0,0,0,0,0];
	var column12 = [0,0,0,0,0,0,0];
	var column13 = [0,0,0,0,0,0,0];
	var column14 = [0,0,0,0,0,0,0];
	var column15 = [0,0,0,0,0,0,0];
	
	var x = 0;

	// Draw sheet music lines
	// rows
	function drawLines(){
		for (var i = 30; i <= 210; i+= 30) {
			ctx.lineWidth=1;
			ctx.beginPath();
			ctx.moveTo(0, i);
			ctx.lineTo(500, i);
			ctx.stroke();
		}
		
		// measures
		for (var i = 125; i <= 500; i += 125) {
			ctx.lineWidth=2;
			ctx.beginPath();
			ctx.moveTo(i, 0);
			ctx.lineTo(i, 210);
			ctx.stroke();
		}
	}

	// Create the note positions
	var $grid = $('#blocks');
	var columns = 16;
	var row;
	var rows = 7;
	
	for (var j = 0; j < columns; j ++) {
		row = "";
		
		for(var i = 0; i < rows; i++)	
		{
			row += '<div title="column'+ j +'"id="block' +i+'-'+j+'" class="block row' +i+ '"; style= "top:' + (i*30) + 'px; left: ' + (j * 31.25) + 'px"></div>';
		}
		$grid.append(row);
	}
	
	var curcol;
	
	// Add the note when clicking the sheet
	$(".block").click(function(){
		(this).style.backgroundColor = "black";
		
		if ((this).className === "block row0") {
			note1.play();
			var curcol = 0;
			
			if ((this).title === "column0") {
				column0[curcol] = 1;
			}
			else if ((this).title === "column1") {
				column1[curcol] = 1;
			}
			else if ((this).title === "column2") {
				column2[curcol] = 1;
			}
			else if ((this).title === "column3") {
				column3[curcol] = 1;
			}
			else if ((this).title === "column4") {
				column4[curcol] = 1;
			}
			else if ((this).title === "column5") {
				column5[curcol] = 1;
			}
			else if ((this).title === "column6") {
				column6[curcol] = 1;
			}
			else if ((this).title === "column7") {
				column7[curcol] = 1;
			}
			else if ((this).title === "column8") {
				column8[curcol] = 1;
			}
			else if ((this).title === "column9") {
				column9[curcol] = 1;
			}
			else if ((this).title === "column10") {
				column10[curcol] = 1;
			}
			else if ((this).title === "column11") {
				column11[curcol] = 1;
			}
			else if ((this).title === "column12") {
				column12[curcol] = 1;
			}
			else if ((this).title === "column13") {
				column13[curcol] = 1;
			}
			else if ((this).title === "column14") {
				column14[curcol] = 1;
			}
			else if ((this).title === "column15") {
				column15[curcol] = 1;
			}
		}
		else if ((this).className === "block row1") {
			note2.play();
			var curcol = 1;
			
			if ((this).title === "column0") {
				column0[curcol] = 1;
			}
			else if ((this).title === "column1") {
				column1[curcol] = 1;
			}
			else if ((this).title === "column2") {
				column2[curcol] = 1;
			}
			else if ((this).title === "column3") {
				column3[curcol] = 1;
			}
			else if ((this).title === "column4") {
				column4[curcol] = 1;
			}
			else if ((this).title === "column5") {
				column5[curcol] = 1;
			}
			else if ((this).title === "column6") {
				column6[curcol] = 1;
			}
			else if ((this).title === "column7") {
				column7[curcol] = 1;
			}
			else if ((this).title === "column8") {
				column8[curcol] = 1;
			}
			else if ((this).title === "column9") {
				column9[curcol] = 1;
			}
			else if ((this).title === "column10") {
				column10[curcol] = 1;
			}
			else if ((this).title === "column11") {
				column11[curcol] = 1;
			}
			else if ((this).title === "column12") {
				column12[curcol] = 1;
			}
			else if ((this).title === "column13") {
				column13[curcol] = 1;
			}
			else if ((this).title === "column14") {
				column14[curcol] = 1;
			}
			else if ((this).title === "column15") {
				column15[curcol] = 1;
			}
		}
		else if ((this).className === "block row2") {
			note3.play();
			var curcol = 2;
			
			if ((this).title === "column0") {
				column0[curcol] = 1;
			}
			else if ((this).title === "column1") {
				column1[curcol] = 1;
			}
			else if ((this).title === "column2") {
				column2[curcol] = 1;
			}
			else if ((this).title === "column3") {
				column3[curcol] = 1;
			}
			else if ((this).title === "column4") {
				column4[curcol] = 1;
			}
			else if ((this).title === "column5") {
				column5[curcol] = 1;
			}
			else if ((this).title === "column6") {
				column6[curcol] = 1;
			}
			else if ((this).title === "column7") {
				column7[curcol] = 1;
			}
			else if ((this).title === "column8") {
				column8[curcol] = 1;
			}
			else if ((this).title === "column9") {
				column9[curcol] = 1;
			}
			else if ((this).title === "column10") {
				column10[curcol] = 1;
			}
			else if ((this).title === "column11") {
				column11[curcol] = 1;
			}
			else if ((this).title === "column12") {
				column12[curcol] = 1;
			}
			else if ((this).title === "column13") {
				column13[curcol] = 1;
			}
			else if ((this).title === "column14") {
				column14[curcol] = 1;
			}
			else if ((this).title === "column15") {
				column15[curcol] = 1;
			}
		}
		else if ((this).className === "block row3") {
			note4.play();
			var curcol = 3;
			
			if ((this).title === "column0") {
				column0[curcol] = 1;
			}
			else if ((this).title === "column1") {
				column1[curcol] = 1;
			}
			else if ((this).title === "column2") {
				column2[curcol] = 1;
			}
			else if ((this).title === "column3") {
				column3[curcol] = 1;
			}
			else if ((this).title === "column4") {
				column4[curcol] = 1;
			}
			else if ((this).title === "column5") {
				column5[curcol] = 1;
			}
			else if ((this).title === "column6") {
				column6[curcol] = 1;
			}
			else if ((this).title === "column7") {
				column7[curcol] = 1;
			}
			else if ((this).title === "column8") {
				column8[curcol] = 1;
			}
			else if ((this).title === "column9") {
				column9[curcol] = 1;
			}
			else if ((this).title === "column10") {
				column10[curcol] = 1;
			}
			else if ((this).title === "column11") {
				column11[curcol] = 1;
			}
			else if ((this).title === "column12") {
				column12[curcol] = 1;
			}
			else if ((this).title === "column13") {
				column13[curcol] = 1;
			}
			else if ((this).title === "column14") {
				column14[curcol] = 1;
			}
			else if ((this).title === "column15") {
				column15[curcol] = 1;
			}
		}
		else if ((this).className === "block row4") {
			note5.play();
			var curcol = 4;
			
			if ((this).title === "column0") {
				column0[curcol] = 1;
			}
			else if ((this).title === "column1") {
				column1[curcol] = 1;
			}
			else if ((this).title === "column2") {
				column2[curcol] = 1;
			}
			else if ((this).title === "column3") {
				column3[curcol] = 1;
			}
			else if ((this).title === "column4") {
				column4[curcol] = 1;
			}
			else if ((this).title === "column5") {
				column5[curcol] = 1;
			}
			else if ((this).title === "column6") {
				column6[curcol] = 1;
			}
			else if ((this).title === "column7") {
				column7[curcol] = 1;
			}
			else if ((this).title === "column8") {
				column8[curcol] = 1;
			}
			else if ((this).title === "column9") {
				column9[curcol] = 1;
			}
			else if ((this).title === "column10") {
				column10[curcol] = 1;
			}
			else if ((this).title === "column11") {
				column11[curcol] = 1;
			}
			else if ((this).title === "column12") {
				column12[curcol] = 1;
			}
			else if ((this).title === "column13") {
				column13[curcol] = 1;
			}
			else if ((this).title === "column14") {
				column14[curcol] = 1;
			}
			else if ((this).title === "column15") {
				column15[curcol] = 1;
			}
		}
		else if ((this).className === "block row5") {
			note6.play();
			var curcol = 5;
			
			if ((this).title === "column0") {
				column0[curcol] = 1;
			}
			else if ((this).title === "column1") {
				column1[curcol] = 1;
			}
			else if ((this).title === "column2") {
				column2[curcol] = 1;
			}
			else if ((this).title === "column3") {
				column3[curcol] = 1;
			}
			else if ((this).title === "column4") {
				column4[curcol] = 1;
			}
			else if ((this).title === "column5") {
				column5[curcol] = 1;
			}
			else if ((this).title === "column6") {
				column6[curcol] = 1;
			}
			else if ((this).title === "column7") {
				column7[curcol] = 1;
			}
			else if ((this).title === "column8") {
				column8[curcol] = 1;
			}
			else if ((this).title === "column9") {
				column9[curcol] = 1;
			}
			else if ((this).title === "column10") {
				column10[curcol] = 1;
			}
			else if ((this).title === "column11") {
				column11[curcol] = 1;
			}
			else if ((this).title === "column12") {
				column12[curcol] = 1;
			}
			else if ((this).title === "column13") {
				column13[curcol] = 1;
			}
			else if ((this).title === "column14") {
				column14[curcol] = 1;
			}
			else if ((this).title === "column15") {
				column15[curcol] = 1;
			}
		}
		else if ((this).className === "block row6") {
			note7.play();
			var curcol = 6;
			
			if ((this).title === "column0") {
				column0[curcol] = 1;
			}
			else if ((this).title === "column1") {
				column1[curcol] = 1;
			}
			else if ((this).title === "column2") {
				column2[curcol] = 1;
			}
			else if ((this).title === "column3") {
				column3[curcol] = 1;
			}
			else if ((this).title === "column4") {
				column4[curcol] = 1;
			}
			else if ((this).title === "column5") {
				column5[curcol] = 1;
			}
			else if ((this).title === "column6") {
				column6[curcol] = 1;
			}
			else if ((this).title === "column7") {
				column7[curcol] = 1;
			}
			else if ((this).title === "column8") {
				column8[curcol] = 1;
			}
			else if ((this).title === "column9") {
				column9[curcol] = 1;
			}
			else if ((this).title === "column10") {
				column10[curcol] = 1;
			}
			else if ((this).title === "column11") {
				column11[curcol] = 1;
			}
			else if ((this).title === "column12") {
				column12[curcol] = 1;
			}
			else if ((this).title === "column13") {
				column13[curcol] = 1;
			}
			else if ((this).title === "column14") {
				column14[curcol] = 1;
			}
			else if ((this).title === "column15") {
				column15[curcol] = 1;
			}
		}
	})

	// Draw the moving line
	function drawWave(){
		drawTime(ctx);
	}

	// Play the notes depending on the location of the moving ticker
	function playNotes() { 
		// column 1
		if (x*100 >= 0 && x*100 <= 1) {
			for (var i = 0; i < 7; i++) {
				if (column0[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 2
		else if (x*100 >= 31.25 && x*100 <= 32.25){
			for (var i = 0; i < 7; i++) {
				if (column1[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 3
		else if (x*100 >= 62.5 && x*100 <= 63.5) {
			for (var i = 0; i < 7; i++) {
				if (column2[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 4
		else if (x*100 >= 93.75 && x*100 <= 94.75) {
			for (var i = 0; i < 7; i++) {
				if (column3[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 5
		else if (x*100 >= 125 && x*100 <= 126) {
			for (var i = 0; i < 7; i++) {
				if (column4[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 6
		else if (x*100 >= 156.25 && x*100 <= 157.25) {
			for (var i = 0; i < 7; i++) {
				if (column5[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 7
		else if (x*100 >= 187.5 && x*100 <= 188.5) {
			for (var i = 0; i < 7; i++) {
				if (column6[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 8
		else if (x*100 >= 218.75 && x*100 <= 219.75) {
			for (var i = 0; i < 7; i++) {
				if (column7[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 9
		else if (x*100 >= 250 && x*100 <= 251) {
			for (var i = 0; i < 7; i++) {
				if (column8[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 10
		else if (x*100 >= 281.25 && x*100 <= 282.25) {
			for (var i = 0; i < 7; i++) {
				if (column9[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 11
		else if (x*100 >= 312.5 && x*100 <= 313.5) {
			for (var i = 0; i < 7; i++) {
				if (column10[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 12
		else if (x*100 >= 343.75 && x*100 <= 344.75) {
			for (var i = 0; i < 7; i++) {
				if (column11[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 13
		else if (x*100 >= 375 && x*100 <= 376) {
			for (var i = 0; i < 7; i++) {
				if (column12[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 14
		else if (x*100 >= 406.25 && x*100 <= 407.25) {
			for (var i = 0; i < 7; i++) {
				if (column13[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 15
		else if (x*100 >= 437.5 && x*100 <= 438.5) {
			for (var i = 0; i < 7; i++) {
				if (column14[i] === 1) {
					notes[i].play();
				}
			}
		}
		// column 16
		else if (x*100 >= 468.75 && x*100 <= 469.75) {
			for (var i = 0; i < 7; i++) {
				if (column15[i] === 1) {
					notes[i].play();
				}
			}
		}
	}
	
	// Draw the moving line
	function drawTime(ctx) {
		drawDot(ctx);
	}	
	function drawDot(ctx) {
		playNotes();
		ctx.lineWidth=1;
		ctx.clearRect(0, 0, 500, 210);
		ctx.beginPath();
		ctx.fillStyle = "white";
		x += 0.0025;
		if (x*100 >= 500) {
			x = 0;
		}
		
		ctx.beginPath();
		ctx.moveTo(x*100,0);
		ctx.lineTo(x*100,210);
		ctx.stroke();
		
		drawLines();
	}
	
	// Start the program!
	drawWave();
	
	// Play the music 
	$("#play").click(function(){
		setInterval(drawWave, 8);
	});
	
	// Play from the beginning
	$('#reset').click(function(){
		x = 0;
	});
})