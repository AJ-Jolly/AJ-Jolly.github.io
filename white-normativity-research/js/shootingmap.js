mapboxgl.accessToken = 'pk.eyJ1IjoiYWpqb2xseSIsImEiOiJja3RhNnAwZTUxamZxMnBucmplNDZsNmlnIn0.MwRtxEViwwDfQRVDHrRcWg';
const map2 = new mapboxgl.Map({
container: 'map2',
style: 'mapbox://styles/ajjolly/cl3nf2wqn001d14pbbsb57o7x',
center: [-96.731, 44.523],
zoom: 2.59
});


/*disable zoom*/
map2.scrollZoom.disable();

/*Navigation Controls*/
map2.addControl(new mapboxgl.NavigationControl());