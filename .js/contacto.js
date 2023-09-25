// JavaScript para validar y procesar el formulario de contacto
document.addEventListener('DOMContentLoaded', function () {
    const formularioContacto = document.getElementById('formulario-contacto');

    formularioContacto.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = formularioContacto.querySelector('#nombre').value;
        const email = formularioContacto.querySelector('#email').value;
        const mensaje = formularioContacto.querySelector('#mensaje').value;

        // Aquí puedes agregar lógica para enviar el formulario a tu servidor o hacer lo que desees con los datos

        // Ejemplo de impresión de los valores en la consola
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

        // Limpia el formulario después de enviarlo
        formularioContacto.reset();
    });
});
