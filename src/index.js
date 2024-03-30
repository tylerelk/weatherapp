//imports
import Forecast from "./modules/forecast";

//variables
const root = document.querySelector('.root-div');
const weatherAPIKey = 'b58c63519071410d91613011243003';

async function render() {
    console.log(await Forecast('sydney', weatherAPIKey));
};

render();