
window.onload = () => {
    let menuButton = document.querySelector('#navbar-button');
    let menu = document.querySelector('#navbar-menu');
    let closeButton = document.querySelector('#navbar-close-button');

    menuButton.addEventListener('click', (event) => {
        event.preventDefault();
        menu.classList.toggle('show-navbar-menu');
    });

    menuButton.addEventListener('touchend', (event) => {
        event.preventDefault();
        menu.classList.toggle('show-navbar-menu');
    });

    closeButton.addEventListener('click', (event) =>  {
        event.preventDefault();
        menu.classList.toggle('show-navbar-menu');
    });

    closeButton.addEventListener('touchend', (event) =>  {
        event.preventDefault();
        menu.classList.toggle('show-navbar-menu');
    });
};