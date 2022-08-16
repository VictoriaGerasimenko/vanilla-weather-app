function displayCurrentTemperature(event) {
  event.preventDefault();
  let city = document.querySelector("#inputCity");
  console.log(city.value);
}
let inputElement = document.querySelector("#search-form");
inputElement.addEventListener("submit", displayCurrentTemperature);

let apiUrl = "7ec50fc0a595f3c817fb74829d724ff2";
