let menu = document.querySelector('.header__navigation__list');
let iconBurger = document.querySelector('.header__navigation--menu-icon-symbol');


const burgerMenu = () => {
    
    const isMenuOpen = iconBurger.src.includes("Menu.png"); 

    if (isMenuOpen) {
        
        menu.classList.add('header__navigation__list--open');
        iconBurger.src = "images/Frame 14.png"; // Cambiar a la imagen de cerrar
    } else {
        
        menu.classList.remove('header__navigation__list--open');
        iconBurger.src = "images/Menu.png"; // Volver a la imagen de hamburguesa
    }
};

iconBurger.addEventListener('click', burgerMenu);

window.onresize = () => {
    if (window.innerWidth > 1000) {
        menu.classList.remove('header__navigation__list--open');
        iconBurger.src = "images/Menu.png"; //
    }
};