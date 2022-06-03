// lat lon coordinates from db fetch need to be passed in brackets in the setView
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// pass the same coordinates to create a marker or radius circle

// var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.5, -0.09], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

//  add a popup layer on user click
var popup = L.popup();

// popup image
var photoImg = '<img src="https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg" height="150px" width="150px"/>'

// function to perform on click
function onMapClick() {
    popup
    .setLatLng([51.5, -0.09])
    .setContent("<b>Item</b>: lorem </br><b>Category</b>: ipsum </br><b>Description</b>: lorem ipsum </br><b>Condition</b>: Like new" + "</br>"+ photoImg)
    .openOn(map); 
}

// event
map.on('click', onMapClick)
