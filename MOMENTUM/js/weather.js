const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const weatherIconImg = document.querySelector('.weatherIcon');
const API_KEY = "b85beca5802436cf301406e407f26efc";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json()
  .then(data => {
    const weatherIcon = data.weather[0].icon;
    const weatherIconAdrs = `https://openweathermap.org/img/w/${weatherIcon}.png`;
    weatherIconImg.setAttribute('src', weatherIconAdrs);
    city.innerText = data.name;
    weather.innerText = data.main.temp;
  }));
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

