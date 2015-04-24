/*
Following code to show markers on the map an object array
// Read the data from markers json object
for (var i = 0; i < markers.length; i++) {
  // obtain the attribues of each marker
  var lat = parseFloat(markers[i].lat);
  var lng = parseFloat(markers[i].lng);
  var point = new google.maps.LatLng(lat, lng);
  var html = markers[i].html;
  var label = markers[i].label;
  // create the marker
  var marker = createMarker(point, label, html);
  bounds.extend(point);
}

// Zoom and center the map to fit the markers
map.fitBounds(bounds);
*/
