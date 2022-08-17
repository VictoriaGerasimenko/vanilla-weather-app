function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `Last updated: ${day} ${hour}:${minute}`;
}

function displayWeatherCondition(response) {
  let city = document.querySelector("h1");
  city.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  let description = document.querySelector(".description");
  description.innerHTML = response.data.weather[0].description;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  let temp = document.querySelector("strong");
  celsiusTemp = response.data.main.temp;
  temp.innerHTML = Math.round(celsiusTemp);
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

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("strong");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  tempElement.innerHTML = Math.round(fahrenheitTemp);
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("strong");
  tempElement.innerHTML = Math.round(celsiusTemp);
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
}
let inputElement = document.querySelector("#search-form");
inputElement.addEventListener("submit", searchCity);

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);
