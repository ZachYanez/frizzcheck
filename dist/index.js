currentTime=moment().format("MMMM Do YYYY, h:mm:ss a");var userLocation;$(".btn").on("click",function(){navigator.geolocation&&(navigator.geolocation.getCurrentPosition(showPosition),$(".card-title").html(currentTime),displaycurrentConditions())});function showPosition(a){const b={latitude:a.coords.latitude,longitude:a.coords.longitude};console.log("User Location",b),getWeather(b)}function getWeather(a){queryURL=`https://api.openweathermap.org/data/2.5/weather?lat=${a.latitude}&lon=${a.longitude}&appid=${"8508d545d4e36b4c3c13e5d8071e830e"}&units=imperial`,$.ajax({url:queryURL,method:"GET"}).then(function(a){console.log("OpenWeather Response",a);const b={currentHumidity:a.main.humidity,currentWind:a.wind.speed,currentTemp:a.main.temp,currentConditions:a.weather[0].description,icon:a.weather[0].icon};console.log("Weather Data used",b),displaycurrentConditions(b)})}function displaycurrentConditions(a){const b="https://openweathermap.org/img/wn/"+a.icon+"@2x.png";75<=a.currentHumidity||15<=a.currentWind?($(".output").html("Oh Hell Nah"),$(".humidity").html("Humidity : "+a.currentHumidity+"%"),$(".tempature").html("Temperature : "+a.currentTemp),$(".wind-speed").html("Wind Speed : "+a.currentWind+" mph"),$(".conditions").html(a.currentConditions),$(".icon-img").attr("src",b),$(".card-button").html(" ")):74>=a.currentHumidity||70<=a.currentHumidity&&15<=a.currentWind?($(".output").html("Probs Not"),$(".humidity").html("Humidity : "+a.currentHumidity+"%"),$(".tempature").html("Temperature : "+a.currentTemp),$(".wind-speed").html("Wind Speed : "+a.currentWind+" mph"),$(".conditions").html(a.currentConditions),$(".icon-img").attr("src",b),$(".card-button").html(" ")):69>=a.currentHumidity&&65<=a.currentHumidity&&14>=a.currentWind?($(".output").html("It's Feasible"),$(".humidity").html("Humidity : "+a.currentHumidity+"%"),$(".tempature").html("Temperature : "+a.currentTemp),$(".wind-speed").html("Wind Speed : "+a.currentWind+" mph"),$(".conditions").html(a.currentConditions),$(".icon-img").attr("src",b),$(".card-button").html(" ")):64>=a.currentHumidity&&15>a.currentWind&&($(".output").html("Lookin Pretty Good"),$(".humidity").html("Humidity : "+a.currentHumidity+"%"),$(".tempature").html("Temperature : "+a.currentTemp),$(".wind-speed").html("Wind Speed : "+a.currentWind+" mph"),$(".conditions").html(a.currentConditions),$(".icon-img").attr("src",b),$(".card-button").html(" "))}