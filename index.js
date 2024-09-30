let newCity = "Abuja";
let apiKey = `0b6410a3b1bfe35o6c4e94f90d43bt09`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${newCity}&key=${apiKey}`;

function displayTemperature(response) {
  // console.log(response)//logs the data or info inside the object
  //   console.log(response.data.temperature.current); // logs the current temp of that city
  let temperatureElement = document.querySelector("#temp");
  let city = response.data.city;
  let country = response.data.country;
  let description = response.data.condition.description;

  temp = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `The current temperature in ${city},${country} is ${temp} ° C (${description})`;
}

axios.get(apiUrl).then(displayTemperature);
