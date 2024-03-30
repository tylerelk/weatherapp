//imports
import Forecast from "./modules/forecast";
import DOMRender from "./modules/dom";
import InitialLocation from "./modules/initiallocation";
import Card from "./modules/card";

//variables
const weatherAPIKey = 'b58c63519071410d91613011243003';
const root = document.querySelector('.root-div');

async function render() {
    //Initialize site
    const location = await InitialLocation();
    const weather = await Forecast(`${location.latitude},${location.longitude}`, weatherAPIKey);
    console.log(weather);
    DOMRender();
    //testing card construction
    let unit = 'farenheit';
    let weatherReport = new Card(weather.now, weather.forecast, unit);
    let forecast = weatherReport.renderFuture();
    root.appendChild(weatherReport.renderToday());
    forecast.forEach(day => root.appendChild(day));

    //Change location/units
    const locationSubmit = document.querySelector('.submit-btn');
    locationSubmit.addEventListener('click', async (e) => {
        e.preventDefault();
        let location = document.querySelector('#location-input').value;
        console.log(await Forecast(location, weatherAPIKey));
    });
    const tempSelect = document.querySelectorAll('.temp-switch');
    tempSelect.forEach(option => {
        option.addEventListener('click', (e) => {
            unit = e.target.value;
            root.innerHTML = '';
            root.appendChild(weatherReport.renderToday());
        })
    })
};

render();