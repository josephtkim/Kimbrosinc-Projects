$(document).ready(function() {
	var bulbon = "../Project12 - Bulbs/bulbon.jpg";
	var bulboff = "../Project12 - Bulbs/bulboff.jpeg";
	
	document.getElementById("light1").src = bulboff;
	document.getElementById("light2").src = bulboff;
	document.getElementById("light3").src = bulboff;
	document.getElementById("light4").src = bulboff;
	document.getElementById("light5").src = bulboff;
	
	var bulb1val = 0;
	var bulb2val = 0;
	var bulb3val = 0;
	var bulb4val = 0;
	var bulb5val = 0;
		
	$('#switch1').click(function(){
		if (bulb1val === 0) {
			bulb1val = 1;
			document.getElementById("light1").src = bulbon;
			document.getElementById("switch1").value = "on";
		}
		else if (bulb1val === 1) {
			bulb1val = 0;
			document.getElementById("light1").src = bulboff;
			document.getElementById("switch1").value = "off";
		}
	});	
	$('#switch2').click(function(){
		if (bulb2val === 0) {
			bulb2val = 1;
			document.getElementById("light2").src = bulbon;
			document.getElementById("switch2").value = "on";			
		}
		else if (bulb2val === 1) {
			bulb2val = 0;
			document.getElementById("light2").src = bulboff;
			document.getElementById("switch2").value = "off";
		}
	});	
	$('#switch3').click(function(){
		if (bulb3val === 0) {
			bulb3val = 1;
			document.getElementById("light3").src = bulbon;
			document.getElementById("switch3").value = "on";
		}
		else if (bulb3val === 1) {
			bulb3val = 0;
			document.getElementById("light3").src = bulboff;
			document.getElementById("switch3").value = "off";
		}
	});	
	$('#switch4').click(function(){
		if (bulb4val === 0) {
			bulb4val = 1;
			document.getElementById("light4").src = bulbon;
			document.getElementById("switch4").value = "on";
		}
		else if (bulb4val === 1) {
			bulb4val = 0;
			document.getElementById("light4").src = bulboff;
			document.getElementById("switch4").value = "off";
		}
	});	
	$('#switch5').click(function(){
		if (bulb5val === 0) {
			bulb5val = 1;
			document.getElementById("light5").src = bulbon;
			document.getElementById("switch5").value = "on";
		}
		else if (bulb5val === 1) {
			bulb5val = 0;
			document.getElementById("light5").src = bulboff;
			document.getElementById("switch5").value = "off";
		}
	});

	$('#master').click(function(){
		if (bulb1val === 0) {
			bulb1val = 1;
			document.getElementById("light1").src = bulbon;
			document.getElementById("switch1").value = "on";			
		}
		else if (bulb1val === 1) {
			bulb1val = 0;
			document.getElementById("light1").src = bulboff;
			document.getElementById("switch1").value = "off";
		}
		if (bulb2val === 0) {
			bulb2val = 1;
			document.getElementById("light2").src = bulbon;
			document.getElementById("switch2").value = "on";
		}
		else if (bulb2val === 1) {
			bulb2val = 0;
			document.getElementById("light2").src = bulboff;
			document.getElementById("switch2").value = "off";		
		}
		if (bulb3val === 0) {
			bulb3val = 1;
			document.getElementById("light3").src = bulbon;
			document.getElementById("switch3").value = "on";			
		}
		else if (bulb3val === 1) {
			bulb3val = 0;
			document.getElementById("light3").src = bulboff;
			document.getElementById("switch3").value = "off";
		}
		if (bulb4val === 0) {
			bulb4val = 1;
			document.getElementById("light4").src = bulbon;
			document.getElementById("switch4").value = "on";
		}
		else if (bulb4val === 1) {
			bulb4val = 0;
			document.getElementById("light4").src = bulboff;
			document.getElementById("switch4").value = "off";
		}
		if (bulb5val === 0) {
			bulb5val = 1;
			document.getElementById("light5").src = bulbon;
			document.getElementById("switch5").value = "on";			
		}
		else if (bulb5val === 1) {
			bulb5val = 0;
			document.getElementById("light5").src = bulboff;
			document.getElementById("switch5").value = "off";
		}		
	});
});