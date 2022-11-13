const mapDowntown = new mapboxgl.Map({
container: 'mapDowntown', // container ID
style: 'mapbox://styles/ajjolly/cl334dosp001w15pdla8beje4', // style URL
center: [-82.555, 35.592], // starting position [lng, lat]
zoom: 14.57 // starting zoom
});




/*Create Data set 'Feature Collection' for pin information*/

var geojson = 
    {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5519767,35.5852445 ]
    },
    "properties": {
    "Number":1,
    "Name":"Western North Carolina Community Heath Services",
    "Description":"...it was really great to be able to go somewhere and actually get hormones, et cetera, and get them efficiently and quickly and without a ton of questions asked.",
    "Neighborhood":"Clara Tracy",
    "Image": "images/wncchs.jpg",
    "Color": "red"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5578787,35.5934149 ]
    },
    "properties": {
    "Number":2,
    "Name":"Scandals Nightclub",
    "Description":"...'scandalous' if you had been there and you weren't part of the LGBT community...",
    "Neighborhood":"Michael Harney",
    "Image": "images/scandals.jpg",
    "Color": "red"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5211752,35.5661298 ]
    },
    "properties": {
    "Number":3,
    "Name":"The Western North Carolina AIDS Project",
    "Description":"...I guess what I always hope is that we can find a way to reduce stigma and discrimination, to realize that we really are just all sharing this space and place called earth for a very short time, that we have more similarities than we have differences...",
    "Neighborhood":"Michael Harney",
    "Image": "images/wncap.png",
    "Color": "red"
    }
  },
  {
    "type": "Feature",//Keep this???
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.879081,35.233585 ]
    },
    "properties": {
    "Number":4,
    "Name":"The Scorpio",
    "Description":"I went and I danced with this guy named Reggie Ealy ... and we became partners for a couple of years after that.",
    "Neighborhood":"Michael Harney",
    "Image": "images/weaver-park.jpg",
    "Color": "red"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5615744,35.5947823 ]
    },
    "properties": {
    "Number":5,
    "Name":"O. Henry's",
    "Description":"...the oldest gay bar in North Carolina, it claims. Truly believe it's close to it if it's not THE oldest.",
    "Neighborhood":"Michael Harney",
    "Image": "images/ohenrys.jpg",
    "Color": "red"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5514869,35.5950581 ]
    },
    "properties": {
    "Number":6,
    "Name":"Actual Lesbian Social Club",//Location may not be correct; must fact-check
    "Description":"It's like 1200 people in all ... that's how we met a lot of our friends.",
    "Neighborhood":"Nancy Asch",
    "Image": "images/actual_lesbian_club.jpg",
    "Color": "red"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5564559,35.5927461 ]
    },
    "properties": {
    "Number":7,
    "Name":"LGBTQ Elder Advocates of WNC",
    "Description":"",
    "Neighborhood":"Nancy Asch",
    "Image": "images/lgbtq_advocates.png",
    "Color": "red"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.604042,35.581884 ]
    },
    "properties": {
    "Number":8,
    "Name":"The Odditorium",
    "Description":"...the Odditorium has always been a huge staple of the community.",
    "Neighborhood":"Danny B",
    "Image": "images/odditorium.png",
    "Color": "red"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.53799,35.5767162 ]
    },
    "properties": {
    "Number":9,
    "Name":"Loving Food Resources",
    "Description":"...a food pantry for people with HIV and AIDS and anyone in home hospice.",
    "Neighborhood":"Barbara Bell",
    "Image": "images/loving_foodResources.jpg",
    "Color": "red"
    }
  },
       
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5714764,35.4535077 ]
    },
    "properties": {
    "Number":10,
    "Name":"PFLAG",
    "Description":"#",
    "Neighborhood":"Dan Coleman",
    "Image": "images/PFLAG.jpg",
    "Color": "red"
    }
  }, 
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5548546,35.5961409 ]
    },
    "properties": {
    "Number":11,
    "Name":"Malaprop's Bookstore",
    "Description":"Because y'know, we didn't have the internet, we didn't have a lot of things that made finding spaces easy.",
    "Neighborhood":"Allison Scott",
    "Image": "images/malaprops.jpg",
    "Color": "red"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5881172,35.5785266 ]
    },
    "properties": {
    "Number":12,
    "Name":"Firestorm Books & Coffee",
    "Description":"",
    "Neighborhood":"West Asheville",
    "Image": "images/firestorm.jpg",
    "Color": "red"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5556557,35.594468 ]
    },
    "properties": {
    "Number":13,
    "Name":"NAACP",
    "Description":"",
    "Neighborhood":"Tina White",
    "Image": "images/naacp.jpg",
    "Color": "red"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.5428183,35.565529 ]
    },
    "properties": {
    "Number":14,
    "Name":"The Cathedral of All Souls",
    "Description":"",
    "Neighborhood":"",
    "Image": "images/all_souls.jpg",
    "Color": "red"
    }
  },
       

]
}



// add markers to map
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
        `<h1>${feature.properties.Name}</h1><h2>${feature.properties.Neighborhood}</h2><img width="100%" height="auto" src="${feature.properties.Image}"/><p>${feature.properties.Description}</p>`
      )
  )
  .addTo(mapDowntown);

}

/*Disable Zoom*/

mapDowntown.scrollZoom.disable();

/*Navigation Controls*/
mapDowntown.addControl(new mapboxgl.NavigationControl());
