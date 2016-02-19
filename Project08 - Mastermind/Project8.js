/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Initialize some stuff
	var colorsrow1 = [0, 1, 2, 3];
	var colorsrow2 = [4, 5, 6, 7];
	
	// Randomly choose the 4 numbers for the answer
	var number1 = Math.floor((Math.random() * 8));
	var number2 = Math.floor((Math.random() * 8));
	var number3 = Math.floor((Math.random() * 8));
	var number4 = Math.floor((Math.random() * 8));
	
	var answer = [];	
	answer.push(number1);
	answer.push(number2);
	answer.push(number3);
	answer.push(number4);
	
	// Images to show
	var red = "../Project8 - Mastermind/redcircle.png";
	var orange = "../Project8 - Mastermind/orangecircle.png";
	var yellow = "../Project8 - Mastermind/yellowcircle.png";
	var green = "../Project8 - Mastermind/greencircle.png";
	var blue = "../Project8 - Mastermind/bluecircle.png";
	var purple = "../Project8 - Mastermind/purplecircle.png";
	var brown = "../Project8 - Mastermind/browncircle.png";
	var gray = "../Project8 - Mastermind/graycircle.png";
	
	var RRRR = "../Project8 - Mastermind/RRRR.png";
	var RRRW = "../Project8 - Mastermind/RRRW.png";
	var RRWW = "../Project8 - Mastermind/RRWW.png";
	var RWWW = "../Project8 - Mastermind/RWWW.png";
	var WWWW = "../Project8 - Mastermind/WWWW.png";
	var RRR = "../Project8 - Mastermind/RRR.png";
	var RRW = "../Project8 - Mastermind/RRW.png";
	var RWW = "../Project8 - Mastermind/RWW.png";
	var WWW = "../Project8 - Mastermind/WWW.png";
	var RR = "../Project8 - Mastermind/RR.png";
	var RW = "../Project8 - Mastermind/RW.png";
	var WW = "../Project8 - Mastermind/WW.png";
	var R = "../Project8 - Mastermind/R.png";
	var W = "../Project8 - Mastermind/W.png";
	
	var guess = [];	
	var rownumber = 1;
	var circlecount = 0;
	var gameover = 0;
	
	////////////////////////////////// FUNCTIONS //////////////////////////////////
	function numbertocolor(number) {
		var color;		
		switch(number) {
			case 0:
				color = red;
			break;
			case 1:
				color = orange;
			break;
			case 2:
				color = yellow;
			break;
			case 3:
				color = green;
			break;
			case 4:
				color = blue;
			break;
			case 5:
				color = purple;
			break;
			case 6:
				color = brown;
			break;
			case 7:
				color = gray;
			break;			
		} 		
		return color;
	}
	
	function showanswer(answer) {
		document.getElementById("answercircle1").src = numbertocolor(answer[0]);
		document.getElementById("answercircle2").src = numbertocolor(answer[1]);
		document.getElementById("answercircle3").src = numbertocolor(answer[2]);
		document.getElementById("answercircle4").src = numbertocolor(answer[3]);
	}
	
	function evaluate(eval) {		
		if (gameover == 0) {
			var rcount = 0;
			var wcount = 0;
			var evaluationarray = [];
			
			for (var i = 0; i < eval.length; i++){
				if (eval[i] == "R"){					
					evaluationarray.push("R");
					rcount += 1;
				}
				else if (eval[i] == "W"){
					evaluationarray.push("W");
					wcount += 1;
				}
			}			
			
			evalimage(rcount, wcount, rownumber);
		}
		
		if (eval[0] == "R" && eval[1] == "R" && eval[2] == "R" && eval[3] == "R"){
			alert("You have defeated the mastermind!");
			gameover = 1;
			showanswer(answer);
		}

		if (rownumber == 10 && gameover == 0) {
			alert("You lose!");
			gameover = 1;
			showanswer(answer);
		}
		
		
	}	
	
	function evalimage(rcount, wcount, rownumber) {
		switch(rownumber) {
			case 1: 
				if (rcount == 4) {
					document.getElementById("row1eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row1eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row1eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row1eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row1eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row1eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row1eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row1eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row1eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row1eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row1eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row1eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row1eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row1eval").src = W;
				}
			break;
			case 2: 
				if (rcount == 4) {
					document.getElementById("row2eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row2eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row2eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row2eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row2eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row2eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row2eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row2eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row2eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row2eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row2eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row2eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row2eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row2eval").src = W;
				}
			break;
			case 3: 
				if (rcount == 4) {
					document.getElementById("row3eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row3eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row3eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row3eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row3eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row3eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row3eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row3eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row3eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row3eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row3eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row3eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row3eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row3eval").src = W;
				}
			break;
			case 4: 
				if (rcount == 4) {
					document.getElementById("row4eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row4eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row4eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row4eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row4eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row4eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row4eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row4eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row4eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row4eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row4eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row4eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row4eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row4eval").src = W;
				}
			break;
			case 5: 
				if (rcount == 4) {
					document.getElementById("row5eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row5eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row5eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row5eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row5eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row5eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row5eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row5eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row5eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row5eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row5eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row5eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row5eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row5eval").src = W;
				}
			break;
			case 6: 
				if (rcount == 4) {
					document.getElementById("row6eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row6eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row6eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row6eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row6eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row6eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row6eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row6eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row6eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row6eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row6eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row6eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row6eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row6eval").src = W;
				}
			break;
			case 7: 
				if (rcount == 4) {
					document.getElementById("row7eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row7eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row7eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row7eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row7eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row7eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row7eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row7eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row7eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row7eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row7eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row7eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row7eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row7eval").src = W;
				}
			break;
			case 8: 
				if (rcount == 4) {
					document.getElementById("row8eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row8eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row8eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row8eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row8eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row8eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row8eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row8eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row8eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row8eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row8eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row8eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row8eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row8eval").src = W;
				}
			break;
			case 9: 
				if (rcount == 4) {
					document.getElementById("row9eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row9eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row9eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row9eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row9eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row9eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row9eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row9eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row9eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row9eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row9eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row9eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row9eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row9eval").src = W;
				}
			break;
			case 10: 
				if (rcount == 4) {
					document.getElementById("row10eval").src = RRRR;
				}
				else if (rcount == 3 && wcount == 1) {
					document.getElementById("row10eval").src = RRRW;
				}
				else if (rcount == 2 && wcount == 2) {
					document.getElementById("row10eval").src = RRWW;
				}
				else if (rcount == 1 && wcount == 3) {
					document.getElementById("row10eval").src = RWWW;
				}
				else if (wcount == 4) {
					document.getElementById("row10eval").src = WWWW;
				}
				else if (rcount == 3) {
					document.getElementById("row10eval").src = RRR;
				}
				else if (rcount == 2 && wcount == 1) {
					document.getElementById("row10eval").src = RRW;
				}
				else if (rcount == 1 && wcount == 2) {
					document.getElementById("row10eval").src = RWW;
				}
				else if (wcount == 3) {
					document.getElementById("row10eval").src = WWW;
				}
				else if (rcount == 2) {
					document.getElementById("row10eval").src = RR;
				}
				else if (rcount == 1 && wcount == 1) {
					document.getElementById("row1eval").src = RW;
				}
				else if (wcount == 2) {
					document.getElementById("row10eval").src = WW;
				}
				else if (rcount == 1) {
					document.getElementById("row10eval").src = R;
				}
				else if (wcount == 1) {
					document.getElementById("row10eval").src = W;
				}
			break;
			
		}
	}
	
	function clearrow(rownumber) {
		switch(rownumber) {
			case 1:
				document.getElementById("row1circle1").src = "";
				document.getElementById("row1circle2").src = "";
				document.getElementById("row1circle3").src = "";
				document.getElementById("row1circle4").src = "";

			break;		
			
			case 2:
				document.getElementById("row2circle1").src = "";
				document.getElementById("row2circle2").src = "";
				document.getElementById("row2circle3").src = "";
				document.getElementById("row2circle4").src = "";

			break;
			
			case 3:
				document.getElementById("row3circle1").src = "";
				document.getElementById("row3circle2").src = "";
				document.getElementById("row3circle3").src = "";
				document.getElementById("row3circle4").src = "";

			break;
			
			case 4:
				document.getElementById("row4circle1").src = "";
				document.getElementById("row4circle2").src = "";
				document.getElementById("row4circle3").src = "";
				document.getElementById("row4circle4").src = "";

			break;
			
			case 5:
				document.getElementById("row5circle1").src = "";
				document.getElementById("row5circle2").src = "";
				document.getElementById("row5circle3").src = "";
				document.getElementById("row5circle4").src = "";

			break;
			
			case 6:
				document.getElementById("row6circle1").src = "";
				document.getElementById("row6circle2").src = "";
				document.getElementById("row6circle3").src = "";
				document.getElementById("row6circle4").src = "";

			break;
			
			case 7:
				document.getElementById("row7circle1").src = "";
				document.getElementById("row7circle2").src = "";
				document.getElementById("row7circle3").src = "";
				document.getElementById("row7circle4").src = "";

			break;
			
			case 8:
				document.getElementById("row8circle1").src = "";
				document.getElementById("row8circle2").src = "";
				document.getElementById("row8circle3").src = "";
				document.getElementById("row8circle4").src = "";

			break;
			
			case 9:
				document.getElementById("row9circle1").src = "";
				document.getElementById("row9circle2").src = "";
				document.getElementById("row9circle3").src = "";
				document.getElementById("row9circle4").src = "";

			break;
			
			case 10:
				document.getElementById("row10circle1").src = "";
				document.getElementById("row10circle2").src = "";
				document.getElementById("row10circle3").src = "";
				document.getElementById("row10circle4").src = "";

			break;
		}
		circlecount = 0;
	}
	
	// determine row and position of circle to place color on
	function placecircle(rownumber, circlecount, color) {
		switch(rownumber) {
			case 1:
				if (circlecount == 0){
					document.getElementById("row1circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row1circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row1circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row1circle4").src = color;
				}
			break;				
			
			case 2:			
				if (circlecount == 0){
					document.getElementById("row2circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row2circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row2circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row2circle4").src = color;
				}
			break;	
	
			case 3:			
				if (circlecount == 0){
					document.getElementById("row3circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row3circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row3circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row3circle4").src = color;
				}
			break;
			
			case 4:			
				if (circlecount == 0){
					document.getElementById("row4circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row4circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row4circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row4circle4").src = color;
				}
			break;
			
			case 5:			
				if (circlecount == 0){
					document.getElementById("row5circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row5circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row5circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row5circle4").src = color;
				}
			break;
			
			case 6:			
				if (circlecount == 0){
					document.getElementById("row6circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row6circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row6circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row6circle4").src = color;
				}
			break;
			
			case 7:			
				if (circlecount == 0){
					document.getElementById("row7circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row7circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row7circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row7circle4").src = color;
				}
			break;
			
			case 8:			
				if (circlecount == 0){
					document.getElementById("row8circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row8circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row8circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row8circle4").src = color;
				}
			break;
			
			case 9:			
				if (circlecount == 0){
					document.getElementById("row9circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row9circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row9circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row9circle4").src = color;
				}
			break;
			
			case 10:			
				if (circlecount == 0){
					document.getElementById("row10circle1").src = color;
				}
				else if (circlecount == 1) {
					document.getElementById("row10circle2").src = color;
				}
				else if (circlecount == 2) {
					document.getElementById("row10circle3").src = color;
				}
				else if (circlecount == 3) {
					document.getElementById("row10circle4").src = color;
				}
			break;
		
		}
	}
	
	function clearguess(guess){
		guess.pop();
		guess.pop();
		guess.pop();
		guess.pop();		
	}
	
	var iteratered = [0,1,2,3];
	var iteratewhite = [0,1,2,3];
	var compared = [-100,-100,-100,-100];
	var eval = [0,0,0,0];
	var tempanswer;
	
	// Evaluation function
	function evaluation(guess, answer) {
		tempanswer = answer;
		
		// find an exact color and position match
		for (i in iteratered){
			
			if (guess[i] == tempanswer[i]){
				//alert("Found a match");
				var index = i;
				//alert(guess[i]);
				//alert(index);
				iteratewhite[index] = "NR";
				
				compared[i] = 100;
								
				guess[i] = "Red match";		
				eval[i] = "R";				
			}			
		}
		 
		//alert("iterate white now looks like this");
		//alert(iteratewhite);
		
		for (k in iteratewhite)
		{
			for (j in iteratewhite)
			{
				if (guess[j] == tempanswer[k] && (j != k) && (compared[k] == -100))
				{			
					//alert("Found an unmatched match");
					var index = k;
					//alert(guess[j]);
					//alert(tempanswer[k]);
					//alert(index);
					iteratewhite[index] = "NW";
					
					compared[k] = 100;
					
					guess[j] = "White match";
					eval[j] = "W";
				}
			}
		}

		evaluate(eval);

		compared = [-100, -100, -100, -100]
		iteratered = [0,1,2,3];
		iteratewhite = [0, 1, 2, 3];
		eval = [0,0,0,0];
	}
	
	// Buttons
	$('#clearbutton').click(function(){
		if (gameover == 0) {
			clearguess(guess);
			clearrow(rownumber);
		}
	});

	$('#submitbutton').click(function(){
		if (gameover == 0) {

			if (guess.length == 4) {
				var ans = answer;
				evaluation(guess, ans);
								
				while (guess.length > 0)
				{
					clearguess(guess);
				}
				circlecount = 0;
				rownumber += 1;
			}
		}

	});
	
	$('#resetbutton').click(function(){
		location.reload();
	});
	
	var chosencolor;
	$('.choosecolorbutton').click(function(){
		if (gameover == 0) {
			chosencolor = (this).id;
			
			switch(chosencolor){
				case "redbutton":
					if (guess.length < 4){
						guess.push(0);	
						placecircle(rownumber, circlecount, red);					
						circlecount += 1;			
					}
					break;
				case "orangebutton":
					if (guess.length < 4){
						guess.push(1);		
						placecircle(rownumber, circlecount, orange);						
						circlecount += 1;
					}
					break;
				case "yellowbutton":
					if (guess.length < 4){
						guess.push(2);			
						placecircle(rownumber, circlecount, yellow);	
						circlecount += 1;						
					}
					break;
				case "greenbutton":
					if (guess.length < 4){
						guess.push(3);
						placecircle(rownumber, circlecount, green);
						circlecount += 1;						
					}
					break;
				case "bluebutton":
					if (guess.length < 4){
						guess.push(4);		
						placecircle(rownumber, circlecount, blue);					
						circlecount += 1;						
					}
					break;
				case "purplebutton":			
					if (guess.length < 4){
						guess.push(5);			
						placecircle(rownumber, circlecount, purple);
						circlecount += 1;						
					}
					break;
				case "brownbutton":
					if (guess.length < 4){
						guess.push(6);		
						placecircle(rownumber, circlecount, brown);
						circlecount += 1;						
					}
					break;
				case "graybutton":
					if (guess.length < 4){
						guess.push(7);			
						placecircle(rownumber, circlecount, gray);
						circlecount += 1;						
					}
					break;								
			}
		}
	});
	
	
	
});