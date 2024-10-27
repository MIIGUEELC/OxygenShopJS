// let menu = document.querySelector('.header__navigation__list');
// let iconBurger = document.querySelector('.header__navigation--menu-icon-symbol');
// console.log(iconBurger.textContent);  
// console.log(menu.textContent);

// const burgerMenu = () => {

//     if(iconBurger.innerHTML == "☰"){
//         menu.style.position = 'relative';
//         menu.style.visibility = 'visible';
//         menu.style.display = 'block';

//         iconBurger.innerHTML = "⛌"
        
//     } else if(iconBurger.innerHTML == "⛌"){
//         menu.style.position = 'absolute';
//         menu.style.visibility = 'hidden';
//         iconBurger.innerHTML = "☰"

//         window.onresize = () => {  // cambiar el onresize 
//             if(window.innerWidth>1000){
//                 menu.style.display= 'flex';
//                 menu.style.position = 'relative';
//                 menu.style.visibility = 'visible';
//                 iconBurger.innerHTML = "☰"
//             }else{
//                 menu.style.position = 'absolute';
//                 menu.style.visibility = 'hidden';
//             }
//         }   
//     }
        
    
// }mala manera muchos estilos

// manera cambaindo dinamicamente las clases.


// let menu = document.querySelector('.header__navigation__list');
// let iconBurger = document.querySelector('.header__navigation--menu-icon-symbol');


// const burgerMenu = () => {
    
//     const isMenuOpen = iconBurger.src.includes("Menu.png"); 

//     if (isMenuOpen) {
        
//         menu.classList.add('header__navigation__list--open');
//         iconBurger.src = "images/Frame 14.png"; // Cambiar a la imagen de cerrar
//     } else {
        
//         menu.classList.remove('header__navigation__list--open');
//         iconBurger.src = "images/Menu.png"; // Volver a la imagen de hamburguesa
//     }
// };

// iconBurger.addEventListener('click', burgerMenu);

// window.onresize = () => {
//     if (window.innerWidth > 1000) {
//         menu.classList.remove('header__navigation__list--open');
//         iconBurger.src = "images/Menu.png"; //
//     }
// };

// scroller.

// window.addEventListener('scroll', () => {
//     const progressBar = document.getElementById('progressBar');
    
//     // con esto saco la altura total desplazable restando ala altura total del documento la altura que podemos ver
//     const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

//     const scrollPosition = window.scrollY;

//     const scrollPercentage = (scrollPosition / totalScrollHeight) * 100;

//     // Ajustar el ancho de la barra de progreso
//     progressBar.style.width = `${scrollPercentage}%`;
// });


// // para el boton 

// const returnToTopBtn = document.getElementById('returnToTop');

// // Mostrar el botón solo cuando desplazemos , he puesto 400 por poner una medida
// window.onscroll = () => {  // conaddevenlistener 
//     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
//         returnToTopBtn.style.display = "block";
//     } else {
//         returnToTopBtn.style.display = "none";
//     }
// };

// // Función para el desplazamiento suave
// const smoothScrollToTop = () => {
//     setTimeout(() => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth" // Scroll suave
//         });
//     }, 200);
// };

// returnToTopBtn.addEventListener('click', smoothScrollToTop);

// // validacion form 

// const enviarAJson = data => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify(data),  // esto es para hacerlo JSON
//         headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((json) =>{
//         console.log('form enviado')
//         console.log(json)
//     });
// };

// const form = document.getElementById('form');
// const clientName = document.getElementById('clientName');
// const clientEmail = document.getElementById('clientEmail');
// const checkbox = document.getElementById('checkbox');
// const submit = document.getElementById('submit');
// const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// form.addEventListener('submit', e =>{
//     e.preventDefault()
//     //let valueName = '' // usar valueof
//     let valueName = null  // para usar value 
//     if (clientName.value.length < 2 || clientName.value.length > 100){
//         clientName.classList.add('input--invalid');
//         alert('el nombre tiene que tener entre 2 y 100 caracteres')
//     }else{
//         valueName = clientName
//         clientName.classList.remove('input--invalid');
//     }
//     if(!regexEmail.test(clientEmail.value)){
//         clientEmail.classList.add('input--invalid');
//         alert('Email incorrecto');
//     }else{
//         clientEmail.classList.remove('input--invalid');
//     }
//     if(!checkbox.checked){
//         checkbox.classList.add('checkbox--invalid');
//         alert('acepte las condiciones para enviar el formulario');
//     } else{
//         checkbox.classList.remove('checkbox--invalid');
//     }
//     alert('datos enviados correctamente'); // cambiar esto para que salga solo caso ok
    
//     //Send data to server
//     if (valueName.value && regexEmail.test(clientEmail.value) && checkbox.checked){
//         const data = {
//             name: valueName.value,
//             email: clientEmail.value
//         }
//         enviarAJson(data);
//         clientName.value = '';
//         clientEmail.value = '';
//         checkbox.checked = false;
//     }
// });

