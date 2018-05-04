const buildMarker = require("./marker");
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken='pk.eyJ1IjoiYm1hYnJldSIsImEiOiJjamdzM242MWEwajhqMzNwMTNrcWw1czVnIn0.cHzJfgT0ywQSIzcWbbkk_w';

const map = new mapboxgl.Map({
    container: "map",
    center:[-74.009,40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);

console.log('hello!')