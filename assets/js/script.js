const APIkey = "AIzaSyA9renZ8ki4q7rSWPiEqFjv8sfVjIqEnm0";
const APIkey2 = "DNVO5Yy9BBhrmHRPBilHNS9m42eD0XA9";
const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=";
var searchBtn = document.getElementById("submitBtn")
var searchRest = document.getElementById("search-rest")

$(searchBtn).on("click", function(event) {
  event.preventDefault();
  var content = searchRest
  search(content)
})

function search(content) {
  fetch(
    "https://"
  )
}

function initialize () {
  let mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(45.464211, 9.191383),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  let map = new google.maps.Map(document.getElementById("googlemap"), mapOptions);
  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(45.464211, 9.191383),
    map: map,
    title: "Apperitivo"
  });
}



// DISPLAY THE MAP
google.maps.event.addDomListener(window, "load", initialize);

