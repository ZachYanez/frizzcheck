var location = navigator.geolocation.getCurrentPosition()

$(".btn").on('click', function(){
    if (navigator.geolocation){
        console.log(navigator.geolocation)
    }




})

console.log(navigator.geolocation.getCurrentPosition())