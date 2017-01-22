$(document).ready(function () {
  // get location infomation
  $.getJSON("http://ipinfo.io/json", function (data) {
    console.log(data);
    $(".city").text(data.city);
    $(".province").text(data.region);
    $(".country").text(data.country);
  }).done(function () {
    // get weather information
    let weather_address = $(".city").text() + "," + $(".country").text();
    console.log("weather_address:" + weather_address);
    let weather_url = "http://api.openweathermap.org/data/2.5/weather?appid=48e87445e865b0e2e7dbd86698cb28c9&units=metric&q=" + weather_address;
    $.getJSON(weather_url, function (data) {
      console.log(data);
      $(".temperature").text(data.main.temp);
      $(".desc").text(data.weather[0].main);
      console.log(data.weather.icon);
      let weather_icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      $(".weather-icon").attr("src", weather_icon);
    });
  });


});