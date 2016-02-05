$(document).ready(function() {
	
	var board = [[0,0,0],[0,0,0],[0,0,0]];
	var turn = 0;
	var p1 = 1;
	var p2 = 2;
	
	var mark1 = "X";
	var mark2 = "O";
	
	var gameover = 0;

if (gameover == 0) {
	$('#one').click(function(){
		if (document.getElementsByName('one')[0].value == " " && gameover == 0) {
			if (turn % 2 == 0) {
				board[0][0] = p1;
				document.getElementsByName('one')[0].value=mark2;
			}
			else {
				board[0][0] = p2;
				document.getElementsByName('one')[0].value=mark1;
			};			
			turn += 1;
		};
		if (((board[0][0] == p2 && board[0][1] == p2 && board[0][2] == p2) || 
			(board[1][0] == p2 && board[1][1] == p2 && board[1][2] == p2) || 
			(board[2][0] == p2 && board[2][1] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][0] == p2 && board[2][0] == p2) || 
			(board[0][1] == p2 && board[1][1] == p2 && board[2][1] == p2) || 
			(board[0][2] == p2 && board[1][2] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][1] == p2 && board[2][2] == p2) ||
			(board[0][2] == p2 && board[1][1] == p2 && board[2][0] == p2)) && gameover == 0)
			{
			$('h2').append("Player 2 wins!");
			gameover = 1;
		}
		else if (((board[0][0] == p1 && board[0][1] == p1 && board[0][2] == p1) || 
				(board[1][0] == p1 && board[1][1] == p1 && board[1][2] == p1) || 
				(board[2][0] == p1 && board[2][1] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][0] == p1 && board[2][0] == p1) || 
				(board[0][1] == p1 && board[1][1] == p1 && board[2][1] == p1) || 
				(board[0][2] == p1 && board[1][2] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][1] == p1 && board[2][2] == p1) ||
				(board[0][2] == p1 && board[1][1] == p1 && board[2][0] == p1)) && gameover == 0)
			{
			$('h2').append("Player 1 wins!");
			gameover = 1;
		};
		if (gameover == 0 && turn == 9) {
			$('h2').append("Tie!");
			gameover = 1;
		};
	});
	
	$('#two').click(function(){
		if (document.getElementsByName('two')[0].value == " " && gameover == 0) {
			if (turn % 2 == 0) {
				board[0][1] = p1;
				document.getElementsByName('two')[0].value=mark2;
			}
			else {
				board[0][1] = p2;
				document.getElementsByName('two')[0].value=mark1;
			};			
			turn += 1;
		};
		if (((board[0][0] == p2 && board[0][1] == p2 && board[0][2] == p2) || 
			(board[1][0] == p2 && board[1][1] == p2 && board[1][2] == p2) || 
			(board[2][0] == p2 && board[2][1] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][0] == p2 && board[2][0] == p2) || 
			(board[0][1] == p2 && board[1][1] == p2 && board[2][1] == p2) || 
			(board[0][2] == p2 && board[1][2] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][1] == p2 && board[2][2] == p2) ||
			(board[0][2] == p2 && board[1][1] == p2 && board[2][0] == p2)) && gameover == 0)
			{
			$('h2').append("Player 2 wins!");
			gameover = 1;
		}
		else if (((board[0][0] == p1 && board[0][1] == p1 && board[0][2] == p1) || 
				(board[1][0] == p1 && board[1][1] == p1 && board[1][2] == p1) || 
				(board[2][0] == p1 && board[2][1] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][0] == p1 && board[2][0] == p1) || 
				(board[0][1] == p1 && board[1][1] == p1 && board[2][1] == p1) || 
				(board[0][2] == p1 && board[1][2] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][1] == p1 && board[2][2] == p1) ||
				(board[0][2] == p1 && board[1][1] == p1 && board[2][0] == p1)) && gameover == 0)
			{
			$('h2').append("Player 1 wins!");
			gameover = 1;
		};
		if (gameover == 0 && turn == 9) {
			$('h2').append("Tie!");
			gameover = 1;
		};
	});
	
	$('#three').click(function(){
		if (document.getElementsByName('three')[0].value == " " && gameover == 0) {
			if (turn % 2 == 0) {
				board[0][2] = p1;
				document.getElementsByName('three')[0].value=mark2;
			}
			else {
				board[0][2] = p2;
				document.getElementsByName('three')[0].value=mark1;
			};			
			turn += 1;
		};
		if (((board[0][0] == p2 && board[0][1] == p2 && board[0][2] == p2) || 
			(board[1][0] == p2 && board[1][1] == p2 && board[1][2] == p2) || 
			(board[2][0] == p2 && board[2][1] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][0] == p2 && board[2][0] == p2) || 
			(board[0][1] == p2 && board[1][1] == p2 && board[2][1] == p2) || 
			(board[0][2] == p2 && board[1][2] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][1] == p2 && board[2][2] == p2) ||
			(board[0][2] == p2 && board[1][1] == p2 && board[2][0] == p2)) && gameover == 0)
			{
			$('h2').append("Player 2 wins!");
			gameover = 1;
		}
		else if (((board[0][0] == p1 && board[0][1] == p1 && board[0][2] == p1) || 
				(board[1][0] == p1 && board[1][1] == p1 && board[1][2] == p1) || 
				(board[2][0] == p1 && board[2][1] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][0] == p1 && board[2][0] == p1) || 
				(board[0][1] == p1 && board[1][1] == p1 && board[2][1] == p1) || 
				(board[0][2] == p1 && board[1][2] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][1] == p1 && board[2][2] == p1) ||
				(board[0][2] == p1 && board[1][1] == p1 && board[2][0] == p1)) && gameover == 0)
			{
			$('h2').append("Player 1 wins!");
			gameover = 1;
		};
		if (gameover == 0 && turn == 9) {
			$('h2').append("Tie!");
			gameover = 1;
		};
	});
	
	$('#four').click(function(){
		if (document.getElementsByName('four')[0].value == " " && gameover == 0) {
			if (turn % 2 == 0) {
				board[1][0] = p1;
				document.getElementsByName('four')[0].value=mark2;
			}
			else {
				board[1][0] = p2;
				document.getElementsByName('four')[0].value=mark1;
			};			
			turn += 1;
		};
		if (((board[0][0] == p2 && board[0][1] == p2 && board[0][2] == p2) || 
			(board[1][0] == p2 && board[1][1] == p2 && board[1][2] == p2) || 
			(board[2][0] == p2 && board[2][1] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][0] == p2 && board[2][0] == p2) || 
			(board[0][1] == p2 && board[1][1] == p2 && board[2][1] == p2) || 
			(board[0][2] == p2 && board[1][2] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][1] == p2 && board[2][2] == p2) ||
			(board[0][2] == p2 && board[1][1] == p2 && board[2][0] == p2)) && gameover == 0)
			{
			$('h2').append("Player 2 wins!");
			gameover = 1;
		}
		else if (((board[0][0] == p1 && board[0][1] == p1 && board[0][2] == p1) || 
				(board[1][0] == p1 && board[1][1] == p1 && board[1][2] == p1) || 
				(board[2][0] == p1 && board[2][1] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][0] == p1 && board[2][0] == p1) || 
				(board[0][1] == p1 && board[1][1] == p1 && board[2][1] == p1) || 
				(board[0][2] == p1 && board[1][2] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][1] == p1 && board[2][2] == p1) ||
				(board[0][2] == p1 && board[1][1] == p1 && board[2][0] == p1)) && gameover == 0)
			{
			$('h2').append("Player 1 wins!");
			gameover = 1;
		};
		if (gameover == 0 && turn == 9) {
			$('h2').append("Tie!");
			gameover = 1;
		};
	});
	
	$('#five').click(function(){
		if (document.getElementsByName('five')[0].value == " " && gameover == 0) {
			if (turn % 2 == 0) {
				board[1][1] = p1;
				document.getElementsByName('five')[0].value=mark2;
			}
			else {
				board[1][1] = p2;
				document.getElementsByName('five')[0].value=mark1;
			};			
			turn += 1;
		};
		if (((board[0][0] == p2 && board[0][1] == p2 && board[0][2] == p2) || 
			(board[1][0] == p2 && board[1][1] == p2 && board[1][2] == p2) || 
			(board[2][0] == p2 && board[2][1] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][0] == p2 && board[2][0] == p2) || 
			(board[0][1] == p2 && board[1][1] == p2 && board[2][1] == p2) || 
			(board[0][2] == p2 && board[1][2] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][1] == p2 && board[2][2] == p2) ||
			(board[0][2] == p2 && board[1][1] == p2 && board[2][0] == p2)) && gameover == 0)
			{
			$('h2').append("Player 2 wins!");
			gameover = 1;
		}
		else if (((board[0][0] == p1 && board[0][1] == p1 && board[0][2] == p1) || 
				(board[1][0] == p1 && board[1][1] == p1 && board[1][2] == p1) || 
				(board[2][0] == p1 && board[2][1] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][0] == p1 && board[2][0] == p1) || 
				(board[0][1] == p1 && board[1][1] == p1 && board[2][1] == p1) || 
				(board[0][2] == p1 && board[1][2] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][1] == p1 && board[2][2] == p1) ||
				(board[0][2] == p1 && board[1][1] == p1 && board[2][0] == p1)) && gameover == 0)
			{
			$('h2').append("Player 1 wins!");
			gameover = 1;
		};
		if (gameover == 0 && turn == 9) {
			$('h2').append("Tie!");
			gameover = 1;
		};
	});
	
	$('#six').click(function(){
		if (document.getElementsByName('six')[0].value == " " && gameover == 0) {
			if (turn % 2 == 0) {
				board[1][2] = p1;
				document.getElementsByName('six')[0].value=mark2;
			}
			else {
				board[1][2] = p2;
				document.getElementsByName('six')[0].value=mark1;
			};			
			turn += 1;
		};
		if (((board[0][0] == p2 && board[0][1] == p2 && board[0][2] == p2) || 
			(board[1][0] == p2 && board[1][1] == p2 && board[1][2] == p2) || 
			(board[2][0] == p2 && board[2][1] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][0] == p2 && board[2][0] == p2) || 
			(board[0][1] == p2 && board[1][1] == p2 && board[2][1] == p2) || 
			(board[0][2] == p2 && board[1][2] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][1] == p2 && board[2][2] == p2) ||
			(board[0][2] == p2 && board[1][1] == p2 && board[2][0] == p2)) && gameover == 0)
			{
			$('h2').append("Player 2 wins!");
			gameover = 1;
		}
		else if (((board[0][0] == p1 && board[0][1] == p1 && board[0][2] == p1) || 
				(board[1][0] == p1 && board[1][1] == p1 && board[1][2] == p1) || 
				(board[2][0] == p1 && board[2][1] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][0] == p1 && board[2][0] == p1) || 
				(board[0][1] == p1 && board[1][1] == p1 && board[2][1] == p1) || 
				(board[0][2] == p1 && board[1][2] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][1] == p1 && board[2][2] == p1) ||
				(board[0][2] == p1 && board[1][1] == p1 && board[2][0] == p1)) && gameover == 0)
			{
			$('h2').append("Player 1 wins!");
			gameover = 1;
		};
		if (gameover == 0 && turn == 9) {
			$('h2').append("Tie!");
			gameover = 1;
		};
	});
	
	$('#seven').click(function(){
		if (document.getElementsByName('seven')[0].value == " " && gameover == 0) {
			if (turn % 2 == 0) {
				board[2][0] = p1;
				document.getElementsByName('seven')[0].value=mark2;
			}
			else {
				board[2][0] = p2;
				document.getElementsByName('seven')[0].value=mark1;
			};			
			turn += 1;
		};
		if (((board[0][0] == p2 && board[0][1] == p2 && board[0][2] == p2) || 
			(board[1][0] == p2 && board[1][1] == p2 && board[1][2] == p2) || 
			(board[2][0] == p2 && board[2][1] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][0] == p2 && board[2][0] == p2) || 
			(board[0][1] == p2 && board[1][1] == p2 && board[2][1] == p2) || 
			(board[0][2] == p2 && board[1][2] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][1] == p2 && board[2][2] == p2) ||
			(board[0][2] == p2 && board[1][1] == p2 && board[2][0] == p2)) && gameover == 0)
			{
			$('h2').append("Player 2 wins!");
			gameover = 1;
		}
		else if (((board[0][0] == p1 && board[0][1] == p1 && board[0][2] == p1) || 
				(board[1][0] == p1 && board[1][1] == p1 && board[1][2] == p1) || 
				(board[2][0] == p1 && board[2][1] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][0] == p1 && board[2][0] == p1) || 
				(board[0][1] == p1 && board[1][1] == p1 && board[2][1] == p1) || 
				(board[0][2] == p1 && board[1][2] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][1] == p1 && board[2][2] == p1) ||
				(board[0][2] == p1 && board[1][1] == p1 && board[2][0] == p1)) && gameover == 0)
			{
			$('h2').append("Player 1 wins!");
			gameover = 1;
		};
		if (gameover == 0 && turn == 9) {
			$('h2').append("Tie!");
			gameover = 1;
		};
	});
	
	$('#eight').click(function(){
		if (document.getElementsByName('eight')[0].value == " " && gameover == 0) {
			if (turn % 2 == 0) {
				board[2][1] = p1;
				document.getElementsByName('eight')[0].value=mark2;
			}
			else {
				board[2][1] = p2;
				document.getElementsByName('eight')[0].value=mark1;
			};			
			turn += 1;
		};
		if (((board[0][0] == p2 && board[0][1] == p2 && board[0][2] == p2) || 
			(board[1][0] == p2 && board[1][1] == p2 && board[1][2] == p2) || 
			(board[2][0] == p2 && board[2][1] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][0] == p2 && board[2][0] == p2) || 
			(board[0][1] == p2 && board[1][1] == p2 && board[2][1] == p2) || 
			(board[0][2] == p2 && board[1][2] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][1] == p2 && board[2][2] == p2) ||
			(board[0][2] == p2 && board[1][1] == p2 && board[2][0] == p2)) && gameover == 0)
			{
			$('h2').append("Player 2 wins!");
			gameover = 1;
		}
		else if (((board[0][0] == p1 && board[0][1] == p1 && board[0][2] == p1) || 
				(board[1][0] == p1 && board[1][1] == p1 && board[1][2] == p1) || 
				(board[2][0] == p1 && board[2][1] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][0] == p1 && board[2][0] == p1) || 
				(board[0][1] == p1 && board[1][1] == p1 && board[2][1] == p1) || 
				(board[0][2] == p1 && board[1][2] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][1] == p1 && board[2][2] == p1) ||
				(board[0][2] == p1 && board[1][1] == p1 && board[2][0] == p1)) && gameover == 0)
			{
			$('h2').append("Player 1 wins!");
			gameover = 1;
		};
		if (gameover == 0 && turn == 9) {
			$('h2').append("Tie!");
			gameover = 1;
		};
	});
	
	$('#nine').click(function(){
		if (document.getElementsByName('nine')[0].value == " " && gameover == 0) {
			if (turn % 2 == 0) {
				board[2][2] = p1;
				document.getElementsByName('nine')[0].value=mark2;
			}
			else {
				board[2][2] = p2;
				document.getElementsByName('nine')[0].value=mark1;
			};			
			turn += 1;
		};
		if (((board[0][0] == p2 && board[0][1] == p2 && board[0][2] == p2) || 
			(board[1][0] == p2 && board[1][1] == p2 && board[1][2] == p2) || 
			(board[2][0] == p2 && board[2][1] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][0] == p2 && board[2][0] == p2) || 
			(board[0][1] == p2 && board[1][1] == p2 && board[2][1] == p2) || 
			(board[0][2] == p2 && board[1][2] == p2 && board[2][2] == p2) || 
			(board[0][0] == p2 && board[1][1] == p2 && board[2][2] == p2) ||
			(board[0][2] == p2 && board[1][1] == p2 && board[2][0] == p2)) && gameover == 0)
			{
			$('h2').append("Player 2 wins!");
			gameover = 1;
		}
		else if (((board[0][0] == p1 && board[0][1] == p1 && board[0][2] == p1) || 
				(board[1][0] == p1 && board[1][1] == p1 && board[1][2] == p1) || 
				(board[2][0] == p1 && board[2][1] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][0] == p1 && board[2][0] == p1) || 
				(board[0][1] == p1 && board[1][1] == p1 && board[2][1] == p1) || 
				(board[0][2] == p1 && board[1][2] == p1 && board[2][2] == p1) || 
				(board[0][0] == p1 && board[1][1] == p1 && board[2][2] == p1) ||
				(board[0][2] == p1 && board[1][1] == p1 && board[2][0] == p1)) && gameover == 0)
			{
			$('h2').append("Player 1 wins!");
			gameover = 1;
		};
		if (gameover == 0 && turn == 9) {
			$('h2').append("Tie!");
			gameover = 1;
		};
	});
};
	
	
	$('#button').click(function(){
		location.reload();
	});
	
});