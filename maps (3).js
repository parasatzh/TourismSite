function initMap() {
  // Map 1 - Statue of Liberty
  var map1 = new google.maps.Map(document.getElementById('map1'), {
    center: {lat: 40.6892, lng: -74.0445}, // Statue of Liberty coordinates
    zoom: 14 // Set the initial zoom level
  });

  var statueOfLibertyMarker = new google.maps.Marker({
    position: {lat: 40.6892, lng: -74.0445}, // Statue of Liberty coordinates
    map: map1,
    title: 'Statue of Liberty'
  });

  // Map 2 - Central Park
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {lat: 40.7829, lng: -73.9654}, // Central Park coordinates
    zoom: 13 // Set the initial zoom level
  });

  var centralParkMarker = new google.maps.Marker({
    position: {lat: 40.7829, lng: -73.9654}, // Central Park coordinates
    map: map2,
    title: 'Central Park'
  });

  // Map 3 - Times Square
  var map3 = new google.maps.Map(document.getElementById('map3'), {
    center: {lat: 40.7589, lng: -73.9851}, // Times Square coordinates
    zoom: 16 // Set the initial zoom level
  });

  var timesSquareMarker = new google.maps.Marker({
    position: {lat: 40.7589, lng: -73.9851}, // Times Square coordinates
    map: map3,
    title: 'Times Square'
  });

  // Map 4 - Brooklyn Bridge
  var map4 = new google.maps.Map(document.getElementById('map4'), {
    center: {lat: 40.7061, lng: -73.9969}, // Brooklyn Bridge coordinates
    zoom: 14 // Set the initial zoom level
  });

  var brooklynBridgeMarker = new google.maps.Marker({
    position: {lat: 40.7061, lng: -73.9969}, // Brooklyn Bridge coordinates
    map: map4,
    title: 'Brooklyn Bridge'
  });

  // Map 5 - Metropolitan Museum of Art
  var map5 = new google.maps.Map(document.getElementById('map5'), {
    center: {lat: 40.7794, lng: -73.9632}, // Metropolitan Museum of Art coordinates
    zoom: 16 // Set the initial zoom level
  });

  var metropolitanMuseumMarker = new google.maps.Marker({
    position: {lat: 40.7794, lng: -73.9632}, // Metropolitan Museum of Art coordinates
    map: map5,
    title: 'Metropolitan Museum of Art'
  });
}
