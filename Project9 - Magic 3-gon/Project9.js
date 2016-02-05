$(document).ready(function() {

	$('#checkbutton').click(function() {
		var value1 = document.getElementsByName('value1')[0].value;
		var value2 = document.getElementsByName('value2')[0].value;
		var value3 = document.getElementsByName('value3')[0].value;
		var value4 = document.getElementsByName('value4')[0].value;
		var value5 = document.getElementsByName('value5')[0].value;
		var value6 = document.getElementsByName('value6')[0].value;
		
		var sum1 = parseInt(value1) + parseInt(value2) + parseInt(value6);
		var sum2 = parseInt(value4) + parseInt(value3) + parseInt(value2);
		var sum3 = parseInt(value3) + parseInt(value1) + parseInt(value5);
		
		if (((value1 > 0 && value1 <= 6) && (value2 > 0 && value2 <= 6) && (value3 > 0 && value3 <= 6) && (value4 > 0 && value4 <= 6) && (value5 > 0 && value5 <= 6) && (value6 > 0 && value6 <= 6)) &&
			((value1 != value2 && value1 != value3 && value1 != value4 && value1 != value5 && value1 != value6) &&
			(value2 != value3 && value2 != value4 && value2 != value5 && value2 != value6)                     &&
			(value3 != value4 && value3 != value5 && value3 != value6) 										   &&
			(value4 != value5 && value4 != value6)															   &&
			(value5 != value6))	&&
			((sum1 == sum2) && (sum1 == sum3) && (sum2 == sum3))
			)
			{
				alert("SOLVED!");
			}
		else {			
			alert("Not quite. Try again.");
		}
	});
});