// JavaScript para mostrar más detalles de los proyectos al hacer clic en "Ver Más"
const proyectos = document.querySelectorAll('.proyecto');

proyectos.forEach((proyecto) => {
    const verMasButton = proyecto.querySelector('.ver-mas');
    const descripcion = proyecto.querySelector('p');
    
    verMasButton.addEventListener('click', () => {
        descripcion.classList.toggle('mostrar');
        if (descripcion.classList.contains('mostrar')) {
            verMasButton.textContent = 'Ver Menos';
        } else {
            verMasButton.textContent = 'Ver Más';
        }
    });
});
