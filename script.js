currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var userLocation;

$(".btn").on('click', function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        $(".card-title").html(currentTime)
       displaycurrentConditions()
    }

})

function showPosition(position){
    const userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude

    };
    console.log("User Location", userLocation)
    getWeather(userLocation)

}

// Get Weather
function getWeather(userLocation){
    var apiKey = "8508d545d4e36b4c3c13e5d8071e830e";
    queryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${apiKey}&units=imperial`

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log("OpenWeather Response", response)
        const weatherData = {
         currentHumidity : response.main.humidity,
         currentWind : response.wind.speed,
         currentTemp : response.main.temp,
         currentConditions : response.weather[0].description,
         icon : response.weather[0].icon,
        }
        console.log("Weather Data used", weatherData)
        displaycurrentConditions(weatherData)

    })

}

// Check Hair Function
function displaycurrentConditions(weatherData){
    var iconimg = "https://openweathermap.org/img/wn/" + weatherData.icon + "@2x.png"


    if (weatherData.currentHumidity >= 75 || weatherData.currentWind >= 15)
    {
        $(".output").html("Oh Hell Nah")
        $(".humidity").html("Humidity : " + (weatherData.currentHumidity) + "%")
        $(".tempature").html("Temperature : " + (weatherData.currentTemp))
        $(".wind-speed").html("Wind Speed : " + (weatherData.currentWind) + " mph")
        $(".conditions").html((weatherData.currentConditions))
        $(".icon-img").attr('src', iconimg)
        $(".card-button").html(" ")
    }
    else if (weatherData.currentHumidity <= 74 && weatherData.currentHumidity >=70 && weatherData.currentWind >= 15)
    {
        $(".output").html("Probs Not")
        $(".humidity").html("Humidity : " + (weatherData.currentHumidity) + "%")
        $(".tempature").html("Temperature : " + (weatherData.currentTemp))
        $(".wind-speed").html("Wind Speed : " + (weatherData.currentWind) + " mph")
        $(".conditions").html((weatherData.currentConditions))
        $(".icon-img").attr('src', iconimg)
        $(".card-button").html(" ")
    }
    else if (weatherData.currentHumidity <= 69 && weatherData.currentHumidity >= 65 && weatherData.currentWind <= 14)
    {
        $(".output").html("It's Feasible") 
        $(".humidity").html("Humidity : " + (weatherData.currentHumidity) + "%")
        $(".tempature").html("Temperature : " + (weatherData.currentTemp))
        $(".wind-speed").html("Wind Speed : " + (weatherData.currentWind) + " mph")
        $(".conditions").html((weatherData.currentConditions))
        $(".icon-img").attr('src', iconimg)
        $(".card-button").html(" ")
    }
    else if (weatherData.currentHumidity <= 64 && weatherData.currentWind < 15){
        $(".output").html("Lookin Pretty Good")
        $(".humidity").html("Humidity : " + (weatherData.currentHumidity) + "%")
        $(".tempature").html("Temperature : " + (weatherData.currentTemp))
        $(".wind-speed").html("Wind Speed : " + (weatherData.currentWind) + " mph")
        $(".conditions").html((weatherData.currentConditions))
        $(".icon-img").attr('src', iconimg)
        $(".card-button").html(" ")
    }
};
