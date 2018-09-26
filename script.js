var map, heatmap, latitude, longitude;

//List of Objects, using the latitude and the longitude of the 20 locations
var myLatLng = [
  {lat:43.471459, lng: -80.546995},
  {lat:43.470419, lng: -80.552059},
  {lat:43.469734, lng: -80.548068},
  {lat:43.469521, lng: -80.551438},
  {lat:43.472113, lng: -80.553204},
  {lat:43.473713, lng: -80.554021},
  {lat:43.474583, lng: -80.545576},
  {lat:43.475253, lng: -80.543658},
  {lat:43.474138, lng: -80.548454},
  {lat:43.473949, lng: -80.544813},
  {lat:43.473631, lng: -80.544062},
  {lat:43.473091, lng: -80.543677},
  {lat:43.470061, lng: -80.543087},
  {lat:43.469359, lng: -80.543011},
  {lat:43.470228, lng: -80.541339},
  {lat:43.466962, lng: -80.541081},
  {lat:43.468089, lng: -80.541070},
  {lat:43.469983, lng: -80.539214},
  {lat:43.471283, lng: -80.534947},
  {lat:43.469129, lng: -80.535687}
];

//Initializing the map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 43.470039, lng: -80.544243},
    mapTypeId: 'satellite'
});
      
//Creating markers for each location and a popup box
var marker1 = new google.maps.Marker({
    position: myLatLng[0],
    map: map,
    title: 'Spooky'
});

marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
});

var contentString1= '<p><b>Location & Time: </b>V1 Pathway, 10:45PM</br><b>Description:</b> Mugged on the way back from the library by a couple of strangers </br><b>SafeRating: </b> 4/10 </p>';
var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});

var marker2 = new google.maps.Marker({
    position: myLatLng[1],
    map: map,
    title: 'Wild animals'
});
    
marker2.addListener('click', function() {
infowindow2.open(map, marker2);
});
var contentString2= '<p><b>Location & Time: </b>V1/REV connector, 1:30AM</br><b>Description:</b>Pretty spooky, with deers going around the place. </br><b>SafeRating: </b> 6/10 </p>';
var infowindow2 = new google.maps.InfoWindow({
content: contentString2
});

var marker3 = new google.maps.Marker({
position: myLatLng[2],
map: map,
title: 'Deserted'
});
marker3.addListener('click', function() {
infowindow3.open(map, marker3);
});
var contentString3= '<p><b>Location & Time: </b>St. Jerome Parking lot, 4:50AM</br><b>Description:</b>Deserted with high chances of being robbed. </br><b>SafeRating: </b> 2/10 </p>';
var infowindow3 = new google.maps.InfoWindow({
content: contentString3
});

var marker4 = new google.maps.Marker({
position: myLatLng[3],
map: map,
title: 'Unsafe at night'
});
marker4.addListener('click', function() {
infowindow4.open(map, marker4);
});
var contentString4= '<p><b>Location & Time: </b>REV connector, 1:00AM</br><b>Description:</b>More of a scary walk through the woods, would avoid this route at night if possible. </br><b>SafeRating: </b> 1/10 </p>';
var infowindow4 = new google.maps.InfoWindow({
content: contentString4
});

var marker5 = new google.maps.Marker({
position: myLatLng[4],
map: map,
title: 'Dim-lit'
});
marker5.addListener('click', function() {
infowindow5.open(map, marker5);
});
var contentString5= '<p><b>Location & Time: </b>Columbia/V1, 5:00AM</br><b>Description:</b>Advised to avoid early in the morning.</br><b>SafeRating: </b> 1/10 </p>';
var infowindow5 = new google.maps.InfoWindow({
content: contentString5
});

var marker6 = new google.maps.Marker({
position: myLatLng[5],
map: map,
title: 'Unsafe'
});
marker6.addListener('click', function() {
infowindow6.open(map, marker6);
});
var contentString6= '<p><b>Location & Time: </b>Columbia Lake, 10:30PM</br><b>Description:</b>No nearby go-to places for help, visit only in the mornings.</br><b>SafeRating: </b> 4/10 </p>';
var infowindow6 = new google.maps.InfoWindow({
content: contentString6
});

