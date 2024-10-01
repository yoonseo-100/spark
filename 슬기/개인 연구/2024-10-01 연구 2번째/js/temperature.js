const temperature = document.querySelector<HTMLSpanElement>("#temperature span");

function fetchTemperature(): void {
    const lat = 37.5665;  // 서울의 위도
    const lon = 126.9780;  // 서울의 경도
    const apiKey = "69aade5bc2ef530d39e773666f331598";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (temperature) {
                temperature.innerText = `Temperature: ${data.main.temp}°C`;
            }
        })
        .catch(error => console.log('Error fetching temperature:', error));
}

fetchTemperature();
