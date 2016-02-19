/* By Joseph Kim, 2016 */

// Set some variables to be used 
var address1;
var address2;
var lat1;
var lng1;
var lat2;
var lng2;

var currentlat = 39.397;
var currentlong = -96.244;

// Compute the geographic midpoint given two coordinates and return the coordinates in latitude and longitude
var midPoint = function(lt1, ln1, lt2, ln2) {
	var coords = [0, 0]; 	
	var lon1 = ln1 * Math.PI / 180;
	var lon2 = ln2 * Math.PI / 180;	
	var lat1 = lt1 * Math.PI / 180;
	var lat2 = lt2 * Math.PI / 180;		
	var dLon = lon2 - lon1;
	var x = Math.cos(lat2) * Math.cos(dLon);
	var y = Math.cos(lat2) * Math.sin(dLon);	
	var lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + x) * (Math.cos(lat1) + x) + y * y));
	var lon3 = lon1 + Math.atan2(y, Math.cos(lat1) + x);	
	coords[0] = (lat3 * 180 / Math.PI);
	coords[1] = (lon3 * 180 / Math.PI);
		
	return coords;
}

// Initialize the map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom:4,
    center: {lat: currentlat, lng: currentlong}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
  
  // Find the midway coordinates
  document.getElementById('midway_submit').addEventListener('click', function() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom:4,
		center: {lat: currentlat, lng: currentlong}
	});
	 
	// Geocode address 1
    address1 = document.getElementById('address1').value;
	geocoder.geocode({'address': address1}, function(results1, status) {
		  lat1 = results1[0].geometry.location.lat();
		  lng1 = results1[0].geometry.location.lng();				
		  
		  document.getElementById('address1lat').value = lat1;
		  document.getElementById('address1lng').value = lng1;
		  
		  var marker1 = new google.maps.Marker({
			map: map,
			position: results1[0].geometry.location,
			label: "1"			
		  });		
	  });	 
	
	// Geocode address 2
	address2 = document.getElementById('address2').value;
	geocoder.geocode({'address': address2}, function(results2, status) {	 
		  lat2 = results2[0].geometry.location.lat();
		  lng2 = results2[0].geometry.location.lng();
		  document.getElementById('address2lat').value = lat2;
		  document.getElementById('address2lng').value = lng2;
		  
		  var marker2 = new google.maps.Marker({
			map: map,
			position: results2[0].geometry.location,
			label: "2"
		  });
	  });	 
  });
}

// Take in the input and make things work
$(document).ready(function() {
	$('#compute').click(function(){
		 var latitude1 = document.getElementById('address1lat').value;
		 var latitude2 = document.getElementById('address2lat').value;
		 
		 var longitude1 = document.getElementById('address1lng').value;
		 var longitude2 = document.getElementById('address2lng').value;
		 
		  var midpoint = midPoint(latitude1, longitude1, latitude2, longitude2);
	    
		  var map = new google.maps.Map(document.getElementById('map'), {

			center: {lat: midpoint[0], lng: midpoint[1]}
		  });
		  var geocoder = new google.maps.Geocoder();
		  var infowindow = new google.maps.InfoWindow;
		  
		  currentlat = midpoint[0];
		  currentlong = midpoint[1];
	
		  var latlng = {lat: midpoint[0], lng: midpoint[1]};
		  geocoder.geocode({'location': latlng}, function(results4, status) {			
				map.setZoom(4);
				var marker = new google.maps.Marker({
				  position: latlng,
				  label: "Middle",
				  map: map
				});
				infowindow.setContent(results4[1].formatted_address);
				infowindow.open(map, marker);
		  });				  					
	});
});