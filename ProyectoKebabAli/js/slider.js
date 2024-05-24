/* JavaScript del slider */

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
}, 10000); // Cambia a 10000 ms (10 segundos) para que el cambio sea más lento
