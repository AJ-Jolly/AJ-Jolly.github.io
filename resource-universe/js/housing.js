mapboxgl.accessToken = 'pk.eyJ1IjoiYWpqb2xseSIsImEiOiJja3RhNnAwZTUxamZxMnBucmplNDZsNmlnIn0.MwRtxEViwwDfQRVDHrRcWg';
const map = new mapboxgl.Map({
container: 'map2',
style: 'mapbox://styles/ajjolly/cl8hq4vx1003c14mxv2mgj74t',
center: [-82.545, 35.577],
zoom: 10.43
});

/*Disable Zoom*/
map.scrollZoom.disable();

/*Navigation Controls*/
map.addControl(new mapboxgl.NavigationControl());

/*Dataset for pin info*/
var geojson = 
    {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5722277
,35.6109043]
    },
    "properties": {
    "Number":1,
    "Name":"The Verge Apartments",
    "Description":"0.5 miles from campus",
    "Color": "yellow"
    }
  },
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5631554
,35.6214502]
    },
    "properties": {
    "Number":2,
    "Name":"Affordable Student Living",
    "Description":"0.9 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5571656
,35.6285596]
    },
    "properties": {
    "Number":3,
    "Name":"Lakeshore Garden Apartments",
    "Description":"1.5 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5475635
,35.6089815]
    },
    "properties": {
    "Number":4,
    "Name":"Manor Inn Apartments",
    "Description":"1.5 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.546529
,35.6130075]
    },
    "properties": {
    "Number":5,
    "Name":"Grove Park Apartments",
    "Description":"1.8 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5540174
,35.6268143]
    },
    "properties": {
    "Number":6,
    "Name":"Gracelyn Garden Apartments",
    "Description":"1.5 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5611026
,35.5960905]
    },
    "properties": {
    "Number":7,
    "Name":"Carolina Apartments",
    "Description":"1.8 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5787079
,35.6352]
    },
    "properties": {
    "Number":8,
    "Name":"Manor Ridge Apartments",
    "Description":"3.2 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5428389
,35.572477]
    },
    "properties": {
    "Number":9,
    "Name":"Kenilworth Inn",
    "Description":"3.9 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.528023
,35.6073604]
    },
    "properties": {
    "Number":10,
    "Name":"Willow Ridge",
    "Description":"4.7 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5828955
,35.6607691]
    },
    "properties": {
    "Number":11,
    "Name":"Four Way Management",
    "Description":"4.7 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.6226332
,35.6031069]
    },
    "properties": {
    "Number":12,
    "Name":"Westmont Commons",
    "Description":"4.8 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5835925
,35.6703822]
    },
    "properties": {
    "Number":13,
    "Name":"Hawthorne at the Peak",
    "Description":"5.4 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5052409
,35.5923509]
    },
    "properties": {
    "Number":14,
    "Name":"Haw Creek Mews",
    "Description":"5.4 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.6117075
,35.5962042]
    },
    "properties": {
    "Number":15,
    "Name":"The Meadows Apartments",
    "Description":"5.8 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.6126587
,35.5718406]
    },
    "properties": {
    "Number":16,
    "Name":"Bear Creek Apartments",
    "Description":"5.8 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.4899532
,35.590406]
    },
    "properties": {
    "Number":17,
    "Name":"Parkway Crossing Apartments",
    "Description":"6 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.632659
,35.5809622]
    },
    "properties": {
    "Number":18,
    "Name":"Canteberi Place",
    "Description":"6.5 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5799597
,35.6857847]
    },
    "properties": {
    "Number":19,
    "Name":"Homestead Apartments",
    "Description":"6.9 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5295238
,35.5283276]
    },
    "properties": {
    "Number":20,
    "Name":"Ascot Point Village",
    "Description":"7.2 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5237319
,35.5100622]
    },
    "properties": {
    "Number":21,
    "Name":"Carson’s Creek Apartments",
    "Description":"8.5 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5245564
,35.5073272]
    },
    "properties": {
    "Number":22,
    "Name":"Hawthorne at Southside",
    "Description":"8.7 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.6537541
,35.6165789]
    },
    "properties": {
    "Number":23,
    "Name":"Springs at Asheville Apartments",
    "Description":"8.75 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5301395
,35.5085096]
    },
    "properties": {
    "Number":24,
    "Name":"Weirbridge Village Apartment",
    "Description":"9.2 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5311513
,35.4857836]
    },
    "properties": {
    "Number":25,
    "Name":"Skyland Heights Apartments",
    "Description":"10.4 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5437166
,35.4533604]
    },
    "properties": {
    "Number":26,
    "Name":"Audubon Place Apartments",
    "Description":"17.5 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5578366
,35.6177955]
    },
    "properties": {
    "Number":27,
    "Name":"Hawthorne Northside",
    "Description":"0.5 miles from campus",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5631554
,35.6214502]
    },
    "properties": {
    "Number":28,
    "Name":"Sevier Street Apartments & University Place Apartments",
    "Description":"0.6 miles from campus",
    "Color": "yellow"
    }
  },

]
}

//adding markers
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
    
  new mapboxgl.Marker(el)//where markers are created
    
  .setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 15  }) // add popups
      .setHTML(
        `<h2>${feature.properties.Name}</h2><p>${feature.properties.Description}</p>`
      )
  )
  .addTo(map);

}
