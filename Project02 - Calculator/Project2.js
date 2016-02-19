/* By Joseph Kim, 2016 */
$(document).ready(function(){
	// Initialize important variables
	var currentval = 0;
	var val1 = 0;
	var val2 = 0;
	var func = "";

	// Numerical buttons
	$('#one').click(function() {
		currentval = currentval*10 + 1;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#two').click(function() {
		currentval = currentval*10 + 2;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#three').click(function() {
		currentval = currentval*10 + 3;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#four').click(function() {
		currentval = currentval*10 + 4;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#five').click(function() {
		currentval = currentval*10 + 5;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#six').click(function() {
		currentval = currentval*10 + 6;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#seven').click(function() {
		currentval = currentval*10 + 7;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#eight').click(function() {
		currentval = currentval*10 + 8;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#nine').click(function() {
		currentval = currentval*10 + 9;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#zero').click(function() {
		currentval = currentval*10;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	
	// Function buttons
	$('#clear').click(function() {
		currentval = 0;
		val1 = 0;
		val2 = 0;
		answer = 0;
		func = "";
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#backspace').click(function() {
		currentval = (currentval - (currentval % 10)) / 10;
		document.getElementsByName('Calculation')[0].value=currentval;
	});
	$('#divide').click(function() {
		val1 = currentval;
		currentval = 0;
		val2 = 0;
		func = "divide";
		document.getElementsByName('Calculation')[0].value=0;
	});
	$('#multiply').click(function() {
		val1 = currentval;
		currentval = 0;
		val2 = 0;
		func = "multiply";
		document.getElementsByName('Calculation')[0].value=0;
	});
	$('#subtract').click(function() {
		val1 = currentval;
		currentval = 0;
		val2 = 0;
		func = "subtract";
		document.getElementsByName('Calculation')[0].value=0;
	});
	$('#add').click(function() {
		val1 = currentval;
		currentval = 0;
		val2 = 0;
		func = "add";
		document.getElementsByName('Calculation')[0].value=0;
	});
	
	// Determine the calculation value to show from the chosen function
	$('#equals').click(function() {
		switch(func) {
			case "add":
			val2 = currentval;
			var answer = val1 + val2;
			document.getElementsByName('Calculation')[0].value=answer;
			currentval = answer;
			val1 = currentval;
			val2 = 0;			
			break;
			
			case "subtract":
			val2 = currentval;
			var answer = val1 - val2;
			document.getElementsByName('Calculation')[0].value=answer;
			currentval = answer;
			val1 = currentval;
			val2 = 0;
			break;
			
			case "multiply":
			val2 = currentval;
			var answer = val1 * val2;
			document.getElementsByName('Calculation')[0].value=answer;
			currentval = answer;
			val1 = currentval;
			val2 = 0;
			break;
			
			case "divide":
			val2 = currentval;
			var answer = val1 / val2;
			document.getElementsByName('Calculation')[0].value=answer;
			currentval = answer;
			val1 = currentval;
			val2 = 0;
			break;
		}
	});
});