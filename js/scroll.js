
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    
    // con esto saco la altura total desplazable restando ala altura total del documento la altura que podemos ver
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollPosition = window.scrollY;

    const scrollPercentage = (scrollPosition / totalScrollHeight) * 100;

    // Ajustar el ancho de la barra de progreso
    progressBar.style.width = `${scrollPercentage}%`;
});