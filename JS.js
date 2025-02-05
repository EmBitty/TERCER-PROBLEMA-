
/***
Autor: Adrian Emiliano Rodriguez Santiesteban
Fecha: 02/05/2024
Lenguaje html
Fuente: local
Examen
***/
document.addEventListener('DOMContentLoaded', () => {
    
    // Código para la página con carrusel automático
    if (document.body.classList.contains('pagina-automatica')) {
        const images = document.querySelectorAll('.carousel-images img');
        let currentIndex = 0;
        const imageDuration = 30000; // 30 segundos

        function showImage(index) {
            const carouselImages = document.querySelector('.carousel-images');
            carouselImages.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        // Cambio automático de imagen cada 30 segundos
        setInterval(nextImage, imageDuration);
    }

    // Código para la página con botones
    if (document.body.classList.contains('pagina-botones')) {
        const images = document.querySelectorAll('.carousel-images img');
        let currentIndex = 0;

        function showImage(index) {
            const carouselImages = document.querySelector('.carousel-images');
            carouselImages.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        document.querySelector('.next').addEventListener('click', nextImage);
        document.querySelector('.prev').addEventListener('click', prevImage);
    }

    // Código para la página con teclado
    if (document.body.classList.contains('pagina-teclado')) {
        const images = document.querySelectorAll('.carousel-images img');
        let currentIndex = 0;

        function showImage(index) {
            const carouselImages = document.querySelector('.carousel-images');
            carouselImages.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                nextImage();
            } else if (event.key === 'ArrowLeft') {
                prevImage();
            }
        });
    }
});