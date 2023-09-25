const carruselContainer = document.querySelector('.carrusel-container');
const testimonios = document.querySelectorAll('.testimonio');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function mostrarTestimonio(index) {
    testimonios.forEach(testimonio => testimonio.style.transform = 'translateX(100%)');
    testimonios[index].style.transform = 'translateX(0)';
}

function avanzarTestimonio() {
    currentIndex = (currentIndex + 1) % testimonios.length;
    carruselContainer.scrollLeft = currentIndex * testimonios[0].offsetWidth;
    mostrarTestimonio(currentIndex);
}

function retrocederTestimonio() {
    currentIndex = (currentIndex - 1 + testimonios.length) % testimonios.length;
    carruselContainer.scrollLeft = currentIndex * testimonios[0].offsetWidth;
    mostrarTestimonio(currentIndex);
}

// Muestra el primer testimonio al cargar la página
mostrarTestimonio(currentIndex);

// Botón Siguiente
nextButton.addEventListener('click', avanzarTestimonio);

// Botón Anterior
prevButton.addEventListener('click', retrocederTestimonio);

// Movimiento automático cada 5 segundos
setInterval(avanzarTestimonio, 5000); // Cambia de testimonio cada 5 segundos
