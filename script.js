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
  APIKey 

var weatherEl = $("#weatherConditions");
var subMainWeatherEl = $("#subDescription");
var icon = $(".icon");
var windSpeed;

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
  APIKey 


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
      for (var i = 0; i <= 40; i=i+5) {
        day = data.list;

//CITY//
        var cityName = data.city.name;
        console.log(cityName);
        $("#cityname").empty().append(cityName);

//FORECASTS//
        var weatherConditions = day[i].weather[0].main;
        console.log(weatherConditions);
        $("#forecast-" + i)
          .empty()
          .append(weatherConditions);

//DATE//
        var date = day[i].dt_txt;
        console.log(date)
        $("#date-"+i).empty().append(date)
       

//TEMP//
        var currentTemp = day[i].main.temp;
        console.log(currentTemp);
        $("#temp-" + i)
          .empty()
          .append(currentTemp+"°");
//WIND//
        var windSpeed = day[i].wind.speed;
        console.log(windSpeed);
        $("#windspeed-" + i)
          .empty()
          .append(windSpeed+"mph");

//HUMIDITY//
        var humidity = day[i].main.humidity;
        console.log(humidity);
        $("#humidity-" + i)
          .empty()
          .append(humidity+"%");

//ICON//

        var iconcode = day[i].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $("#icon-" + i).attr("src", iconurl);
        console.log(iconurl);
      }
    });
}
getApi();

searchBtn.on("click", userInputCitySubmit);
