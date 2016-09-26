$(function () {
    $("button#new").click(function () {
        var address = $("#newZipCode").val();
        $("#address").val("");
        console.log(address)


        var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyCY51XoxXeoexsR1AUxL_RIHcLzVa-5D3o";
        $.ajax(googleUrl, { dataType: "json" }).done(function (data) {
            console.log(data);
            var curCity = data.results[0].address_components[1].long_name;
            var curState = data.results[0].address_components[3].short_name;
            var placeLat = data.results[0].geometry.location.lat;
            var placeLon = data.results[0].geometry.location.lng;

            var darksky = "https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50/" + data.results[0].geometry.location.lat + "," + data.results[0].geometry.location.lng;;
            $.ajax(darksky, { dataType: "jsonp" }).done(function (data) {
                console.log(data);

                var curTemp = data.currently.temperature;
                var maxTemp = data.daily.data[0].temperatureMax;
                var minTemp = data.daily.data[0].temperatureMin;
                var prePoss = data.currently.precipProbability;

                var date = new Date();
                currentDate = date.getDate();   
                month = date.getMonth() + 1; 
                year = date.getFullYear();
                ("current date is " + month + "/" + currentDate + "/" + year);

                console.log("current date is " + month + "/" + currentDate + "/" + year);
                var where = $("<div></div>")
                where.append(curCity + " , " + curState)
                    .append("</br >")
                    .append("</br >")
                    .append(date)
                    .append("</br >")
                    .append("Current Temperature:" + " ")
                    .append(Math.round(curTemp))
                    .append("</br >")
                    .append("Maximum Temperature:" + " ")
                    .append(Math.round(maxTemp))
                    .append("</br >")
                    .append("Minimum Temperature:" + " ")
                    .append(Math.round(minTemp))
                    .append("</br >")
                    .append("</br >")
                    .append("Rain Possibility:" + " ")
                    .append(Math.round(prePoss))
                    .append("</br >")

                $("#weatherTo").html(where);
            });
        });
    });

});


