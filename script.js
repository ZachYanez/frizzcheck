var location = navigator.geolocation.getCurrentPosition()

$(".btn").on('click', function(){
    geolocation.getCurrentPosition()
    if (geolocation.getCurrentPosition()) {
        console.log(position)
    }




})

console.log(navigator.geolocation.getCurrentPosition())