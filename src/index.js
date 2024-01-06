function updateWeather(response) {
  let temperatureElement = document.querySelector(".temp");
  let cityElement = document.querySelector(".current-city");
  temperature = response.data.temperature.current;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "19eeof4b31b320e40tebc23be8f0a010";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function submitSearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search");

  searchCity(cityInput.value);
}

let submitCity = document.querySelector("#search-form");

submitCity.addEventListener("submit", submitSearch);

searchCity("Kuala Lumpur");
