// Set global variables,Open Weather Maps API Key
var city = "Denver"
var APIKey = "22c9b7b3a4e8a1f95ebc91f63d87daea"

var searchEl = $("#search-form")
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&exclude=current,hourly,minutely,alerts"  +"&appid=" +APIKey +"&cnt=5";
var weatherEl = $("#weatherConditions")
var subMainWeatherEl = $("#subDescription")
var icon = $(".icon")




function userInputCitySubmit(event){
    event.preventDefault();
var userCityInput = $('input[name="city-input"]').val();


city = userCityInput;
queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" +APIKey;
console.log(city)
getApi()
}


console.log(city)


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
        //Current Weather Conditions
        var todayArray = (data.list[0])
        console.log(todayArray)
        var weatherConditions = todayArray.weather[0].main
        console.log(weatherConditions)
        //current temps
        //note: currentTemp represents the temp at 21:00
        var currentTemp = todayArray.main.temp
        console.log(currentTemp)
        var currentTempHigh = todayArray.main.temp_max
        var currentTempLow = todayArray.main.temp_min
        console.log(currentTempHigh)
        console.log(currentTempLow)
        //humidity
        var humidity = todayArray.main.humidity
        console.log(humidity)
        //wind speed
        var wind = todayArray.wind.speed
        console.log(wind)

        
    
        
        weatherEl.empty().append(weatherConditions)

       
        // var currentTemp = mainArray.temp
        // console.log(currentTemp)
        // var highTemp = mainArray.temp_max
        // console.log(highTemp)
    
        // icon = weatherArray.icon


        //Forecast for the next five days//
        //fetch request forecast, not weather
            
        
    });


 





}
getApi()

searchEl.on("click",userInputCitySubmit);