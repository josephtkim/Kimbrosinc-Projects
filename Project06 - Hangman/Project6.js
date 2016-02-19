/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// All the words that could show up
	var words = ["music", "kitten", "person", "magenta", "javascript", "programming", "hypertext", "videogame", "harmony", "language"];
	
	// Setting up some variables
	var number = Math.floor((Math.random() * 10));
	var answer = words[number];
	var length = answer.length;	
	var strikes = 0;
	var correct = 0;
	var gameover = 0;	
	var guesses = [];	
	var letterinword = 0;
	
	var $grid = $('#grid');
	var $grid2 = $('#grid2');
	var $grid3 = $('#grid3');
	
	// Check if letter is in the word
	function isInArray(value, array) {
		return array.indexOf(value) > -1;
	};
	
	for (var i = 0; i < length; i++)
	{
		var id = i;
		var row = '<input class="letterspace" name="square'+id+'" type="submit" style="color: black; background-color:white; display: inline; width: 40px; height: 44px; font-size: 18px" value=" ">';
		$grid.append(row);
	};
	
	var elementname = "";
	
	// Submit the guess
	$('#submission').click(function(){
		var letter = document.getElementsByName('guess')[0].value.toLowerCase();
		document.getElementsByName('guess')[0].value = "";
		
		if ((isInArray(letter, guesses) == false) && (gameover == 0)) {
			for (var j = 0; j < length; j++)
			{
				if (answer[j] == letter) {
					guesses.push(letter);
					letterinword = 1;
					
					elementname = 'square' + j.toString();
					
					document.getElementsByName(elementname)[0].value=letter.toUpperCase();
					correct += 1;
				};
			};
			if (letterinword == 0) {
				$grid2.append(letter.toUpperCase());
				guesses.push(letter);
				strikes += 1;
			};
			
			letterinword = 0;
		};
		
		var temprow;
		
		// Check if you win or lose
		if ((strikes == 7) && (gameover == 0)) {
			alert("GAME OVER!");
			gameover = 1;
		};		
		if ((correct == length) && (gameover == 0)) {
			alert("YOU WIN!");
			gameover = 1;
		};	
		
		// Draw the appropriate image for the game
		if (strikes == 1) {
			document.getElementById("hanged").src="../Project6 - Hangman/hang1.png";
		}
		else if (strikes == 2) {
			document.getElementById("hanged").src="../Project6 - Hangman/hang2.png";
		}
		else if (strikes == 3) {
			document.getElementById("hanged").src="../Project6 - Hangman/hang3.png";
		}
		else if (strikes == 4) {
			document.getElementById("hanged").src="../Project6 - Hangman/hang4.png";
		}
		else if (strikes == 5) {
			document.getElementById("hanged").src="../Project6 - Hangman/hang5.png";
		}
		else if (strikes == 6) {
			document.getElementById("hanged").src="../Project6 - Hangman/hang6.png";
		}
		else if (strikes == 7) {
			document.getElementById("hanged").src="../Project6 - Hangman/hang7.png";
		}
	});
		
	$('#button').click(function(){
		location.reload();
	});
	
});