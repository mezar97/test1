mapboxgl.accessToken = 'pk.eyJ1IjoibWV6YXIiLCJhIjoiY2pnZzh5amMyNDVidjJ3bGlveGEyeDZxaSJ9.eV1srEZNonNXeljsG18mww';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/basic-v9',
    zoom: 15,
    center: [12.698502, 56.038184]
});

var layerList = document.getElementById('menu');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
};
