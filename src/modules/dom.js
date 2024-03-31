import Card from "./card";
import Forecast from "./forecast";
import Loader, {showLoader, hideLoader} from "./loadingoverlay";
import SetWeatherTheme from './theme'

export default async function DOMRender(newLocation, units) {
  const APIkey = "b58c63519071410d91613011243003";
  let weather;
  const root = document.querySelector(".root-div");
  root.appendChild(Loader());

  try {
    showLoader();
    weather = await Forecast(newLocation, APIkey);
    if (weather.error) {
      throw new Error(weather.error);
    };
    hideLoader();
  } catch (error) {
    hideLoader();
    console.error('Error fetching weather: ' + error);
    document.getElementById('loading-screen').style.visibility = 'none';
  }
  
  SetWeatherTheme(weather.now.code);

  const weatherDisplay = new Card(weather.now, weather.forecast, units, weather.location.time);
  const weatherDisplayFuture = weatherDisplay.renderFuture();

  const mainArea = document.createElement('div');
  const forecastContainer = document.createElement('div');
  const currentLocation = document.createElement("h3");
  const inputArea = document.createElement("div");
  const inputForm = document.createElement("div");
  const locationLabel = document.createElement("label");
  const locationInput = document.createElement("input");
  const locationSubmit = document.createElement("button");
  const tempSwitch = document.createElement("div");
  const celsSwitch = document.createElement("button");
  const farenSwitch = document.createElement("button");

  mainArea.classList.add('main-area');
  forecastContainer.classList.add('forecast-container');
  inputArea.classList.add('header');
  locationLabel.setAttribute("for", "location-input");
  locationInput.setAttribute("id", "location-input");
  locationInput.setAttribute("type", "text");
  locationInput.setAttribute("placeholder", "Enter City, Zip, etc.");
  locationSubmit.setAttribute("value", "Search");
  locationSubmit.classList.add("submit-btn");
  locationSubmit.classList.add("btn");
  tempSwitch.setAttribute("id", "temp-switch");
  celsSwitch.setAttribute("id", "celsius-switch");
  celsSwitch.setAttribute("value", "celsius");
  celsSwitch.classList.add("temp-switch");
  farenSwitch.setAttribute("id", "farenheit-switch");
  farenSwitch.setAttribute("value", "farenheit");
  farenSwitch.classList.add("temp-switch");
  currentLocation.classList.add('current-location');

  locationSubmit.addEventListener("click", () => {
    if (!locationInput.value) {
      locationInput.setAttribute("placeholder", "Enter a location!");
    } else {
      DOMRender(locationInput.value, units);
    }
  });

  inputForm.appendChild(locationLabel);
  inputForm.appendChild(locationInput);
  inputForm.appendChild(locationSubmit);
  inputForm.classList.add('location-input');

  tempSwitch.appendChild(celsSwitch);
  tempSwitch.appendChild(farenSwitch);

  tempSwitch.childNodes.forEach((node) => {
    node.addEventListener("click", (e) => {
      DOMRender(newLocation, e.target.value);
    });
  });

  if (weather.location.region === weather.location.country || weather.location.region === weather.location.city) {
    currentLocation.innerHTML = weather.location.city + '<br>' + weather.location.country;
  } else {
    currentLocation.innerHTML = weather.location.city + '<br>' + weather.location.region + '<br>' + weather.location.country;
  }
  locationLabel.textContent = "Location: ";
  celsSwitch.textContent = "C°";
  farenSwitch.textContent = "F°";
  locationSubmit.textContent = "Search";

  inputArea.appendChild(inputForm);
  inputArea.appendChild(tempSwitch);

  root.innerHTML = '';

  mainArea.appendChild(inputArea);
  mainArea.appendChild(currentLocation);
  mainArea.appendChild(weatherDisplay.renderToday());
  mainArea.appendChild(forecastContainer);
  weatherDisplayFuture.forEach((day) => forecastContainer.appendChild(day));

  root.appendChild(mainArea);
}
