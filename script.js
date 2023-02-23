// Set global variables,Open Weather Maps API Key
var city = "Denver"
var APIKey = "22c9b7b3a4e8a1f95ebc91f63d87daea"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" +APIKey;
var weatherConditions
var mainWeatherEl = $("#weatherConditions")
var subMainWeatherEl = $("#subDescription")
var icon = $(".icon")

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
        var weatherConditionArray = (data.weather[0])
        console.log(weatherConditionArray)
        
        var weatherDataDescription = weatherConditionArray.description
        console.log(weatherDataDescription)
        mainWeatherEl.append("<h3>"+weatherDataDescription+"</h3>")

    
        icon = weatherConditionArray.icon
        
    });


 





}
getApi()
