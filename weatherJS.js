var PaintsvilleCityName="https://maps.googleapis.com/maps/api/geocode/json?address=41240&key=AIzaSyCY51XoxXeoexsR1AUxL_RIHcLzVa-5D3o";
 var Weather="https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50";

$.ajax(PaintsvilleCityName, { 
    dataType: "json"})
    .done(function(data){
        console.log(data.results[0].address_components[1].long_name),
        console.log;$(".PaintsvilleCityName").append(data.results[0].address_components[1].long_name)
    });
 $.ajax("https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50" + "/37.8145,82.8071", { dataType: "jsonp"}).done(function(data) {
    console.log(data);$(".PaintsvilleTempCall").append(data.currently.temperature),
    console.log(data);$(".PaintsvilledewPoint").append(data.currently.dewPoint),
    console.log;$(".PaintsvilletemperatureMax").append(data.daily.temperatureMax),
    console.log;$(".PaintsvilletemperatureMin").append(data.daily.temperatureMin)
   });
// $.ajax("http://rest.learncode.academy/api/learncode/friends/57e2c08a1ebec6010006185a") //adding a single person
//         .done(function (data) {
//             $("#me").append(data.Name + " likes " + data.Drink); //pulling the data from the http
var PrestonsburgCityName="https://maps.googleapis.com/maps/api/geocode/json?address=41653&key=AIzaSyCY51XoxXeoexsR1AUxL_RIHcLzVa-5D3o";

$.ajax(PrestonsburgCityName, { 
    dataType: "json"})
    .done(function(data){
        console.log(data.results[0].address_components[1].long_name),
        console.log;$(".PrestonsburgCityName").append(data.results[0].address_components[1].long_name)
    });
    $.ajax("https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50" + "/37.7562269, -82.576824", { dataType: "jsonp"}).done(function(data) {
    console.log(data);$(".PrestonsburgTempCall").append(data.currently.temperature),
    console.log(data);$(".PrestonsburgdewPoint").append(data.currently.dewPoint),
    console.log;$(".PrestonsburgtemperatureMax").append(data.daily.temperatureMax),
    console.log;$(".PrestonsburgtemperatureMin").append(data.daily.temperatureMin)
   });

var ParisCityName="https://maps.googleapis.com/maps/api/geocode/json?address=75007&key=AIzaSyCY51XoxXeoexsR1AUxL_RIHcLzVa-5D3o";

$.ajax(ParisCityName, { 
    dataType: "json"})
    .done(function(data){
        console.log(data.results[0].address_components[1].long_name),
        console.log;$(".ParisCityName").append(data.results[0].address_components[1].long_name)
    });
    $.ajax("https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50" + "/48.858093, 2.294694", { dataType: "jsonp"}).done(function(data) {
    console.log(data);$(".ParisTempCall").append(data.currently.temperature),
    console.log(data);$(".ParisdewPoint").append(data.currently.dewPoint),
    console.log;$(".ParistemperatureMax").append(data.daily.temperatureMax),
    console.log;$(".ParistemperatureMin").append(data.daily.temperatureMin)
   });


var DisneyWorldName="https://maps.googleapis.com/maps/api/geocode/json?address=32830&key=AIzaSyCY51XoxXeoexsR1AUxL_RIHcLzVa-5D3o";

$.ajax(DisneyWorldName, { 
    dataType: "json"})
    .done(function(data){
        console.log(data.results[0].address_components[1].long_name),
        console.log;$(".DisneyWorldName").append(data.results[0].address_components[1].long_name)
    });
    $.ajax("https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50" + "/28.4241329, -81.4990969", { dataType: "jsonp"}).done(function(data) {
    console.log(data);$(".DisneyWorldTempCall").append(data.currently.temperature),
    console.log(data);$(".DisneyWorlddewPoint").append(data.currently.dewPoint),
    console.log;$(".DisneyWorldtemperatureMax").append(data.daily.temperatureMax),
    console.log;$(".DisneyWorldtemperatureMin").append(data.daily.temperatureMin)
   });

   var Mountain="https://maps.googleapis.com/maps/api/geocode/json?address=54149&key=AIzaSyCY51XoxXeoexsR1AUxL_RIHcLzVa-5D3o";

$.ajax(Mountain, { 
    dataType: "json"})
    .done(function(data){
        console.log(data.results[0].address_components[1].long_name),
        console.log()
        console.log;$(".MountainName").append(data.results[0].address_components[1].long_name)
    });
    $.ajax("https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50" + "/45.307347, -88.34087289999999", { dataType: "jsonp"}).done(function(data) {
    console.log(data);$(".MountainTempCall").append(data.currently.temperature),
    console.log(data);$(".MountaindewPoint").append(data.currently.dewPoint),
    console.log;$(".MountaintemperatureMax").append(data.daily.temperatureMax),
    console.log;$(".MountaintemperatureMin").append(data.daily.temperatureMin)
    });

      var HellName="https://maps.googleapis.com/maps/api/geocode/json?address=48169&key=AIzaSyCY51XoxXeoexsR1AUxL_RIHcLzVa-5D3o";

$.ajax(HellName, { 
    dataType: "json"})
    .done(function(data){
        console.log(data.results[0].address_components[1].long_name),
        console.log()
        console.log;$(".HellName").append(data.results[0].address_components[1].long_name)
    });
    $.ajax("https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50" + "/42.520857, -83.82485", { dataType: "jsonp"}).done(function(data) {
    console.log(data);$(".HellTempCall").append(data.currently.temperature),
    console.log(data);$(".HelldewPoint").append(data.currently.dewPoint),
    console.log;$(".HelltemperatureMax").append(data.daily.temperatureMax),
    console.log;$(".HelltemperatureMin").append(data.daily.temperatureMin)
    });
 
 
   
