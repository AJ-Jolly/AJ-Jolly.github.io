mapboxgl.accessToken = 'pk.eyJ1IjoiYWpqb2xseSIsImEiOiJja3RhNnAwZTUxamZxMnBucmplNDZsNmlnIn0.MwRtxEViwwDfQRVDHrRcWg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/ajjolly/cl8hq4vx1003c14mxv2mgj74t',
center: [-82.573, 35.525],
zoom: 9.29
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
       "coordinates":  [-82.5519767
,35.5852445]
    },
    "properties": {
    "Number":1,
    "Name":"Western North Carolina Community Health Services",
    "Description":"A nonprofit providing health services reguardless of ability to pay. Services include feminine care, HIV care, trans health services, and transportation assistance
",
    "Color": "yellow"
    }
  },
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5211752
,35.5661298]
    },
    "properties": {
    "Number":2,
    "Name":"The Western North Carolina AIDS Project",
    "Description":"Provides equitable access to care that reduces harm from STIs and drug use",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5564559
,35.5927461]
    },
    "properties": {
    "Number":3,
    "Name":"LGBTQ Elder Advocates of WNC",
    "Description":"LGBTQ+ Advocacy Group",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.53799
,35.5767162]
    },
    "properties": {
    "Number":4,
    "Name":"Loving Food Resources",
    "Description":"Provides food, health, and personal care items to people in Western North Carolina suffering from HIV/AIDS or who are in Home Hospice care",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5714764
,35.4535077]
    },
    "properties": {
    "Number":5,
    "Name":"PFLAG",
    "Description":"Nation-wide organization dedicated to supporting, educating, and advocating for LGBTQ+ people and their families",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5556557
,35.594468]
    },
    "properties": {
    "Number":6,
    "Name":"NAACP",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5508145
,35.5831969]
    },
    "properties": {
    "Number":7,
    "Name":"NAMI Western North Carolina",
    "Description":"Mental health support",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5718696
,35.6118811]
    },
    "properties": {
    "Number":8,
    "Name":"The Pisgah Institute",
    "Description":"Mental health professionals offering a wide range of mental health support and treatment",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.6016482
,35.5257578]
    },
    "properties": {
    "Number":9,
    "Name":"Vaya Health",
    "Description":"A public managed care organization offering support for mental health, substance abuse, and intellectual/developmental disabilities",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-81.3479538
,35.722816]
    },
    "properties": {
    "Number":10,
    "Name":"YouthOutRight",
    "Description":"A nonprofit LGBTQ+ advocacy group",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5810787
,35.5775703]
    },
    "properties": {
    "Number":11,
    "Name":"Asheville Community Acupuncture",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5326993
,35.5398831]
    },
    "properties": {
    "Number":12,
    "Name":"Appalachian Specialty Pharmacy",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.521803
,35.4905889]
    },
    "properties": {
    "Number":13,
    "Name":"WNC Dental",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.9449502
,35.5255083]
    },
    "properties": {
    "Number":14,
    "Name":"Haywood Regional Medical Center",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.4846339
,35.6764038]
    },
    "properties": {
    "Number":15,
    "Name":"North Buncombe Electrolysis",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5525172
,35.602952]
    },
    "properties": {
    "Number":16,
    "Name":"Dr. Kani Nicolls, DDS",
    "Description":"LGBTQ+ friendly dentist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-83.2283001
,35.3748935]
    },
    "properties": {
    "Number":17,
    "Name":"Sae Smyrl, PT",
    "Description":"LGBTQ+ friendly physical therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5484086
,35.6000007]
    },
    "properties": {
    "Number":18,
    "Name":"Resilient Roots Bodywork"
    "Description":"Theraputic Massage and Cupping",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5560669
,35.582179]
    },
    "properties": {
    "Number":19,
    "Name":"Planned Parenthood",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.556405
,35.6077813]
    },
    "properties": {
    "Number":20,
    "Name":"Community Family Practice",
    "Description":"Specializes in family medicine and nursing; experienced with transgender patients",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5811833
,35.6408117]
    },
    "properties": {
    "Number":21,
    "Name":"Live Well in WNC",
    "Description":"Holistic and preventive care, nutrition, supplements, fitness, and hormone replacement therapy",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.8852196
,35.5316554]
    },
    "properties": {
    "Number":22,
    "Name":"Midway Medical Center",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-83.2049678
,35.3888256]
    },
    "properties": {
    "Number":23,
    "Name":"Jackson County Health Department",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-83.8085512
,35.3151636]
    },
    "properties": {
    "Number":24,
    "Name":"Tallulah Health Center",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.4506789
,35.3349044]
    },
    "properties": {
    "Number":25,
    "Name":"Highland Medical Associates",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.54863
,35.6017953]
    },
    "properties": {
    "Number":26,
    "Name":"Crossing Point Counseling",
    "Description":"",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5467848
,35.6060345]
    },
    "properties": {
    "Number":27,
    "Name":"Pride Therapy",
    "Description":"LGBTQ+ inclusive counseling",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5646659
,35.5942062]
    },
    "properties": {
    "Number":28,
    "Name":"Heather Branham, LCSW",
    "Description":"LGBTQ+ friendly therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5561303

,35.5919787]
    },
    "properties": {
    "Number":29,
    "Name":"Luce L Beagle, LPCA, LCASA",
    "Description":"LGBTQ+ friendly therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.4846339

,35.6763995]
    },
    "properties": {
    "Number":30,
    "Name":"North Buncombe Electrolysis",
    "Description":"Electrolysis/laser treatment",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5557289

,35.6062949]
    },
    "properties": {
    "Number":31,
    "Name":"Rae Swersey",
    "Description":"Herbalist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.410336

,35.59833]
    },
    "properties": {
    "Number":32,
    "Name":"Raymond Johnson, LMBT",
    "Description":"Massage Therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5484086

,35.6000007]
    },
    "properties": {
    "Number":33,
    "Name":"Rue Lee Robin, LMBT",
    "Description":"Massage Therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5600345

,35.592294]
    },
    "properties": {
    "Number":34,
    "Name":"Citrine Healing AVL",
    "Description":"Philippe Citrine, MA; somatic coaching and polarity therapy for trans and queer folks",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5570937

,35.6121973]
    },
    "properties": {
    "Number":35,
    "Name":"Manifest Counseling Collective",
    "Description":"Mental health counseling",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5561474

,35.6219463]
    },
    "properties": {
    "Number":36,
    "Name":"Shannon O'Neill",
    "Description":"LGBTQ+ friendly therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5540385

,35.6006667]
    },
    "properties": {
    "Number":37,
    "Name":"TJ Stiers, LCSW",
    "Description":"Spanish speaking issues, trauma, adult and adolescent",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.549327

,35.5977167]
    },
    "properties": {
    "Number":38,
    "Name":"Tara Chandler, LCSW",
    "Description":"Eating disorders, trauma, gender spectrum, anxiety, depression, adult and adolescent, family therapy",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5283466

,35.4866223]
    },
    "properties": {
    "Number":39,
    "Name":"Dale Ann Karl, MA LPC",
    "Description":"Central Counseling of Asheville; eating disorders, couples counseling, LGBTQ+ issues, depression and anxiety",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5537216

,35.6034684]
    },
    "properties": {
    "Number":40,
    "Name":"Asheville Women's Counseling",
    "Description":"All genders welcome",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5493898

,35.6027584]
    },
    "properties": {
    "Number":41,
    "Name":"Chandra Passero",
    "Description":"LGBTQ+ friendly therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5526651

,35.6034498]
    },
    "properties": {
    "Number":42,
    "Name":"Pam Raymond",
    "Description":"LGBTQ+ friendly therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5484086

,35.6000007]
    },
    "properties": {
    "Number":43,
    "Name":"Cullen Sprague",
    "Description":"LGBTQ+ friendly therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5484086

,35.6000007]
    },
    "properties": {
    "Number":44,
    "Name":"Kat Davis-Black, LCSW",
    "Description":"Individual Therapy, EDMR Therapy, Couples Counseling",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5766857

,35.5780971]
    },
    "properties": {
    "Number":45,
    "Name":"Tracy Davis-Black, LCSW",
    "Description":"Therapist",
    "Color": "yellow"
    }
  },
       
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-82.5600345

,35.5922983]
    },
    "properties": {
    "Number":46,
    "Name":"Miriah Lantz-Wagner, LPC, LCASA",
    "Description":"Therapist",
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