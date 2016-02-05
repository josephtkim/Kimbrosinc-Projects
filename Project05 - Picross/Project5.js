$(document).ready(function(){
	var count = 0;
	var gameover = 0;
	var wincount = 0;

	document.getElementsByName('one')[0].value=0;
	document.getElementsByName('two')[0].value=0;
	document.getElementsByName('three')[0].value=0;
	document.getElementsByName('four')[0].value=0;
	document.getElementsByName('five')[0].value=0;
	document.getElementsByName('six')[0].value=0;
	document.getElementsByName('eight')[0].value=0;
	document.getElementsByName('ten')[0].value=0;
	document.getElementsByName('eleven')[0].value=0;
	document.getElementsByName('twelve')[0].value=0;
	document.getElementsByName('thirteen')[0].value=0;
	document.getElementsByName('fourteen')[0].value=0;
	document.getElementsByName('fifteen')[0].value=0;
	document.getElementsByName('sixteen')[0].value=0;
	document.getElementsByName('eighteen')[0].value=0;
	document.getElementsByName('twenty')[0].value=0;
	document.getElementsByName('twenty-one')[0].value=0;
	document.getElementsByName('twenty-two')[0].value=0;
	document.getElementsByName('twenty-three')[0].value=0;
	document.getElementsByName('twenty-four')[0].value=0;
	document.getElementsByName('twenty-five')[0].value=0;
	
	$('.easysquare').click(function() {
		if (gameover == 0) {
			$(this).css("background-color", "#8c8c8c");	
		};
	});
	
	$('#one').click(function() {
		if(document.getElementsByName('one')[0].value=="0"){
			document.getElementsByName('one')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	
	$('#two').click(function() {
		if(document.getElementsByName('two')[0].value=="0"){
			document.getElementsByName('two')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#three').click(function() {
		if(document.getElementsByName('three')[0].value=="0"){
			document.getElementsByName('three')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#four').click(function() {
		if(document.getElementsByName('four')[0].value=="0"){
			document.getElementsByName('four')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#five').click(function() {
		if(document.getElementsByName('five')[0].value=="0"){
			document.getElementsByName('five')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#six').click(function() {
		if(document.getElementsByName('six')[0].value=="0"){
			document.getElementsByName('six')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#eight').click(function() {
		if(document.getElementsByName('eight')[0].value=="0"){
			document.getElementsByName('eight')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#ten').click(function() {
		if(document.getElementsByName('ten')[0].value=="0"){
			document.getElementsByName('ten')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#eleven').click(function() {
		if(document.getElementsByName('eleven')[0].value=="0"){
			document.getElementsByName('eleven')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#twelve').click(function() {
		if(document.getElementsByName('twelve')[0].value=="0"){
			document.getElementsByName('twelve')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#thirteen').click(function() {
		if(document.getElementsByName('thirteen')[0].value=="0"){
			document.getElementsByName('thirteen')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#fourteen').click(function() {
		if(document.getElementsByName('fourteen')[0].value=="0"){
			document.getElementsByName('fourteen')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#fifteen').click(function() {
		if(document.getElementsByName('fifteen')[0].value=="0"){
			document.getElementsByName('fifteen')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#sixteen').click(function() {
		if(document.getElementsByName('sixteen')[0].value=="0"){
			document.getElementsByName('sixteen')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#eighteen').click(function() {
		if(document.getElementsByName('eighteen')[0].value=="0"){
			document.getElementsByName('eighteen')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#twenty').click(function() {
		if(document.getElementsByName('twenty')[0].value=="0"){
			document.getElementsByName('twenty')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#twenty-one').click(function() {
		if(document.getElementsByName('twenty-one')[0].value=="0"){
			document.getElementsByName('twenty-one')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#twenty-two').click(function() {
		if(document.getElementsByName('twenty-two')[0].value=="0"){
			document.getElementsByName('twenty-two')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#twenty-three').click(function() {
		if(document.getElementsByName('twenty-three')[0].value=="0"){
			document.getElementsByName('twenty-three')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#twenty-four').click(function() {
		if(document.getElementsByName('twenty-four')[0].value=="0"){
			document.getElementsByName('twenty-four')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	$('#twenty-five').click(function() {
		if(document.getElementsByName('twenty-five')[0].value=="0"){
			document.getElementsByName('twenty-five')[0].value=1;
			wincount += 1;
		};
		if (wincount == 21 && gameover == 0) {
			alert("You win!");
			gameover = 1;
		};
	});
	
	$('.easysquarew').click(function() {
		if (gameover == 0) {
			$(this).css("background-color", "black");
			count += 1;
		};
		
		if (count == 3 && gameover == 0){
			alert("game over");
			gameover = 1;
		};
	});
	
	$('#button').click(function(){
		location.reload();
	});
  
});