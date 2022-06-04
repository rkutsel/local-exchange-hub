const coord = document.querySelector("#map")
const lat = coord.dataset.lat
const lon = coord.dataset.lon
// lat lon coordinates from db fetch need to be passed in brackets in the setView
var map = L.map('map').setView([lat, lon], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// pass the same coordinates to create a marker or radius circle

// var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([lat, lon], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);