const API_KEY = "196fc518884742e7910c722bbb8d8bd9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector(".weather");
            weather.innerText = `${data.weather[0].main}`;

            const temp = document.querySelector(".temp");
            temp.innerText = `${data.main.temp}°C`;

            const city = document.querySelector(".city");
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);