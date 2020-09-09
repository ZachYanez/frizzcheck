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
    console.log(userLocation)
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
        console.log(response)
        const weatherData = {
         currentHumidity : response.main.humidity,
         currentWind : response.wind.speed,
         currentTemp : response.main.temp,
         currentConditions : response.weather[0].description,
         icon : response.weather[0].icon,
        }
        console.log(weatherData)
        displaycurrentConditions(weatherData)

    })

}

// Check Hair Function
function displaycurrentConditions(weatherData){
    var iconimg = "https://openweathermap.org/img/wn/" + weatherData.icon + "@2x.png"


    if (weatherData.currentHumidity >= 65 || weatherData.currentWind >= 9)
    {
        $(".card-text1").html("Not So Much")
        $(".card-text2").html("Temperature : " + (weatherData.currentTemp))
        $(".card-text3").html("Wind Speed : " + (weatherData.currentWind) + " mph")
        $(".card-text4").html((weatherData.currentConditions))
        $(".card-text5").html("Humidity : " + (weatherData.currentHumidity) + "%")
        $(".card-text6").attr('src', iconimg)
        $(".card-button").html(" ")
    }
    else if (weatherData.currentHumidity <= 64 && weatherData.currentWind < 9){
        $(".card-text1").html("Lookin Pretty Good")
        $(".card-text2").html("Temperature : " + (weatherData.currentTemp))
        $(".card-text3").html("Wind Speed : " + (weatherData.currentWind) + " mph")
        $(".card-text4").html((weatherData.currentConditions))
        $(".card-text5").html("Humidity : " + (weatherData.currentHumidity) + "%")
        $(".card-text6").attr('src', iconimg)
        $(".card-button").html(" ")
    }
}