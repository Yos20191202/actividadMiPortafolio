// Selecciona todos los elementos con la clase "interes"
const intereses = document.querySelectorAll('.interes');

// Agrega un manejador de eventos a cada elemento
intereses.forEach(interes => {
    interes.addEventListener('mouseover', () => {
        // Define la animación con anime.js
        anime({
            targets: interes,
            scale: 1.1, // Cambia el tamaño al 110%
            duration: 300, // Duración de la animación en milisegundos
            easing: 'easeInOutSine' // Tipo de easing
        });
    });

    // Agrega un manejador de eventos para restaurar el tamaño original
    interes.addEventListener('mouseout', () => {
        // Define la animación de regreso al tamaño original
        anime({
            targets: interes,
            scale: 1, // Vuelve al tamaño original
            duration: 300, // Duración de la animación en milisegundos
            easing: 'easeInOutSine' // Tipo de easing
        });
    });
});
