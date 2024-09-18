// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let index = 0;

    const updateSlidePosition = () => {
        slides.style.transform = `translateX(-${index * 100}%)`;
    };

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % slideCount;
        updateSlidePosition();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + slideCount) % slideCount;
        updateSlidePosition();
    });
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let index = 0;

    const updateSlidePosition = () => {
        slides.style.transform = `translateX(-${index * 100}%)`;
    };

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % slideCount;
        updateSlidePosition();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + slideCount) % slideCount;
        updateSlidePosition();
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let index = 0;

    const updateSlidePosition = () => {
        slides.style.transform = `translateX(-${index * 100}%)`;
    };

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % slideCount;
        updateSlidePosition();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + slideCount) % slideCount;
        updateSlidePosition();
    });

    // Opcional: Añadir navegación automática
    setInterval(() => {
        index = (index + 1) % slideCount;
        updateSlidePosition();
    }, 5000); // Cambia la imagen cada 5 segundos
});
