/* By Joseph Kim, 2016 */

$(document).ready(function(){	
	// Accelerations due to Gravity values
	var Earth = 9.81;
	var Mercury = 3.59 / Earth;
	var Venus = 8.87 / Earth;
	var Earthratio = 9.81 / Earth;
	var Mars = 3.77 / Earth;
	var Jupiter = 25.95 / Earth;
	var Saturn = 11.08 / Earth;
	var Uranus = 10.67 / Earth;
	var Neptune = 14.07 / Earth;
	var Pluto = 0.42 / Earth;
	var Sun = 274.13 / Earth;
	var Moon = 1.62 / Earth;
 	
	// Arrays to hold important values
	var ratios = [Mercury, Venus, Earthratio, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Sun, Moon];
	var planet = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Sun", "Moon"];
	var accels = [3.59, 8.87, 9.81, 3.77, 25.95, 11.08, 10.67, 14.07, 0.42, 274.13, 1.62];
	var masses = [0.330, 4.87, 5.97, 0.642, 1898, 568, 86.8, 102, 0.0146, 1989000, 0.073];
	var diameters = [4879, 12104, 12756, 6792, 142984, 120536, 51118, 49528, 2370, 1392000, 3475];
	var hours = [1408, 5832, 24, 25, 10, 11, 17, 16, 153, "N/A", 656];
	var days = [87.97, 224.70, 365.26, 686.98, 4332.82, 10755.7, 30687.15, 60190.03, 90474.9, "N/A", "N/A"];

	// planet images
	var planet1 = "../Project21 - Gravity/mercury.png";
	var planet2 = "../Project21 - Gravity/venus.png";
	var planet3 = "../Project21 - Gravity/earth.png";
	var planet4 = "../Project21 - Gravity/mars.png";
	var planet5 = "../Project21 - Gravity/jupiter.png";
	var planet6 = "../Project21 - Gravity/saturn.png";
	var planet7 = "../Project21 - Gravity/uranus.png";
	var planet8= "../Project21 - Gravity/neptune.png";
	var planet9 = "../Project21 - Gravity/pluto.png";
	var planet10 = "../Project21 - Gravity/sun.png";
	var planet11 = "../Project21 - Gravity/moon.png";
	var images = [planet1, planet2, planet3, planet4, planet5, planet6, planet7, planet8, planet9, planet10, planet11];
	
	var currentpounds = 0;
	var currentkg = 0;
	var curbody = 2
	document.getElementById("Currentname").innerHTML = planet[curbody];
	
	document.getElementById("curplanet").src = images[curbody];
	
	var convertedkg;
	var convertedpounds;
	
	var acceleration = accels[2];
	document.getElementById('Earth_accel').value=acceleration;
	planethours = hours[curbody];
	document.getElementById('hours').value=planethours;
	planetdays = days[curbody];
	document.getElementById('days').value=planetdays;
	planetdiameter = diameters[curbody];
	document.getElementById('planet_diameter').value=planetdiameter;
	planetmass = masses[curbody];	
	document.getElementById('planet_weight').value=planetmass;
	
	var convertedaccel;
	var planetmass;
	var planetdiameter;
	var planethours;
	var planetdays;
	
	// Convert the values to the new heavenly body
	$("#convert").click(function(){
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;		
	})	
	
	// For each planetary body
	$("#Mercury").click(function(){
		curbody = 0;
		
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Venus").click(function(){
		curbody = 1;
		
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Earth").click(function(){
		curbody = 2;
		
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Mars").click(function(){
		curbody = 3;
		
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Jupiter").click(function(){
		curbody = 4;
		
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Saturn").click(function(){
		curbody = 5;
		
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Uranus").click(function(){
		curbody = 6;
		
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Neptune").click(function(){
		curbody = 7;
			
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;

		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Pluto").click(function(){
		curbody = 8;
			
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Sun").click(function(){
		curbody = 9;
			
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})
	$("#Moon").click(function(){
		curbody = 10;
			
		planetmass = masses[curbody];		
		convertedaccel = accels[curbody];
		planetdiameter = diameters[curbody];
		planetdays = days[curbody];
		document.getElementById('days').value=planetdays;
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('planet_weight').value=planetmass;
		document.getElementById('new_accel').value=convertedaccel;
		document.getElementById('planet_diameter').value=planetdiameter;
		
		planethours = hours[curbody];
		document.getElementById('hours').value=planethours;
		document.getElementById("curplanet").src = images[curbody];
		currentpounds = document.getElementById('inputweight').value;
		currentkg = currentpounds * 0.4536;
		convertedpounds = ratios[curbody] * currentpounds;
		convertedkg = convertedpounds * 0.4536;	
		
		document.getElementById("Currentname").innerHTML = planet[curbody];
		document.getElementById('earth_pounds').value=currentpounds;		
		document.getElementById('earth_kg').value=currentkg;					
		document.getElementById('new_kg').value=convertedkg;
		document.getElementById('new_pounds').value=convertedpounds;	
	})	
})