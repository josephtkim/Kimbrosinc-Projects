/* By Joseph Kim, 2016 */

$(document).ready(function() {
	// Set the image and message variables 
	var image1 = "../Project18 - Image Carousel/slide1.png";
	var image2 = "../Project18 - Image Carousel/slide2.png";
	var image3 = "../Project18 - Image Carousel/slide3.png";
	var image4 = "../Project18 - Image Carousel/slide4.png";
	var image5 = "../Project18 - Image Carousel/slide5.png";
	var images = [image1, image2, image3, image4, image5];
	
	var message1 = "The World Wide Web was invented by Tim-Berners Lee in 1989.";
	var message2 = "HyperText Markup Language was released 4 years later in 1993.";
	var message3 = "JavaScript was released in 1995, 2 years after HTML.";
	var message4 = "One year later, Cascading Style Sheets was released in 1996.";
	var message5 = "Finally, jQuery was released 10 years later in 2006.";
	messages = [message1, message2, message3, message4, message5];
	
	var current = 0;
	var currentImage = $('#picture');
	
	document.getElementById("picture").src = images[current];
	document.getElementById("message").innerHTML = messages[current];
	
	var time = 2000;
	var myVar;
	var autoswitch = 0;
		
	// Auto scroll through the slides
	$("#scroll-auto").click(function() {
		clearTimeout(myVar);
		if (autoswitch == 0) {
			myVar = setInterval(autoSlides, time);
			autoswitch = 1;
			$("#scroll-auto").html("stop");
		}
		else if (autoswitch == 1) {
			clearTimeout(myVar);
			autoswitch = 0;
			$("#scroll-auto").html("auto-play");
		}
	})
	
	function autoSlides() {
		if (current < 4) {
			currentImage.fadeOut(400, 
				function() {
					current += 1;
					document.getElementById("picture").src = images[current];
					document.getElementById("message").innerHTML = messages[current];
					currentImage.fadeIn(400);
				}
			);
		}
		else if (current == 4) {
			currentImage.fadeOut(400, 
				function() {
					current = 0;
					document.getElementById("picture").src = images[current];
					document.getElementById("message").innerHTML = messages[current];
					currentImage.fadeIn(400);
				}
			);
		}
	}
	
	// Manually scroll right 
	$("#scroll-right").click(function() {
		clearTimeout(myVar);
		if (current < 4) {
			currentImage.fadeOut(400, 
				function() {
					current += 1;
					document.getElementById("picture").src = images[current];
					document.getElementById("message").innerHTML = messages[current];
					currentImage.fadeIn(400);
				}
			);
		}
		else if (current == 4) {
			currentImage.fadeOut(400, 
				function() {
					current = 0;
					document.getElementById("picture").src = images[current];
					document.getElementById("message").innerHTML = messages[current];
					currentImage.fadeIn(400);
				}
			);
		}
	})
	
	// Manually scroll left
	$("#scroll-left").click(function() {
		clearTimeout(myVar);
		if (current > 0) {
			currentImage.fadeOut(400, 
				function() {
					current -= 1;
					document.getElementById("picture").src = images[current];
					document.getElementById("message").innerHTML = messages[current];
					currentImage.fadeIn(400);
				}
			);
		} else if (current == 0) {
			currentImage.fadeOut(400, 
				function() {
					current = 4;
					document.getElementById("picture").src = images[current];
					document.getElementById("message").innerHTML = messages[current];
					currentImage.fadeIn(400);
				}
			);
		}
	})
})