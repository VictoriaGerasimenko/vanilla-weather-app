function displayWeatherCondition(response) {
  let city = document.querySelector("h1");
  city.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  let description = document.querySelector(".description");
  description.innerHTML = response.data.weather[0].description;
  let temp = document.querySelector("strong");
  temp.innerHTML = Math.round(response.data.main.temp);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = response.data.main.pressure;
}
function searchCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputCity").value;
  console.log(inputCity);
  let apiKey = "7ec50fc0a595f3c817fb74829d724ff2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let inputElement = document.querySelector("#search-form");
inputElement.addEventListener("submit", searchCity);
