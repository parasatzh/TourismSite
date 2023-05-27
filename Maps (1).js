function initMap() {
  // Map 1 - Sognefjord
  var map1 = new google.maps.Map(document.getElementById('map1'), {
    center: {lat: 61.103, lng: 6.624}, // Sognefjord coordinates
    zoom: 10 // Set the initial zoom level
  });

  var sognefjordMarker = new google.maps.Marker({
    position: {lat: 61.103, lng: 6.624}, // Sognefjord coordinates
    map: map1,
    title: 'Sognefjord'
  });

  // Map 2 - Pulpit Rock
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {lat: 58.987, lng: 6.189}, // Pulpit Rock coordinates
    zoom: 12 // Set the initial zoom level
  });

  var pulpitRockMarker = new google.maps.Marker({
    position: {lat: 58.987, lng: 6.189}, // Pulpit Rock coordinates
    map: map2,
    title: 'Pulpit Rock'
  });

  // Map 3 - Tromsø
  var map3 = new google.maps.Map(document.getElementById('map3'), {
    center: {lat: 69.6496, lng: 18.956}, // Tromsø coordinates
    zoom: 13 // Set the initial zoom level
  });

  var tromsoMarker = new google.maps.Marker({
    position: {lat: 69.6496, lng: 18.956}, // Tromsø coordinates
    map: map3,
    title: 'Tromsø'
  });

  // Map 4 - Lofoten Islands
  var map4 = new google.maps.Map(document.getElementById('map4'), {
    center: {lat: 68.153, lng: 13.609}, // Lofoten Islands coordinates
       zoom: 12 // Set the initial zoom level
  });

  var lofotenIslandsMarker = new google.maps.Marker({
    position: {lat: 68.153, lng: 13.609}, // Lofoten Islands coordinates
    map: map4,
    title: 'Lofoten Islands'
  });

  // Map 5 - Akershus Fortress
  var map5 = new google.maps.Map(document.getElementById('map5'), {
    center: {lat: 59.907, lng: 10.737}, // Akershus Fortress coordinates
    zoom: 15 // Set the initial zoom level
  });

  var akershusFortressMarker = new google.maps.Marker({
    position: {lat: 59.907, lng: 10.737}, // Akershus Fortress coordinates
    map: map5,
    title: 'Akershus Fortress'
  });
}

