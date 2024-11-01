//  botón de volver al inicio
const returnToTopBtn = document.getElementById('returnToTop'); 

// Añadir un evento de desplazamiento
window.addEventListener('scroll', () => {
    // Comprueba si el desplazamiento es mayor a 400px
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        returnToTopBtn.style.display = "block"; // Muestra el botón
    } else {
        returnToTopBtn.style.display = "none"; // Oculta el botón
    }
});

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
