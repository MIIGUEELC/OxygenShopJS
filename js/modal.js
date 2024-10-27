
const modalId = document.getElementById('modal');
const Modal = document.getElementById('close_modal');
const openModal = document.getElementById('send_modal');
const emailModal = document.getElementById('email_modal');
const nameModal = document.getElementById('name_modal');

let stateModal = false;

const open=()=>{
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