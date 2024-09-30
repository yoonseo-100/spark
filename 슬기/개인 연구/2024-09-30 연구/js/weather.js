const API_KEY = "69aade5bc2ef530d39e773666f331598";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].description}`; // weather[0].main을 description으로 변경하여 더 자세한 날씨 설명 표시
        });
}

function onGeoError() {
    console.log("위치를 찾을 수 없습니다. 위치 서비스를 활성화하거나 권한을 허용해 주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

