

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
const checkboxContainer = document.getElementById('checkboxContainer');
const submit = document.getElementById('submit');
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regexName = /^[a-zA-Z\s]+$/;

form.addEventListener('submit', e =>{
    e.preventDefault()
    //let valueName = '' // usar valueof
    let valueName = null  // para usar value 
    if (clientName.value.length < 2 || clientName.value.length > 100 || !regexName.test(clientName.value)) {
        clientName.classList.add('input--invalid');
        alert('El nombre debe tener entre 2 y 100 caracteres y no puede contener números');
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
       // checkboxContainer.classList.add('checkbox--invalid');
        alert('acepte las condiciones para enviar el formulario');
    } else{
        checkbox.classList.remove('checkbox--invalid');
    }
   
    
    //Send data to server
    if (valueName && regexEmail.test(clientEmail.value) && checkbox.checked){
        const data = {
            name: valueName.value,
            email: clientEmail.value
        }
        enviarAJson(data);
        alert('datos enviados correctamente'); 
        clientName.value = '';
        clientEmail.value = '';
        checkbox.checked = false;
    }
});