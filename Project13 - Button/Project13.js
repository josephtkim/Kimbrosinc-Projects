/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Initialize variables
	var count = 0;
	var message = " ";
	document.getElementById("counter").innerHTML = count;
	document.getElementById("message").innerHTML = message;
	
	// Display the message
	function messageshow(c) {
		var returnmessage;
		if (c >= 2000) {
			returnmessage = "Congratulations! You got the last message.";
		}
		else if (c === 1004) {
			returnmessage = "1004 in Korean also means angel.";
		}
		else if (c === 777) {
			returnmessage = "Jackpot!";
		}
		else if (c === 500) {
			returnmessage = "Either you have a fast clicker finger or a lot of patience.";
		}
		else if (c === 300) {
			returnmessage = "You are a Spartan!";
		}
		else if (c === 250) {
			returnmessage = "Don't expect some meaningful messsage to come up here.";
		}
		else if (c === 200) {
			returnmessage = "If 1 click = 1 dollar, this would be worth 2 Benjamins.";
		}
		else if (c === 100) {
			returnmessage = "You deserve an A+!";
		}
		else if (c === 50) {
			returnmessage = "If each click was worth a penny, you would have 50 cents."
		}
		else if (c === 42) {
			returnmessage = "You found the answer to life.";
		}
		else if (c === 5) {
			returnmessage = "Clicked 5 times";
		}
		else {
			returnmessage = " ";
		}
		return returnmessage;
	}
	
	// Every time you click the button
	$('#pressedbutton').click(function(){
		count += 1;		
		document.getElementById("counter").innerHTML = count;
		message = messageshow(count);
		document.getElementById("message").innerHTML = message;
	});
});