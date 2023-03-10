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
  APIKey;
var weatherEl = $("#weatherConditions");
var subMainWeatherEl = $("#subDescription");
var icon = $(".icon");
var windSpeed;
var userInfo = [];
var historyBtn = $("#historyButtons"); //temp variable to reference the div that will contain the dynamically created buttons.

// renderUserSearch();

function userInputCitySubmit(userCityInput) {
  // event.preventDefault();
  // var userCityInput = $('input[name="city-input"]').val();

  city = userCityInput;
  userInfo.push(city);
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial" +
    "&exclude=hourly,minutely,alerts" +
    "&appid=" +
    APIKey;

  getApi();
}

// continue working on render function
function renderUserSearch() {
  var userSearch = localStorage.getItem("userInfo");
  if (userSearch) {
    userInfo = JSON.parse(userSearch);
    for (var i = 0; i < userInfo.length; i++) {
      var city = userInfo[i];
      createButton(city);
      // var btn = $("<button>");
      // btn.addClass("btnHistory btn btn-secondary col-12 my-1");
      // btn.text(city);
      // historyBtn.append(btn);
    }
  }
  // console.log(userSearch);
}

function createButton(city) {
  var btn = $("<button>");
  btn.addClass("btnHistory btn btn-secondary col-12 my-1");
  btn.text(city);
  historyBtn.append(btn);
  $(".btnHistory").on("click", function (event) {
    event.preventDefault();
    // var userSearch = $("#search-input").val();
    var userCityInput = event.target.innerText;
    userInputCitySubmit(userCityInput);
  });
}
//
//
//
//

//WEATHER NOW//
function getApiForCurrentWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial"+"&exclude=current,hourly,minutely,alerts" +
    "&appid=" +
    APIKey)
    .then(function (response) {
        console.log(response.status);
        if (response.status == 404) {
            var errorDisplay = response.status;
            console.log(errorDisplay)
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var currentConditions = data.weather[0].description
        console.log(currentConditions)
        $("#forecast-main").empty().append("Weather:"+ currentConditions)

        var temp = data.main.temp
        console.log(temp)
        $("#temp-main").empty().append("Temp:"+temp)

        var windSpeed = data.wind.speed
        console.log(windSpeed)
        $("#wind-main").empty().append("Wind Speed:" + windSpeed)

        var humidity = data.main.humidity
        console.log(humidity)
        $("#humidity-main").empty().append("Humidity:" + humidity)

        var iconcode = data.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $("#icon-main").attr("src", iconurl);
    })

}
getApiForCurrentWeather()

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
      var filteredDayList = data.list.filter(function(obj){
        return obj.dt_txt.split(" ")[1] === "12:00:00"
      })
      console.log(filteredDayList)
      for (var i = 0; i < filteredDayList.length; i++) {
        // for (var i = 0; i <= 40; i=i+8) {
       // day = data.list;
        day = filteredDayList;

        //CITY//
        var cityName = data.city.name;
        console.log(cityName);
        $("#cityname").empty().append(cityName);

        //FORECASTS//
        var weatherConditions = day[i].weather[0].main;
        console.log(weatherConditions);
        $("#forecast-" + i)
          .empty()
          .append("Forecast: " + weatherConditions);
        console.log("item number:" +i)
        
        //DATE//
        var date = day[i].dt_txt
        console.log(date)
        $("#date-"+i).empty().append(date)

        //TEMP//
        var currentTemp = day[i].main.temp;
        console.log(currentTemp);
        $("#temp-" + i)
          .empty()
          .append("Temperature: " + currentTemp + " F");
        //WIND//
        var windSpeed = day[i].wind.speed;
        console.log(windSpeed);
        $("#windspeed-" + i)
          .empty()
          .append("Wind Speed: " + windSpeed + " mph");

        //HUMIDITY//
        var humidity = day[i].main.humidity;
        console.log(humidity);
        $("#humidity-" + i)
          .empty()
          .append("Humidity: " + humidity + "%");

        //ICON//

        var iconcode = day[i].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $("#icon-" + i).attr("src", iconurl);
        console.log(iconurl);
      }
    });
}
getApi();
renderUserSearch();

// searchBtn.on("click", userInputCitySubmit); // this is current working button.

//currently setup so userInputCitySubmit fires off on click still but also stores item in localStorage
searchBtn.on("click", function (event) {
  event.preventDefault();
  // var userSearch = $("#search-input").val();
  var userCityInput = $('input[name="city-input"]').val();
  userInputCitySubmit(userCityInput);
  createButton(userCityInput);
  // localStorage.setItem("userSearch", JSON.stringify(userSearch));
  // if (userSearch === "") {
  //   alert("Search Criteria Undefined, Please Specify City Name");
  // }

  // var data = {
  //   userSearch: $("#search-input").val(),
  // };
  // localStorage.setItem("data", JSON.stringify(data));
  // for (var i = 0; i < 11; i++) {}
  // });
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
});
