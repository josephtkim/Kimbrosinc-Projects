$(document).ready(function(){
	var key;
	var message;
	
	function chartoa (character) {
		return character.charCodeAt(0);
	}
	
	function atochar (integer) {
		return String.fromCharCode(integer);
	}
	
	// encode the letter according to key letter
	function ashift (character, key) {
		var valuemessage = chartoa(character);
		var shift = chartoa(key);
		var shiftedletter;
		
		if (valuemessage >= 97 && valuemessage <= 122) {
			shiftedletter = atochar(97 + ((valuemessage - 97) + (shift - 96)) % 26);
		}
		else if (valuemessage >= 65 && valuemessage <= 90) {
			shiftedletter = atochar(65 + ((valuemessage - 65) + (shift - 96)) % 26);
		}			
		else {
			return character;
		}
		return shiftedletter;
	}
	
	// decode the letter based on the key letter
	function decode_ashift (character, key) {
		var valuemessage = chartoa(character);
		var shift = chartoa(key);
		var shiftedletter;
		
		if (valuemessage >= 97 && valuemessage <= 122) {
			shiftedletter = atochar(97 + (((valuemessage - 97) + (26 - (shift - 96))) % 26));
		}
		else if (valuemessage >= 65 && valuemessage <= 90) {
			shiftedletter = atochar(65 + (((valuemessage - 65) + (26 - (shift - 96))) % 26));
		}			
		else {
			return character;
		}
		return shiftedletter;
	}

	String.prototype.replaceAt=function(index, character) {
		return this.substr(0, index) + character + this.substr(index+character.length);
	}
	
	function encode(message, key){
		key = key.toLowerCase();
		var index;
		var keyindex = 0;
		var encoded_message = "";
		var letter;
		var keylength = key.length;
		
		for (index = 0; index < message.length; index++) {
			if ((chartoa(message[index]) >= 97 && chartoa(message[index]) <= 122) || (chartoa(message[index]) >= 65 && chartoa(message[index]) <= 90))
			{
				letter = ashift(message[index], key[(keyindex % keylength)]);
				keyindex += 1;
				encoded_message = encoded_message.replaceAt(index, letter);
			}
			else {
				encoded_message = encoded_message.replaceAt(index, message[index]);
			}
		};
		
		return encoded_message;
		alert("The message after encoding is: " + encoded_message);
	}
	
	function decode(message, key) {
		key = key.toLowerCase();
		var index;
		var keyindex = 0;
		var decoded_message = "";
		var letter;
		var keylength = key.length;
		
		for (index = 0; index < message.length; index++) {
			if ((chartoa(message[index]) >= 97 && chartoa(message[index]) <= 122) || (chartoa(message[index]) >= 65 && chartoa(message[index]) <= 90))
			{
				letter = decode_ashift(message[index], key[(keyindex % keylength)]);
				keyindex += 1;
				decoded_message = decoded_message.replaceAt(index, letter);
			}
			else {
				decoded_message = decoded_message.replaceAt(index, message[index]);
			}
		};
		return decoded_message;
		alert("The message after decoding is: " + decoded_message);
	}
	
	$('#encodebutton').click(function() {
		message = document.getElementsByName('messageto')[0].value;
		key = document.getElementsByName('keyencode')[0].value;
		
		var newmessage = encode(message, key);
		document.getElementsByName('Encodedmessage')[0].value = newmessage;
	});
	
	$('#decodebutton').click(function() {
		message = document.getElementsByName('messagefrom')[0].value;
		key = document.getElementsByName('keydecode')[0].value;
		
		var decodedmessage = decode(message, key);
		document.getElementsByName('Decodedmessage')[0].value = decodedmessage;
	});
	

})