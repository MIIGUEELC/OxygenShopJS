class Slider {
    constructor(sliderId) {
        // Selecciona el contenedor del slider usando el ID
        const sliderContainer = document.getElementById(sliderId);
        this.slides = document.querySelectorAll('.slider__container__slide'); // Selecciona las imágenes del slider
        this.dots = document.querySelectorAll('.slider__container__dots__dot'); // Selecciona los puntos del slider
        this.currentSlide = 0;
        this.maxSlide = this.slides.length - 1;
    }
    
    slidePosition = () => {
        this.slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - this.currentSlide)}%)`;
        });
    }

    nextSlide = () => {
        this.currentSlide === this.maxSlide ? this.currentSlide = 0 : this.currentSlide++;
    } 

    previousSlide = () => {
        this.currentSlide === 0 ? this.currentSlide = this.maxSlide : this.currentSlide--;
    }
    
    setAutomatic = () => {
        setTimeout(() => {
            this.nextSlide();
            this.slidePosition();
            this.updateDots();
            this.setAutomatic();
        }, 5000);
    }

    updateDots = () => {
        this.dots.forEach((dot, index) => {
            index === this.currentSlide ? dot.classList.add('selected') : dot.classList.remove('selected');
        });
    }

    dotsHandle = () => {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.currentSlide = index; // Cambié a 'this.currentSlide'
                this.slidePosition();
                this.updateDots();
            });
        });
    }
}

// Inicializa el slider pasando el ID
const slider = new Slider("slider"); // Solo se pasa el ID del contenedor
slider.slidePosition();
slider.setAutomatic();
slider.dotsHandle();

const nextButton = document.getElementsByClassName('slider__container__next')[0];
const prevButton = document.getElementsByClassName('slider__container__prev')[0];

nextButton.addEventListener('click', () => {
    slider.nextSlide();
    slider.slidePosition();
    slider.updateDots();
});

prevButton.addEventListener('click', () => {
    slider.previousSlide();
    slider.slidePosition();
    slider.updateDots();
});