var marker7 = new google.maps.Marker({
position: myLatLng[6],
map: map,
title: 'Deserted'
});
marker7.addListener('click', function() {
infowindow7.open(map, marker7);
});
var contentString7= '<p><b>Location & Time: </b>Parking Lot, 6:30AM</br><b>Description:</b>Reasons not specified </br><b>SafeRating: </b> 6/10 </p>';
var infowindow7 = new google.maps.InfoWindow({
content: contentString7
});

var marker8 = new google.maps.Marker({
position: myLatLng[7],
map: map,
title: 'Dim-lit'
});
marker8.addListener('click', function() {
infowindow8.open(map, marker8);
});
var contentString8= '<p><b>Location & Time: </b>Albert St., 8:30PM</br><b>Description:</b>Highly unsafe, dark alleys, dim-lit</br><b>SafeRating: </b> 3/10 </p>';
var infowindow8 = new google.maps.InfoWindow({
content: contentString8
});

var marker9 = new google.maps.Marker({
position: myLatLng[8],
map: map,
title: 'Spooky'
});
marker9.addListener('click', function() {
infowindow9.open(map, marker9);
});
var contentString9= '<p><b>Location & Time: </b>CIF, 1:20AM</br><b>Description:</b>Deserted, not a great place for hangout late at night</br><b>SafeRating: </b> 5/10 </p>';
var infowindow9 = new google.maps.InfoWindow({
content: contentString9
});

var marker10 = new google.maps.Marker({
position: myLatLng[9],
map: map,
title: 'Stalked by a stranger'
});
marker10.addListener('click', function() {
infowindow10.open(map, marker10);
});
var contentString10= '<p><b>Location & Time: </b>BC Mathews Hall, 10:30AM</br><b>Description:</b>Reasons not specified</br><b>SafeRating: </b> 7/10 </p>';
var infowindow10 = new google.maps.InfoWindow({
content: contentString10
});

var marker11 = new google.maps.Marker({
position: myLatLng[10],
map: map,
title: 'Deserted'
});
marker11.addListener('click', function() {
infowindow11.open(map, marker11);
});
var contentString11= '<p><b>Location & Time: </b>M3, 11:30PM</br><b>Description:</b>Gunshot heard</br><b>SafeRating: </b> 2/10 </p>';
var infowindow11 = new google.maps.InfoWindow({
content: contentString11
});

var marker12 = new google.maps.Marker({
position: myLatLng[11],
map: map,
title: 'Unsafe at night'
});
marker12.addListener('click', function() {
infowindow12.open(map, marker12);
});
var contentString12= '<p><b>Location & Time: </b>M3/DC, 10:30PM</br><b>Description:</b>Lot of reports of mugging</br><b>SafeRating: </b> 2/10 </p>';
var infowindow12 = new google.maps.InfoWindow({
content: contentString12
});

var marker13 = new google.maps.Marker({
position: myLatLng[12],
map: map,
title: 'Reason unknown'
});
marker13.addListener('click', function() {
infowindow13.open(map, marker13);
});
var contentString13= '<p><b>Location & Time: </b>STC, 11:30PM</br><b>Description:</b>Reasons not specified</br><b>SafeRating: </b> 7/10 </p>';
var infowindow13 = new google.maps.InfoWindow({
content: contentString13
});

var marker14 = new google.maps.Marker({
position: myLatLng[13],
map: map,
title: 'Catcalled'
});
marker14.addListener('click', function() {
infowindow14.open(map, marker14);
});
var contentString14= '<p><b>Location & Time: </b>ML, 8:30PM</br><b>Description:</b>Catcalle dwith no one to help</br><b>SafeRating: </b> 2/10 </p>';
var infowindow14 = new google.maps.InfoWindow({
content: contentString14
});

var marker15 = new google.maps.Marker({
position: myLatLng[14],
map: map,
title: 'Too many strangers at night'
});
marker15.addListener('click', function() {
infowindow15.open(map, marker15);
});
var contentString15= '<p><b>Location & Time: </b>RCH, 10:30PM</br><b>Description:</b> Beaten up by a couple of strangers </br><b>SafeRating: </b> 2/10 </p>';
var infowindow15 = new google.maps.InfoWindow({
content: contentString15
});

