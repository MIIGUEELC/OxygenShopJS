class Slider {
    constructor(sliderId) {
        // Selecciona el contenedor del slider usando el ID
        const sliderContainer = document.getElementById(sliderId);
        this.slides = document.querySelectorAll('.slider__container__slide'); 
        this.dots = document.querySelectorAll('.slider__container__dots__dot'); 
        this.currentSlide = 0;
        this.maxSlide = this.slides.length - 1;
    }
    
    slidePosition = () => {
        this.slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - this.currentSlide)}%)`; //Calculo cuántas unidades de "100%" 
            //mover  a laderecha.
        });
    }

    nextSlide = () => {
        this.currentSlide === this.maxSlide ? this.currentSlide = 0 : this.currentSlide++;  // si estamos en la ultima va al 0
        // si no ala siguiente
    } 

    previousSlide = () => {
        this.currentSlide === 0 ? this.currentSlide = this.maxSlide : this.currentSlide--;// al reves
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
                this.currentSlide = index; // 
                this.slidePosition();
                this.updateDots();
            });
        });
    }
}

// Inicio o instancio una clase slider
const slider = new Slider("slider"); // 
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
