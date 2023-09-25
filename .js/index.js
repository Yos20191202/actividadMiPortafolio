// Código JavaScript para animar el texto de bienvenida
const welcomeText = document.querySelector('.welcome h1');

const phrases = ['¡Bienvenidos!', 'Hola, soy Arely Yoselin Bustos Cruz', 'Desarrollador Web'];

let index = 0;
let charIndex = 0;
let currentPhrase = phrases[index];
let typingEffectInterval;

function updateText() {
    welcomeText.textContent = currentPhrase.substring(0, charIndex);
    charIndex++;
    if (charIndex > currentPhrase.length) {
        charIndex = 0;
        clearInterval(typingEffectInterval);
        setTimeout(changeText, 2000); // Cambiar el texto después de 2 segundos
    }
}

function changeText() {
    index++;
    if (index === phrases.length) {
        index = 0;
    }
    currentPhrase = phrases[index];
    typingEffectInterval = setInterval(updateText, 100); // Controla la velocidad de escritura
}

changeText(); // Iniciar el efecto de escritura al cargar la página
