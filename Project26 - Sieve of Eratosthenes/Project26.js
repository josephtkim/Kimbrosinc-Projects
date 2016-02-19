$(document).ready(function(){
	var cols;
	var rows;
	var count = 1;
	var primes = [];
	var upperbound;
	
	document.getElementById('new').value = "0";
	
	// Prime checker
	function isprime(n) {
		if (n === 1) {
			return 2;
		}
		if (n === 2) {
			return 1;
		}
		
		var root = Math.sqrt(n);
		for (var i = 2; i <= root; i++) {
			if (n % i === 0) {
				return 0;
			}			
		}
		return 1;
	}

	// Generate all the numbers!
	function generatefield(upperbound){
		count = 1;
		cols = 15;
		rows = Math.ceil(upperbound / cols);
		
		// set the values to create field
		var width = cols * 45;
		var height = rows * 45 + 40;
		
		document.getElementById("sievecontainer").style.height = String(height) + "px";	
		document.getElementById("sievecontainer").style.width = String(width) + "px";	

		var $grid = $('#field');
		cols = cols;
		rows = rows;
		
		$grid = $('#field');
		
		// Remaining flags, smiley, timer
	
	
		for(var i = 1; i <= rows; i++)	
		{
			var row = '<div>';
			for(var j = 1; j <= cols; j++)
			{	
					if (isprime(count) === 0 && count <= upperbound) {
						row += '<a class="square" style="background-color: #ffffe6"><h2 class="number">'+count+'</h2></a>';						
					}
					else if (isprime(count) === 1 && count <= upperbound) {
						row += '<a class="square" style="background-color: red; font-weight: bold"><h2 class="number">'+count+'</h2></a>';
						primes.push(count);
					}
					else {
						row += '<a class="square" style="background-color: white" ></a>';
					}
					
					count += 1;
			}
			row += '</div>';
			
			$grid.append(row);
		}	
		document.getElementById('result').value = primes;
		document.getElementById('title').innerHTML = "All primes up to " + String(upperbound) + ':';
	}

	
	$('#new').click(function(){
		if (document.getElementById('new').value === "1") {
			location.reload();
		}
		else if (document.getElementById('new').value === "0") {
			var upperbound = document.getElementById('generate').value;
			if (upperbound > 1) {
				generatefield(upperbound);
				document.getElementById('new').value = "1";
				document.getElementById('new').innerHTML = "New Sieve";
				document.getElementById('generate').style.visibility = "hidden";
				document.getElementById('text').style.visibility = "hidden";
				document.getElementById('result').style.visibility = "visible";
				document.getElementById('title').style.visibility = "visible";
			}
		}
	})
	
	
	
})