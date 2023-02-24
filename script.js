// Set global variables,Open Weather Maps API Key
var city = "Denver";
var APIKey = "22c9b7b3a4e8a1f95ebc91f63d87daea";

var searchEl = $("#search-form");
var searchBtn = $("#search-button");
var queryURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  city +
  "&units=imperial" +
  "&exclude=current,hourly,minutely,alerts" +
  "&appid=" +
  APIKey +
  "&cnt=6";
var weatherEl = $("#weatherConditions");
var subMainWeatherEl = $("#subDescription");
var icon = $(".icon");
var windSpeed




function userInputCitySubmit(event) {
  event.preventDefault();
  var userCityInput = $('input[name="city-input"]').val();

  city = userCityInput;
  queryURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  city +
  "&units=imperial" +
  "&exclude=current,hourly,minutely,alerts" +
  "&appid=" +
  APIKey +
  "&cnt=6";

  getApi();
}



function getApi() {
  fetch(queryURL)
    .then(function (response) {
      console.log(response.status);
      if (response.status == 404) {
        var errorDisplay = response.status;
        console.log(errorDisplay);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Current Weather Conditions
      //for Loop iterates through today and the next four days. Provides weatherCondition, temp, windSpeed, and humidity vars for each "card"
        for (var i=0; i<=6; i++){
            
            day = data.list
           
//CITY//
            var cityName = data.city.name
            console.log(cityName)
            $("#cityname").empty().append(cityName)
            
            var weatherConditions = day[i].weather[0].main
                console.log(weatherConditions)
                $("#forecast-"+i).empty().append(weatherConditions)
                
                
//TEMP//
            var currentTemp = day[i].main.temp
                console.log(currentTemp)
                $("#temp-"+i).empty().append(currentTemp)
//WIND//
            var windSpeed = day[i].wind.speed
                console.log(windSpeed)
                $("#windspeed-"+ i).empty().append(windSpeed)
                
            var humidity = day[i].main.humidity
                console.log(humidity)



                


        }

        



       



//       var todayArray = data.list[0];
//       console.log(todayArray);
//       var weatherConditions = todayArray.weather[0].main;
//       console.log(weatherConditions);
//       //current temps
//       //note: currentTemp represents the temp at 21:00
//       var currentTemp = todayArray.main.temp;
//       console.log(currentTemp);
//       var currentTempHigh = todayArray.main.temp_max;
//       var currentTempLow = todayArray.main.temp_min;
//       console.log(currentTempHigh);
//       console.log(currentTempLow);
//       //humidity
//       var humidity = todayArray.main.humidity;
//       console.log(humidity);
//       //wind speed
//       var wind = todayArray.wind.speed;
//       console.log(wind);

//       weatherEl.empty().append(weatherConditions);

//       //Forecast for the next five days//
//       //tomorrow//
//       var tomorrowArray = data.list[1];
//       console.log("tomorrow");
//       var weatherConditions1 = tomorrowArray.weather[0].main;
//       console.log(weatherConditions1);
//       //current temps
//       //note: currentTemp represents the temp at 21:00
//       var currentTemp1 = tomorrowArray.main.temp;
//       console.log(currentTemp1);
//       var currentTempHigh1 = tomorrowArray.main.temp_max;
//       var currentTempLow1 = tomorrowArray.main.temp_min;
//       console.log(currentTempHigh1);
//       console.log(currentTempLow1);
//       //humidity
//       var humidity1 = tomorrowArray.main.humidity;
//       console.log(humidity1);
//       //wind speed
//       var wind1 = tomorrowArray.wind.speed;
//       console.log(wind1);

//       //tomorrow +1//
//       var dayAfterTomorrowArray = data.list[2];
//       console.log("tomorrow +1");
//       var weatherConditions2 = dayAfterTomorrowArray.weather[0].main;
//       console.log(weatherConditions2);
//       //current temps
//       //note: currentTemp represents the temp at 21:00
//       var currentTemp2 = dayAfterTomorrowArray.main.temp;
//       console.log(currentTemp2);
//       var currentTempHigh2 = dayAfterTomorrowArray.main.temp_max;
//       var currentTempLow2 = dayAfterTomorrowArray.main.temp_min;
//       console.log(currentTempHigh2);
//       console.log(currentTempLow2);
//       //humidity
//       var humidity2 = dayAfterTomorrowArray.main.humidity;
//       console.log(humidity2);
//       //wind speed
//       var wind2 = dayAfterTomorrowArray.wind.speed;
//       console.log(wind2);

//       //tomorrow +2
//       var dayAfterAfterTomorrowArray = data.list[3];
//       console.log("tomorrow +3");
//       var weatherConditions3 = dayAfterAfterTomorrowArray.weather[0].main;
//       console.log(weatherConditions3);
//       //current temps
//       //note: currentTemp represents the temp at 21:00
//       var currentTemp3 = dayAfterAfterTomorrowArray.main.temp;
//       console.log(currentTemp3);
//       var currentTempHigh3 = dayAfterAfterTomorrowArray.main.temp_max;
//       var currentTempLow3 = dayAfterAfterTomorrowArray.main.temp_min;
//       console.log(currentTempHigh3);
//       console.log(currentTempLow3);
//       //humidity
//       var humidity3 = dayAfterTomorrowArray.main.humidity;
//       console.log(humidity3);
//       //wind speed
//       var wind3 = dayAfterTomorrowArray.wind.speed;
//       console.log(wind3);

//       //tomorrow +3
//       var dayAfterAfterAfterTomorrowArray = data.list[4];
//       console.log("tomorrow +4");
//       var weatherConditions4 = dayAfterAfterAfterTomorrowArray.weather[0].main;
//       console.log(weatherConditions4);
//       //current temps
//       //note: currentTemp represents the temp at 21:00
//       var currentTemp4 = dayAfterAfterAfterTomorrowArray.main.temp;
//       console.log(currentTemp4);
//       var currentTempHigh4 = dayAfterAfterAfterTomorrowArray.main.temp_max;
//       var currentTempLow4 = dayAfterAfterAfterTomorrowArray.main.temp_min;
//       console.log(currentTempHigh4);
//       console.log(currentTempLow4);
//       //humidity
//       var humidity4 = dayAfterAfterAfterTomorrowArray.main.humidity;
//       console.log(humidity4);
//       //wind speed
//       var wind4 = dayAfterAfterAfterTomorrowArray.wind.speed;
//       console.log(wind4);
    });
}
getApi();

searchBtn.on("click", userInputCitySubmit);
