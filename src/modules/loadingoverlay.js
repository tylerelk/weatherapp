export default function Loader() {
    const overlay = document.createElement('div');
    const message = document.createElement('h3');
    const spinner = document.createElement('div');

    overlay.setAttribute('id', 'loading-screen');

    spinner.style.borderRadius = '50%';
    spinner.style.border = '10px solid grey';
    spinner.style.borderTop = '10px solid black';
    spinner.style.borderBottom = '10px solid black';
    spinner.style.width = '20rem';
    spinner.style.height = '20rem';
    spinner.style.marginTop = '20%';

    spinner.animate([
        {transform: 'rotate(0)'},
        {transform: 'rotate(360deg)'}
    ], {
        duration: 1000,
        iterations: Infinity,
    });

    message.textContent = 'Loading...';

    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = '#cccccc80';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.transition = '300ms';

    overlay.animate([
        {opacity: '0'},
        {opacity: '100%'}
    ],
    {
        duration: 300,
        iterations: 1
    })

    overlay.appendChild(spinner);
    overlay.appendChild(message);

    return overlay;
}

export function showLoader() {
    const loader = document.getElementById('loading-screen');
    loader.style.opacity = '100%';
}

export function hideLoader() {
    const loader = document.getElementById('loading-screen');
    loader.style.opacity = '0';
}