//Carusel
let counter = 1;
const slides = document.querySelector('.carousel-slide');
const totalImages = document.querySelectorAll('.carousel-slide img').length;

const firstClone = slides.firstElementChild.cloneNode(true);
const lastClone = slides.lastElementChild.cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slides.firstElementChild);

slides.style.transform = `translateX(${-100}%)`;

document.querySelector('.carousel-container').addEventListener('click', () => {
    counter++;
    slides.style.transition = 'transform 2s ease-in-out';
    slides.style.transform = `translateX(${-counter * 100}%)`;

    if (counter >= totalImages + 1) {
        setTimeout(() => {
            slides.style.transition = 'none';
            counter = 1;
            slides.style.transform = `translateX(${-100}%)`;
        }, 2000);
    }

    if (counter <= 0) {
        setTimeout(() => {
            slides.style.transition = 'none';
            counter = totalImages;
            slides.style.transform = `translateX(${-counter * 100}%)`;
        }, 2000);
    }
});






//Net Art

document.addEventListener("DOMContentLoaded", function() {
    const shapes = document.querySelectorAll(".abstract-shape");
    shapes.forEach(shape => {
        shape.addEventListener("mouseover", () => {
            shape.style.transform = "scale(1.2)";
        });
        shape.addEventListener("mouseout", () => {
            shape.style.transform = "scale(1)";
        });
    });
});
// Función para abrir y cerrar el menú
function toggleMenu() {
    const menuOverlay = document.querySelector('.menu-overlay');
    menuOverlay.classList.toggle('active');
}