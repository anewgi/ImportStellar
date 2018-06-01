// Create a map object
var mapbox = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnJ5YW5sb3dlIiwiYSI6ImNqZ3p2bThxNTA4M3Yyd25vdGQxY2xqeXQifQ.URpIhwM_YJcAJYOyzbZEdQ'

var myMap = L.map('map', {
  center: [37.14, -8.45],
  zoom: 3
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoiYnJ5YW5sb3dlIiwiYSI6ImNqZ3p2bThxNTA4M3Yyd25vdGQxY2xqeXQifQ.URpIhwM_YJcAJYOyzbZEdQ"
).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [
{
location: [-34.42, 19.24],
name: "Hermanus",
t_change: .5,
temperature: 47.18},
{location: [36.62, 101.77],
  name: "Xining",
  t_change: .79,
  temperature: 61.58},
  {location: [-20.63, -46],
  name: "Ponta do Sol",
  t_change: .39,
  temperature: 51.5},
  {
  location: [-20.34, 57.76],
  name: "Bambous Virieux",
  t_change: .5,
  temperature: 71.6},
  {
  location: [50.84, 37.29],
  name: "Spornoye",
  t_change: .79,
  temperature: 60.8},
  {
  location: [11.95, 108.44],
  name: "Da Lat",
  t_change: .79,
  temperature: 77.87},
  {
  location: [59.1, 26.19],
  name: "Vao",
  t_change: .5,
  temperature: 58.7},
  {
  location: [42.65, -73.75],
  name: "Albany",
  t_change: .39,
  temperature: 73.35},
  {
  location: [7.3, 18.29],
  name: "Batangafo",
  t_change: .39,
  temperature: 70.22},
  {
  location: [35.55, 133.23],
  name: "Sakaiminato",
  t_change: .79,
  temperature: 72.45},
  {
  location: [-53.16, -70.91],
  name: "Punta Arenas",
  t_change: .5,
  temperature: 41},
  {
  location: [-8.9, -35.15],
  name: "Sao Jose da Coroa Grande",
  t_change: .5,
  temperature: 73.37},
  {
  location: [-23.58, 149.07],
  name: "Bluff",
  t_change: .5,
  temperature: 68.78},
  {
  location: [51.85, -105.03],
  name: "Lanigan",
  t_change: .39,
  temperature: 58.97},
  {
  location: [38.52, -28.7],
  name: "Ribeira Grande",
  t_change: .5,
  temperature: 65},
  {
  location: [-30.97, 22.13],
  name: "Carnarvon",
  t_change: .5,
  temperature: 29.27},
  {
  location: [-20.41, 57.7],
  name: "Mahebourg",
  t_change: .79,
  temperature: 71.6},
  {
  location: [33.45, 129.97],
  name: "Karatsu",
  t_change: .5,
  temperature: 72.73},
  {
  location: [1.74, 98.78],
  name: "Sibolga",
  t_change: .39,
  temperature: 77.51},
  {
  location: [-16.48, -151.75],
  name: "Faanui",
  t_change: .5,
  temperature: 78.5},
  {
  location: [37.14, -8.45],
  name: "Lagoa",
  t_change: .5,
  temperature: 59},
  {
  location: [71.64, 128.87],
  name: "Tiksi",
  t_change: .5,
  temperature: 37.37},
  {
  location: [-23.12, -134.97],
  name: "Rikitea",
  t_change: .79,
  temperature: 75.44},
  {
  location: [-54.81, -68.31],
  name: "Ushuaia",
  t_change: .5,
  temperature: 41},
  {
  location: [8.96, 38.73],
  name: "Lebu",
  t_change: .39,
  temperature: 43.94},
  {
  location: [40.62, -8.73],
  name: "Gafanha da Encarnacao",
  t_change: .39,
  temperature: 58.17},
  {
  location: [10.57, 72.64],
  name: "Kavaratti",
  t_change: .5,
  temperature: 83.18},
  {
  location: [-33.21, 138.6],
  name: "Jamestown",
  t_change: .5,
  temperature: 59.87},
  {
  location: [50.25, -96.06],
  name: "Lac du Bonnet",
  t_change: .39,
  temperature: 68.24},
  {
  location: [2.67, 72.89],
  name: "Kudahuvadhoo",
  t_change: .5,
  temperature: 85.61},
  {
  location: [-33.64, 115.35],
  name: "Busselton",
  t_change: .79,
  temperature: 63.47},
  {
  location: [37.61, -122.49],
  name: "Pacifica",
  t_change: .5,
  temperature: 61.63},
  {
  location: [-45.58, -72.07],
  name: "Coihaique",
  t_change: .39,
  temperature: 30.2},

  {location: [-0.74, -90.35],
  name: "Puerto Ayora",
  t_change: .5,
  temperature: 77},
  {
  location: [15.34, 74.49],
  name: "Vaini",
  t_change: .5,
  temperature: 76.34},
  {
  location: [3.78, 72.97],
  name: "Mahibadhoo",
  t_change: .5,
  temperature: 82.64},
  {
  location: [16.86, -99.88],
  name: "Acapulco",
  t_change: .5,
  temperature: 86},
  {
  location: [49.23, 41.83],
  name: "Bokovskaya",
  t_change: .39,
  temperature: 62.75},
  {
  location: [-34.53, 20.04],
  name: "Bredasdorp",
  t_change: .5,
  temperature: 53.6},
  {
  location: [-36.62, -64.29],
  name: "Santa Rosa",
  t_change: .79,
  temperature: 46.19},
  {
  location: [37.73, -25.67],
  name: "Ponta Delgada",
  t_change: .5,
  temperature: 60.8
  }

];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h2>" + city.name + "</h2> <hr> <h3>Temperature " + city.temperature + "</h3> <hr> <h3>Temperature Change: "+city.t_change +"</h3>")
    .addTo(myMap);
}
