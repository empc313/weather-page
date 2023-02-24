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
var windSpeed;

function userInputCitySubmit(event) {
  event.preventDefault();
  var userCityInput = $('input[name="city-input"]').val();

  city = userCityInput;
  queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial" +
    "&exclude=hourly,minutely,alerts" +
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
      for (var i = 0; i <= 6; i++) {
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

        //TEMP//
        var currentTemp = day[i].main.temp;
        console.log(currentTemp);
        $("#temp-" + i)
          .empty()
          .append(currentTemp);
        //WIND//
        var windSpeed = day[i].wind.speed;
        console.log(windSpeed);
        $("#windspeed-" + i)
          .empty()
          .append(windSpeed);

        //HUMIDITY//
        var humidity = day[i].main.humidity;
        console.log(humidity);
        $("#humidity-" + i)
          .empty()
          .append(humidity);

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

searchBtn.on("click", function (event) {
  event.preventDefault;
  var userSearch = $("#search-input").val();
  localStorage.setItem("userSearch", userSearch);
  for (var i = 0; i < 11; i++) {}
});
// Should we make this into a function that, upon click, will begin the process of grabbing and storing the user search input in local storage?

// searchBtn.on("click", function (event) {
//   event.preventDefault();
//   var userSearch = $("#search-input").val();
//   console.log(userSearch);
//   localStorage.setItem("userSearch", userSearch);
//   userInputCitySubmit(); //Except this function can't be read in the console, why?
//  ^^^^^THIS WORKS^^^^^
//
//
//
//
//
//
//
// });
