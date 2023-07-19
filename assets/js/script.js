const APIkey = "AIzaSyA9renZ8ki4q7rSWPiEqFjv8sfVjIqEnm0";
const APIkey2 = "DNVO5Yy9BBhrmHRPBilHNS9m42eD0XA9";
var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=";
var searchBtn = document.getElementById("submitBtn");
var searchRest = document.getElementById("search-rest");
var rest = document.getElementById("container");
var input = document.getElementById("surf");
var lat = 0;
var long = 0;
let savedRest = [];

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
  lat = position.coords.latitude;
  long = position.coords.longitude;
  console.log(lat, long);
  // pass to init map
  initMap(lat, long);
}

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("searchBtn");
  search();
});

function search() {
  var inputText = input.value;
  var content = encodeURIComponent(inputText);
  console.log(lat, long);
  let url =
    "https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat +
    "," +
    long +
    "&radius=50000&type=restaurant&keyword=" +
    content +
    "&key=" +
    APIkey;
  // console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayRestaurant(data.results[0]))
    .catch((error) => {
      console.log(error);
    });
}

function displayRestaurant(data) {
  console.log(data);
  const { name, icon, rating, opening_hours, vicinity} = data;
  const { open_now } = opening_hours;
  const restaurantDiv = document.createElement("div");
  restaurantDiv.classList.add("restaurant-info");

  const nameHeading = document.createElement("h2");
  const iconImage = document.createElement("img");
  const ratingHeading = document.createElement("h2");
  const openingHoursHeading = document.createElement("h2");
  const vicinityHeading = document.createElement("h2");

  nameHeading.innerText = name;
  iconImage.src = icon;
  ratingHeading.innerText = ("Rating: "+ rating);
  openingHoursHeading.innerText = ("Open Now: " + open_now);
  vicinityHeading.innerText = ("Adress: " + vicinity);

  restaurantDiv.appendChild(nameHeading);
  restaurantDiv.appendChild(iconImage);
  restaurantDiv.appendChild(ratingHeading);
  restaurantDiv.appendChild(openingHoursHeading);
  restaurantDiv.appendChild(vicinityHeading);

  const rest = document.getElementById("popular");
  rest.innerHTML = ""; // Clear any existing content
  rest.appendChild(restaurantDiv);
}

function initMap(latitude, longitude) {
  let mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(latitude, longitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  let map = new google.maps.Map(
    document.getElementById("googlemap"),
    mapOptions
  );
}

getLocation();
