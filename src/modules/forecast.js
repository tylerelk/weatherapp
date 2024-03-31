export default async function Forecast(location, key) {
  const weatherAPI = "https://api.weatherapi.com/v1/forecast.json";
  let result;
  let weather = {
    location: {},
    now: {},
    forecast: [],
  };

  async function getWeather(location, key) {
    try {
      let request = await fetch(
        `${weatherAPI}?key=${key}&q=${location}&days=3`
      );
      if (!request.ok) {
        throw new Error(
          `Server error ${request.status}: ${request.statusText}`
        );
      } else {
        result = await request.json();
      }
    } catch (error) {
        console.log(error.message);
        weather.error = error.message;
        let errorDisplay = document.createElement('span');
        errorDisplay.classList.add('error');
        errorDisplay.textContent = error.message;
        document.querySelector('.location-input').appendChild(errorDisplay);
    }
  }

  await getWeather(location, key);

  weather.location.country = result.location.country;
  weather.location.region = result.location.region;
  weather.location.city = result.location.name;
  weather.location.time = result.location.localtime_epoch;
  weather.now.celsius = result.current["temp_c"];
  weather.now.farenheit = result.current["temp_f"];
  weather.now.icon = result.current.condition.icon;
  weather.now.condition = result.current.condition.text;
  weather.now.code = result.current.condition.code;
  formatDays(result.forecast.forecastday);

  function formatDays(arr) {
    arr.forEach((day) => {
      weather.forecast.push({
        date: day.date_epoch,
        maxCelsius: day.day.maxtemp_c,
        minCelsius: day.day.mintemp_c,
        maxFarenheit: day.day.maxtemp_f,
        minFarenheit: day.day.mintemp_f,
        condition: day.day.condition.text,
        icon: day.day.condition.icon,
      });
    });
  }

  return weather;
}
