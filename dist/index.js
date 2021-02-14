var userLocation;function showPosition(t){const e={latitude:t.coords.latitude,longitude:t.coords.longitude};console.log("User Location",e),getWeather(e)}function getWeather(t){queryURL=`https://api.openweathermap.org/data/2.5/weather?lat=${t.latitude}&lon=${t.longitude}&appid=8508d545d4e36b4c3c13e5d8071e830e&units=imperial`,$.ajax({url:queryURL,method:"GET"}).then(function(t){console.log("OpenWeather Response",t);const e={currentHumidity:t.main.humidity,currentWind:t.wind.speed,currentTemp:t.main.temp,currentConditions:t.weather[0].description,icon:t.weather[0].icon};console.log("Weather Data used",e),displaycurrentConditions(e)})}function displaycurrentConditions(t){const e="https://openweathermap.org/img/wn/"+t.icon+"@2x.png";t.currentWind>=20?($(".output").html("It's pretty windy out there so..."),$(".humidity").html("Humidity : "+t.currentHumidity+"%"),$(".tempature").html("Temperature : "+t.currentTemp),$(".wind-speed").html("Wind Speed : "+t.currentWind+" mph"),$(".conditions").html(t.currentConditions),$(".icon-img").attr("src",e),$(".card-button").html(" ")):t.currentHumidity>=75?($(".output").html("✨ Absolutely Not ✨"),$(".humidity").html("Humidity : "+t.currentHumidity+"%"),$(".tempature").html("Temperature : "+t.currentTemp),$(".wind-speed").html("Wind Speed : "+t.currentWind+" mph"),$(".conditions").html(t.currentConditions),$(".icon-img").attr("src",e),$(".card-button").html(" ")):t.currentHumidity<=74&&t.currentHumidity>=70?($(".output").html("Probs Not"),$(".humidity").html("Humidity : "+t.currentHumidity+"%"),$(".tempature").html("Temperature : "+t.currentTemp),$(".wind-speed").html("Wind Speed : "+t.currentWind+" mph"),$(".conditions").html(t.currentConditions),$(".icon-img").attr("src",e),$(".card-button").html(" ")):t.currentHumidity<=69&&t.currentHumidity>=65?($(".output").html("It's Feasible"),$(".humidity").html("Humidity : "+t.currentHumidity+"%"),$(".tempature").html("Temperature : "+t.currentTemp),$(".wind-speed").html("Wind Speed : "+t.currentWind+" mph"),$(".conditions").html(t.currentConditions),$(".icon-img").attr("src",e),$(".card-button").html(" ")):t.currentHumidity<=64&&($(".output").html("Lookin Pretty Good"),$(".humidity").html("Humidity : "+t.currentHumidity+"%"),$(".tempature").html("Temperature : "+t.currentTemp),$(".wind-speed").html("Wind Speed : "+t.currentWind+" mph"),$(".conditions").html(t.currentConditions),$(".icon-img").attr("src",e),$(".card-button").html(" "))}currentTime=moment().format("MMMM Do YYYY, h:mm:ss a"),$(".btn").on("click",function(){navigator.geolocation&&(navigator.geolocation.getCurrentPosition(showPosition),$(".card-title").html(currentTime),displaycurrentConditions())});