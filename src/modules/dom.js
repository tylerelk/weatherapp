export default function DOMRender() {
    const rootDiv = document.querySelector('.root-div');
    const inputArea = document.createElement('div');
    const inputForm = document.createElement('form');
    const locationLabel = document.createElement('label');
    const locationInput = document.createElement('input');
    const locationSubmit = document.createElement('input');
    const tempSwitch = document.createElement('form');
    const celsLabel = document.createElement('label');
    const celsSwitch = document.createElement('input');
    const farenLabel = document.createElement('label');
    const farenSwitch = document.createElement('input');

    locationLabel.setAttribute('for', 'location-input');
    locationInput.setAttribute('id', 'location-input');
    locationInput.setAttribute('type', 'text');
    locationInput.setAttribute('placeholder', 'Enter City, Zip, etc.');
    locationSubmit.setAttribute('type', 'submit');
    locationSubmit.setAttribute('value', 'Search');
    locationSubmit.classList.add('submit-btn');
    locationSubmit.classList.add('btn');
    tempSwitch.setAttribute('id', 'temp-swtch');
    celsSwitch.setAttribute('type', 'radio');
    celsSwitch.setAttribute('name', 'temp-select');
    celsSwitch.setAttribute('id', 'celsius-switch');
    celsSwitch.setAttribute('value', 'celsius');
    celsSwitch.classList.add('temp-switch');
    farenSwitch.setAttribute('type', 'radio');
    farenSwitch.setAttribute('name', 'temp-select');
    farenSwitch.setAttribute('id', 'farenheit-switch');
    farenSwitch.setAttribute('value', 'farenheit');
    farenSwitch.classList.add('temp-switch');

    inputForm.appendChild(locationLabel);
    inputForm.appendChild(locationInput);
    inputForm.appendChild(locationSubmit);

    tempSwitch.appendChild(celsLabel);
    tempSwitch.appendChild(celsSwitch);
    tempSwitch.appendChild(farenLabel);
    tempSwitch.appendChild(farenSwitch);

    locationLabel.textContent = 'Change Location:';
    celsLabel.textContent = 'C°';
    farenLabel.textContent = 'F°';

    inputArea.appendChild(inputForm);
    inputArea.appendChild(tempSwitch);

    rootDiv.appendChild(inputArea);
}