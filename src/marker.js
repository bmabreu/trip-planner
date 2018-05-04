const mapboxgl = require('mapbox-gl');

function buildMarker(type, coordinates) {
    let imageUrl = '';
    
    if (type === 'restaurant') {
        imageUrl='http://i.imgur.com/cqR6pUI.png';
    }else if(type === 'hotel'){
        imageUrl='http://i.imgur.com/D9574Cu.png';
    }else if(type === 'activity'){
        imageUrl = 'http://i.imgur.com/WbMOfMl.png';
    }

    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url("${imageUrl}")`;

    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = buildMarker;

