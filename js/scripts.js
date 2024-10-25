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

// scroller.

window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    
    // con esto saco la altura total desplazable restando ala altura total del documento la altura que podemos ver
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollPosition = window.scrollY;

    const scrollPercentage = (scrollPosition / totalScrollHeight) * 100;

    // Ajustar el ancho de la barra de progreso
    progressBar.style.width = `${scrollPercentage}%`;
});

// para el boton 

const returnToTopBtn = document.getElementById('returnToTop');

// Mostrar el botón solo cuando desplazemos , he puesto 400 por poner una medida
window.onscroll = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        returnToTopBtn.style.display = "block";
    } else {
        returnToTopBtn.style.display = "none";
    }
};

// Función para el desplazamiento suave
const smoothScrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Scroll suave
        });
    }, 200);
};

returnToTopBtn.addEventListener('click', smoothScrollToTop);

// validacion form 

const enviarAJson = data => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(data),  // esto es para hacerlo JSON
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) =>{
        console.log('form enviado')
        console.log(json)
    });
};

const form = document.getElementById('form');
const clientName = document.getElementById('clientName');
const clientEmail = document.getElementById('clientEmail');
const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit');
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.addEventListener('submit', e =>{
    e.preventDefault()
    //let valueName = '' // usar valueof
    let valueName = null  // para usar value 
    if (clientName.value.length < 2 || clientName.value.length > 100){
        clientName.classList.add('input--invalid');
        alert('el nombre tiene que tener entre 2 y 100 caracteres')
    }else{
        valueName = clientName
        clientName.classList.remove('input--invalid');
    }
    if(!regexEmail.test(clientEmail.value)){
        clientEmail.classList.add('input--invalid');
        alert('Email incorrecto');
    }else{
        clientEmail.classList.remove('input--invalid');
    }
    if(!checkbox.checked){
        checkbox.classList.add('checkbox--invalid');
        alert('acepte las condiciones para enviar el formulario');
    } else{
        checkbox.classList.remove('checkbox--invalid');
    }
    alert('datos enviados correctamente');
    
    //Send data to server
    if (valueName.value && regexEmail.test(clientEmail.value) && checkbox.checked){
        const data = {
            name: valueName.value,
            email: clientEmail.value
        }
        enviarAJson(data);
        clientName.value = '';
        clientEmail.value = '';
        checkbox.checked = false;
    }
});

//Modal
const modalId = document.getElementById('modal');
const Modal = document.getElementById('close_modal');
const openModal = document.getElementById('send_modal');
const emailModal = document.getElementById('email_modal');
const nameModal = document.getElementById('name_modal');

let stateModal = false;

function open(){
    modalId.showModal()
    stateModal = true;
}
setTimeout(open, 5000);

Modal.addEventListener('click', event => {
    CloseModal(event, 'click');
})
document.addEventListener("keydown", event => {
    CloseModal(event, 'escape');
})

modalId.addEventListener('click', event => {
    CloseModal(event, 'modalId');
});

function CloseModal(event, option){
    if(stateModal){
        if ((option == 'click') || 
        (option == 'escape' && event.key === 'Escape') ||   // esto para tecla esc
        (option == 'modalId' && event.target === modalId)){ //para hacer click fuera
        modalId.close();
        stateModal = false;
        }
    }
}

openModal.addEventListener('click', ()=>{  
    if(!regexEmail.test(emailModal.value)){ // le pasamos la misma expresion regular
        emailModal.classList.add('input--invalid');
        alert('Email incorrecto');
        setTimeout(open, 5000);
    }else{
        emailModal.classList.remove('input--invalid');
    }
    if(regexEmail.test(emailModal.value)){
        const data = {
            name: nameModal.value,
            email: emailModal.value
        }
        enviarAJson(data);
    }
    
})


// cambio de moneda
const selector = document.getElementById('moneda')
const basic = document.getElementById('basic')
const professional = document.getElementById('professional')
const premium = document.getElementById('premium')
selector.addEventListener('changeCoin', () => {
    const selectedmoneda = selector.value
    const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
    fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();

        
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }

    })
    
})




