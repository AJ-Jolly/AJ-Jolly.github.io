mapboxgl.accessToken = 'pk.eyJ1IjoiYWpqb2xseSIsImEiOiJja3RhNnAwZTUxamZxMnBucmplNDZsNmlnIn0.MwRtxEViwwDfQRVDHrRcWg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/ajjolly/cl3ll8nln000m14pmpzip3mjl',
center: [-97.312, 39.984],
zoom: 3.71
});



/*Disable Zoom*/
map.scrollZoom.disable();

/*Navigation Controls*/
map.addControl(new mapboxgl.NavigationControl());