// //Modal
// const modalId = document.getElementById('modal');
// const Modal = document.getElementById('close_modal');
// const openModal = document.getElementById('send_modal');
// const emailModal = document.getElementById('email_modal');
// const nameModal = document.getElementById('name_modal');

// let stateModal = false;

// const open=()=>{
//     modalId.showModal()
//     stateModal = true;
// }
// setTimeout(open, 5000);

// Modal.addEventListener('click', event => {
//     CloseModal(event, 'click');
// })
// document.addEventListener("keydown", event => {
//     CloseModal(event, 'escape');
// })

// modalId.addEventListener('click', event => {
//     CloseModal(event, 'modalId');
// });

// function CloseModal(event, option){
//     if(stateModal){
//         if ((option == 'click') || 
//         (option == 'escape' && event.key === 'Escape') ||   // esto para tecla esc
//         (option == 'modalId' && event.target === modalId)){ //para hacer click fuera
//         modalId.close();
//         stateModal = false;
//         }
//     }
// }

// openModal.addEventListener('click', ()=>{  
//     if(!regexEmail.test(emailModal.value)){ // le pasamos la misma expresion regular
//         emailModal.classList.add('input--invalid');
//         alert('Email incorrecto');
//         setTimeout(open, 5000);
//     }else{
//         emailModal.classList.remove('input--invalid');
//     }
//     if(regexEmail.test(emailModal.value)){
//         const data = {
//             name: nameModal.value,
//             email: emailModal.value
//         }
//         enviarAJson(data);
//     }
    
// })


// // cambio de moneda
// const selector = document.getElementById('moneda');  // Selects the currency dropdown
// const basic = document.getElementById('basic');  // Selects the Basic price
// const professional = document.getElementById('professional');  // Selects the Professional price
// const premium = document.getElementById('premium');  // Selects the Premium price

// selector.addEventListener('change', () => {
//     const selectedCoin = selector.value;  // Gets the selected currency
//     const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
    
//     fetch(url)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json().then((data) => {
//                     if (selectedCoin === 'eur') {
//                         changePrice("€", data.usd.eur);
//                     } else if (selectedCoin === 'gbp') {
//                         changePrice("£", data.usd.gbp);
//                     } else if (selectedCoin === 'usd') {
//                         changePrice("$", data.usd.usd);
//                     }
//                 });
//             } else {
//                 throw new Error("Error on network response");
//             }
//         })
//         .catch((error) => {
//             console.log('Error: ' + error); 
//         });
// });

// const changePrice = (symbol, conversion) => {
//     const basicPrice = 0;
//     const professionalPrice = (25 * conversion).toFixed(2);
//     const premiumPrice = (60 * conversion).toFixed(2);

//     basic.innerText = `${symbol}${basicPrice}`;  
//     professional.innerText = `${symbol}${professionalPrice}`;  
//     premium.innerText = `${symbol}${premiumPrice}`;  
// // };
// class Slider {
//     constructor(sliderId) {
//         // Selecciona el contenedor del slider usando el ID
//         const sliderContainer = document.getElementById(sliderId);
//         this.slides = document.querySelectorAll('.slider__container__slide'); // Selecciona las imágenes del slider
//         this.dots = document.querySelectorAll('.slider__container__dots__dot'); // Selecciona los puntos del slider
//         this.currentSlide = 0;
//         this.maxSlide = this.slides.length - 1;
//     }
    
//     slidePosition = () => {
//         this.slides.forEach((slide, index) => {
//             slide.style.transform = `translateX(${100 * (index - this.currentSlide)}%)`;
//         });
//     }

//     nextSlide = () => {
//         this.currentSlide === this.maxSlide ? this.currentSlide = 0 : this.currentSlide++;
//     } 

//     previousSlide = () => {
//         this.currentSlide === 0 ? this.currentSlide = this.maxSlide : this.currentSlide--;
//     }
    
//     setAutomatic = () => {
//         setTimeout(() => {
//             this.nextSlide();
//             this.slidePosition();
//             this.updateDots();
//             this.setAutomatic();
//         }, 5000);
//     }

//     updateDots = () => {
//         this.dots.forEach((dot, index) => {
//             index === this.currentSlide ? dot.classList.add('selected') : dot.classList.remove('selected');
//         });
//     }

//     dotsHandle = () => {
//         this.dots.forEach((dot, index) => {
//             dot.addEventListener('click', () => {
//                 this.currentSlide = index; // Cambié a 'this.currentSlide'
//                 this.slidePosition();
//                 this.updateDots();
//             });
//         });
//     }
// }

// // Inicializa el slider pasando el ID
// const slider = new Slider("slider"); // Solo se pasa el ID del contenedor
// slider.slidePosition();
// slider.setAutomatic();
// slider.dotsHandle();

// const nextButton = document.getElementsByClassName('slider__container__next')[0];
// const prevButton = document.getElementsByClassName('slider__container__prev')[0];

// nextButton.addEventListener('click', () => {
//     slider.nextSlide();
//     slider.slidePosition();
//     slider.updateDots();
// });

// prevButton.addEventListener('click', () => {
//     slider.previousSlide();
//     slider.slidePosition();
//     slider.updateDots();
// });

