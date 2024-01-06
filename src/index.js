function updateWeather(response) {
  let temperatureElement = document.querySelector(".temp");
  let cityElement = document.querySelector(".current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  let icon = response.data.condition.icon_url;

  timeElement.innerHTML = formatDate(date);
  temperature = response.data.temperature.current;
  cityElement.innerHTML = response.data.city;

  iconElement.innerHTML = `<img src="${icon}" alt="icon-weather" class="icon">`;
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity + "%";
  windElement.innerHTML = response.data.wind.speed + "km/h";

  console.log(response.data);
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let todayDate = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let fullYear = date.getFullYear();

  let day = days[date.getDay()];
  let month = months[date.getMonth()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  return `${hour}:${minutes}, ${day}, ${todayDate} ${month} ${fullYear} `;
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
