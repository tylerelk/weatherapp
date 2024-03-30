import Card from "./card";
import Forecast from "./forecast";

export default async function DOMRender(newLocation, units) {
  const APIkey = "b58c63519071410d91613011243003";
  const weather = await Forecast(newLocation, APIkey);
  const root = document.querySelector(".root-div");

  root.innerHTML = "";

  const weatherDisplay = new Card(weather.now, weather.forecast, units);
  const weatherDisplayFuture = weatherDisplay.renderFuture();

  const currentLocation = document.createElement("h2");
  const inputArea = document.createElement("div");
  const inputForm = document.createElement("div");
  const locationLabel = document.createElement("label");
  const locationInput = document.createElement("input");
  const locationSubmit = document.createElement("button");
  const tempSwitch = document.createElement("div");
  const celsSwitch = document.createElement("button");
  const farenSwitch = document.createElement("button");

  locationLabel.setAttribute("for", "location-input");
  locationInput.setAttribute("id", "location-input");
  locationInput.setAttribute("type", "text");
  locationInput.setAttribute("placeholder", "Enter City, Zip, etc.");
  locationSubmit.setAttribute("value", "Search");
  locationSubmit.classList.add("submit-btn");
  locationSubmit.classList.add("btn");
  tempSwitch.setAttribute("id", "temp-swtch");
  celsSwitch.setAttribute("id", "celsius-switch");
  celsSwitch.setAttribute("value", "celsius");
  celsSwitch.classList.add("temp-switch");
  farenSwitch.setAttribute("id", "farenheit-switch");
  farenSwitch.setAttribute("value", "farenheit");
  farenSwitch.classList.add("temp-switch");

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

  tempSwitch.appendChild(celsSwitch);
  tempSwitch.appendChild(farenSwitch);

  tempSwitch.childNodes.forEach((node) => {
    node.addEventListener("click", (e) => {
      DOMRender(newLocation, e.target.value);
    });
  });

  currentLocation.textContent = `${weather.location.city}, ${weather.location.country}`;
  locationLabel.textContent = "Change Location:";
  celsSwitch.textContent = "C°";
  farenSwitch.textContent = "F°";
  locationSubmit.textContent = "Search";

  inputArea.appendChild(inputForm);
  inputArea.appendChild(tempSwitch);

  root.appendChild(inputArea);
  root.appendChild(currentLocation);
  root.appendChild(weatherDisplay.renderToday());
  weatherDisplayFuture.forEach((day) => root.appendChild(day));
}
