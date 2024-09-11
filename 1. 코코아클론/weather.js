
const API_KEY = "23ed335a8bd126a345a8be72dec77eed"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("넌 여깄다", lat, lng);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`
        });
}
function onGeoError(){
    alert("날씨를 알아봅시다");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
