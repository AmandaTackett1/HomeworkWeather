// $(function () {

//     $.ajax("http://rest.learncode.academy/api/learncode/friends/57e2c08a1ebec6010006185a") //adding a single person
//         .done(function (data) {
//             $("#me").append(data.Name + " likes " + data.Drink); //pulling the data from the http

//         });

// });
$(function () {
   $.ajax("https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50" + "/37.8145,82.8071", { dataType: "jsonp"}).done(function(data) {
       console.log(data);
   });   
});