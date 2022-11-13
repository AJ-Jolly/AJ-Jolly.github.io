
mapboxgl.accessToken = 'pk.eyJ1IjoidmJyYWRidXJ5IiwiYSI6ImNpdzVhbmxqZDAwcTUydHA1bmlseDc0bmwifQ.T0O9MJcjkbr-65R6RdhDMg';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/ajjolly/cl334dosp001w15pdla8beje4', // style URL
center: [-82.555, 35.579], // starting position [lng, lat]
zoom: 10 // starting zoom
});


/*Create Data set 'Feature Collection' for pin information*/

var geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-82.5225, 35.5735]
            },
            'properties': {
                'id': 1,
                'title': '<h2>Andrews Target</h2>',
                'description': '<p>Come here for all of your purchasing needs.</p>',
                'iconSize': [40,40],
                'className': 'marker-target'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-82.5534, 35.5974]
            },
            'properties': {
                'id': 2,
                'title': '<h2>Mads Dobra Tea</h2>',
                'description': '<p>Mmmm...tea!<a href="link.html">link text</a><br><img width="100%" height="auto" src="images/db2.jpg"/></p>',
                'iconSize': [40,40],
                'className': 'marker-dobra'
            }
        }
        
    ]
}


// Add  markers to the map.
for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = '100%';
        /*This is how you add diferent style icons for different markers:*/
        el.className = marker.properties.className;

        // Add markers to the map.
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(marker.properties.title + marker.properties.description))
        .addTo(map);
}

/* Feature collection for titles for each marker */

map.on('load', () => {
    map.addSource('point-data', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-82.5225, 35.5735]
                    },
                    'properties': {
                        'title': 'Andrews Target'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-82.5534, 35.5974]
                    },
                    'properties': {
                        'title': 'Mads Dobra'
                    }
                }
                
            ]
        }
    })
    
    map.addLayer({
        'id': 'text-labels',
        'type': 'symbol',
        'source': 'point-data',
        'layout': {
            'text-field': [
                'format',
                ['get', 'title'],
                {
                    'font-scale': 1.5
                }
            ],
            'text-offset': [0, 0.5],
            'text-font': [
                'Open Sans Semibold'
            ],
            'text-anchor': 'top'
        }      
    });
   
});

map.scrollZoom.disable();

map.on('load', () => {
    map.addSource('downtownAVL', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [[
                            [-82.5519767,35.5852445],//1
                            [-82.5578787,35.5934149],//2
                            [-82.5211752,35.5661298],//3
                            [-80.879081,35.233585],//4
                            [-82.5615744,35.5947823],//5
                            [-82.5514869,35.5950581],//6
                            [-82.5564559,35.5927461],//7
                            [-82.604042,35.581884],//8
                            [-82.53799,35.5767162],//9
                            [-82.5714764,35.4535077],//10
                            [-82.5548546,35.5961409],//11
                            [-82.5881172,35.5785266],//12
                            [-82.5556557,35.594468],//13
                            [-82.5428183,35.565529]//14
                        ]]
                    },
                    'properties':{
                    },
                    'id': 1
                },
            ]}
        
    });
    
    // Add a layer to visualize the polygon
    map.addLayer({
        'id': 'downtownAVL',
        'type': 'fill',
        'source': 'downtownAVL',
        'layout': {},
        'paint': {
            'fill-color': '#17ff9e',
            'fill-opacity': ['case',
                ['boolean', ['feature-state', 'hover'], false],
                1,
                0.5
            ]
        }
    });
    
    map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'downtownAVL',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 2
        }
    });
    
    let hoveredStateId =  null;
    
    map.on('mousemove', 'downtownAVL', function(e) {
    
        if (e.features.length > 0) {
            //console.log(e);
            if (hoveredStateId) {
                //console.log('running');
                //console.log(e);
                map.setFeatureState({source: 'downtownAVL', id: hoveredStateId}, { hover: false});
            }
            
            hoveredStateId = e.features[0].id;
            
            map.setFeatureState({source: 'downtownAVL', id: hoveredStateId}, { hover: true});
        }
    });

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', 'downtownAVL', function() {
       
        if (hoveredStateId) {
            
            map.setFeatureState({source: 'downtownAVL', id: hoveredStateId}, { hover: false});
        }
        hoveredStateId =  null;
    });
    
    
    
});








