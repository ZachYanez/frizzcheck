var location;
var userLocation;
var x = $(".card-text").val
// var userlatitude = userLocation.latitude 
// var userlongitude = userLocation.longitude


$(".btn").on('click', function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        getWeather()
    }
    else  (!navigator.geolocation) 
    { 
        alert("Need location to determine your hair day")
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


function getWeather(userLocation){
    var apiKey = "8508d545d4e36b4c3c13e5d8071e830e";
    console.log(userLocation.latitude)
    queryURL = `http://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${apiKey}&units=imperial`

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response)
    }
    
    )
}