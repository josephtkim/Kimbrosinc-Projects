/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Credit to Laurence on Stackexchange for providing the guidelines for this to work
	function startDragging(e) {
		// determine event object
		if (!e) {
			var e = window.event;
		}
		if(e.preventDefault) e.preventDefault();

		// IE uses srcElement, others use target
		var target = e.target ? e.target : e.srcElement;

		if (target.className != 'draggable') {return};
		//calculate event X, Y coordinates
			offsetX = e.clientX;
			offsetY = e.clientY;

		// assign default values for top and left properties
		if (!target.style.left) { target.style.left='0'};
		if (!target.style.top) { target.style.top='0'};

		// calculate integer values for top and left 
		// properties
		coordX = parseInt(target.style.left);
		coordY = parseInt(target.style.top);
		dragging = true;

		// move div element
		document.onmousemove=dragDiv;
		return false;		
	}
	function dragDiv(e) {
		if (!dragging) {return};
		if (!e) { var e= window.event};
		var target=e.target?e.target:e.srcElement;
		// move div element
		target.style.left=coordX+e.clientX-offsetX+'px';
		target.style.top=coordY+e.clientY-offsetY+'px';
		return false;
	}
	function stopDragging() {
		dragging=false;
	}
	
	window.onload = function() {
		document.onmousedown = startDragging;
		document.onmouseup = stopDragging;
	}
	
	var $grid = $('#images');
	var link;
	
	// Check that the image url is valid
	function CheckImageUrl(url, link) {
		$("<img>", {
			src: url,
			error: function() { 
				alert(url + ' is not a valid url.');
			},
			load: function() { 
				$grid.append(link);
			}
		});
	}

	// Click the button to add the image from the url
	$('#addimage').click(function(){
		var url = prompt("Enter the image url, e.g. ../folder/image.png or http://www.website.com/image.png");
		var link = '<img src="' + url + '" class="draggable">';
		CheckImageUrl(url, link);

	});
})