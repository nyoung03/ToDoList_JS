const API_KEY = config.SECRET_KEY;
const weatherImg = document.querySelector("#weather-icon");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather div:first-child");
      const city = document.querySelector("#weather div:last-child");
      const weatherIcon = data.weather[0].icon;
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      city.innerText = data.name;
      weather.innerText = `오늘의 날씨는 ${data.weather[0].main} / ${data.main.temp}`;
      weatherImg.setAttribute("src", weatherIconAdrs);
    });
}

function onGeoError() {
  alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
