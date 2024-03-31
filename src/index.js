//imports
import DOMRender from "./modules/dom";
import InitialLocation from "./modules/initiallocation";
import './style.css';

//variables
const weatherAPIKey = 'b58c63519071410d91613011243003';
const root = document.querySelector('.root-div');

async function render() {
    //Initialize site
    const initialLocation = await InitialLocation();
    let unit = 'celsius';
    DOMRender(`${initialLocation.latitude},${initialLocation.longitude}`, unit);
};

render();