var marker16 = new google.maps.Marker({
position: myLatLng[15],
map: map,
title: 'Stalked by a stranger'
});
marker16.addListener('click', function() {
infowindow16.open(map, marker16);
});
var contentString16= '<p><b>Location & Time: </b>Hagey, 12:30PM</br><b>Description:</b>High reports of accidents late at night, hence avoid.</br><b>SafeRating: </b> 5/10 </p>';
var infowindow16 = new google.maps.InfoWindow({
content: contentString16
});

var marker17 = new google.maps.Marker({
position: myLatLng[16],
map: map,
title: 'Dim-lit'
});
marker17.addListener('click', function() {
infowindow17.open(map, marker17);
});
var contentString17= '<p><b>Location & Time: </b>TC, 1:30AM</br><b>Description:</b>Very dim-lit, spooky feel; Changing the street lights would be beneficial </br><b>SafeRating: </b> 4/10 </p>';
var infowindow17 = new google.maps.InfoWindow({
content: contentString17
});

var marker18 = new google.maps.Marker({
position: myLatLng[17],
map: map,
title: 'Less Populated'
});
marker18.addListener('click', function() {
infowindow18.open(map, marker18);
});
var contentString18= '<p><b>Location & Time: </b>DWE, 10:30PM</br><b>Description:</b> Sparsely populated, better avoid at night</br><b>SafeRating: </b> 2/10 </p>';;
var infowindow18 = new google.maps.InfoWindow({
content: contentString18
});

var marker19 = new google.maps.Marker({
position: myLatLng[18],
map: map,
title: 'Reason unknown'
});
marker19.addListener('click', function() {
infowindow19.open(map, marker19);
});
var contentString19= '<p><b>Location & Time: </b>UWP, 6:00AM </br><b>Description:</b> Reasons not specfied</br><b>SafeRating: </b> 6/10 </p>';
var infowindow19 = new google.maps.InfoWindow({
content: contentString19
});

var marker20 = new google.maps.Marker({
position: myLatLng[19],
map: map,
title: 'Unsafe'
});

marker20.addListener('click', function() {
infowindow20.open(map, marker20);
});
var contentString20= '<p><b>Location & Time: </b>Waterloo Park, 12:30AM</br><b>Description:</b>Highly unsafe to walk alone </br><b>SafeRating: </b> 5/10 </p>';
var infowindow20 = new google.maps.InfoWindow({
content: contentString20
});

//Creating a heatmap of the points using the latitude and longitude data
        heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
        heatmap.set('radius', 60);
      }

      function toggleHeatmap() {
        heatmap.setMap(heatmap.getMap() ? null : map);
      }

      function changeGradient() {
        var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }
      
//Options to change the opacity of the heatmap for better viewing
      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 75);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }

//List of the the latitude and the longitude of the points on the map
//Inputting the data usingi in-built functions      
      function getPoints() {
        return [
        new google.maps.LatLng(43.471459, -80.546995),
        new google.maps.LatLng(43.470419, -80.552059),
        new google.maps.LatLng(43.469734, -80.548068),
        new google.maps.LatLng(43.469521, -80.551438),
        new google.maps.LatLng(43.472113, -80.553204),
        new google.maps.LatLng(43.473713, -80.554021),
        new google.maps.LatLng(43.474583, -80.545576),
        new google.maps.LatLng(43.475253, -80.543658),
        new google.maps.LatLng(43.474138, -80.548454),
        new google.maps.LatLng(43.473949, -80.544813),
        new google.maps.LatLng(43.473631, -80.544062),
        new google.maps.LatLng(43.473091, -80.543677),
        new google.maps.LatLng(43.470061, -80.543087),
        new google.maps.LatLng(43.469359, -80.543011),
        new google.maps.LatLng(43.470228, -80.541339),
        new google.maps.LatLng(43.466962, -80.541081),
        new google.maps.LatLng(43.468089, -80.541070),
        new google.maps.LatLng(43.469983, -80.539214),
        new google.maps.LatLng(43.471283, -80.534947),
        new google.maps.LatLng(43.469129, -80.535687),
        ];
      }