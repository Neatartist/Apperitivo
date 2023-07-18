const APIkey = "AIzaSyA9renZ8ki4q7rSWPiEqFjv8sfVjIqEnm0";
const APIkey2 = "DNVO5Yy9BBhrmHRPBilHNS9m42eD0XA9";
const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=";
var searchBtn = document.getElementById("submitBtn")
var searchRest = document.getElementById("search-rest")
var input= document.getElementById("surf")
var resName = document.getElementById("res-name")
var lat = 0
var long = 0

// get current device location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
// callback to geolocation
function showPosition(position) {

  // pull of the lat and long -- from the browser
   lat = position.coords.latitude
   long = position.coords.longitude
  console.log(lat, long);
  // pass to init map
  initMap(lat, long)
}

searchBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("searchBtn")
  search()
})

function search() {
  var inputText = input.value
  console.log(inputText)
  var content = encodeURIComponent(inputText)
  console.log(lat,long)
  let url = 'https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + '&radius=50000&type=restaurant&keyword=' + content + '&key=' + APIkey;
  // console.log(url)
  fetch(url)

  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    //Currently in progress//////////////////////
    results[i]
    resName.textContent = restSub
  })

  .catch((error)=> {
  console.log(error)
})
}


function initMap (latitude,longitude) {
  let mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(latitude,longitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  let map = new google.maps.Map(document.getElementById("googlemap"), mapOptions);
  // let marker = new google.maps.Marker({
  //   position: new google.maps.LatLng(45.464211, 9.191383),
  //   map: map,
  //   title: "Apperitivo"
  // });
}

getLocation();

// DISPLAY THE MAP
google.maps.event.addDomListener(window, "load", initialize);

