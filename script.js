// Set global variables,Open Weather Maps API Key
var city = "Denver"
var APIKey = "22c9b7b3a4e8a1f95ebc91f63d87daea"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" +APIKey;
var weatherConditions



function getApi(){
    fetch(queryURL)
    .then(function (response) {
        console.log(response.status) 
            if(response.status == 404){
                var errorDisplay = response.status
                console.log(errorDisplay)
            }
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        weatherConditions = (data.weather)
        console.log(weatherConditions)
        var weatherEl = weatherConditions[0]
        console.log(weatherEl)
        var mainWeatherEl = weatherEl.main
        var subMainWeatherEl = weatherEl.description
        var icon = weatherEl.icon


    });


 





}
getApi()
