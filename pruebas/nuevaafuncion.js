'use strict';

// MODALES
// const modalAcierto = document.getElementById('modalAcierto');
// const modalFallo = document.getElementById('modalFallo');
const modalGanar = document.getElementById('modalGanar');
const modalPerder = document.getElementById('modalPerder');
const btnNextGanar = document.getElementById("btnNextGanar");
const btnNextPerder = document.getElementById("btnNextPerder");
const cerrarModalAcierto = document.getElementById("cerrarAcierto");
const cerrarModalFallo = document.getElementById("cerrarFallo");

// COLOR
const codigoRGB = document.getElementById('codigoRGB');

// BOTONES
const botones = document.getElementsByClassName("btn");

// CONTADORES
let contadorAciertosTexto = document.getElementById('aciertos');
let contadorFallosTexto = document.getElementById('fallos');
let contadorAciertos = 0;
let contadorFallos = 0;

// COLOR CORRECTO (GLOBAL)
let colorCorrecto;

// MODALES
// cerrarModalAcierto.addEventListener('click', () => {
//     modalAcierto.classList.toggle('hide');
// });

// cerrarModalFallo.addEventListener('click', () => {
//     modalFallo.classList.toggle('hide');
// });

btnNextGanar.addEventListener('click', () => {
    modalGanar.classList.toggle('hide');
    iniciarJuego()
});

btnNextPerder.addEventListener('click', () => {
    modalPerder.classList.toggle('hide');
    iniciarJuego()

});

// GENERAR NÚMERO ALEATORIO
function numeroAleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// GENERAR COLOR ALEATORIO
function colorAleatorio() {
    const red = numeroAleatorio(0, 255);
    const green = numeroAleatorio(0, 255);
    const blue = numeroAleatorio(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

// GENERAR NUEVOS COLORES
function nuevosColores() {
    // Generar color correcto
    colorCorrecto = colorAleatorio();

    // Generar variaciones similares
    const [red, green, blue] = colorCorrecto.match(/\d+/g).map(Number);
    const colorSimilar1 = `rgb(${Math.min(255, red + 20)}, ${green}, ${blue})`;
    const colorSimilar2 = `rgb(${red}, ${Math.min(255, green + 20)}, ${blue})`;
    const colorSimilar3 = `rgb(${red}, ${green}, ${Math.min(255, blue + 20)})`;

    // Mezclar colores
    const colores = [colorCorrecto, colorSimilar1, colorSimilar2, colorSimilar3].sort(() => Math.random() - 0.5);
    console.log(colores)

    // Actualizar en el DOM
    codigoRGB.textContent = colorCorrecto;

    // Asignar colores a los botones
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = colores[i];
        botones[i].addEventListener('click', verificarColor);
    }
}

// VERIFICAR SELECCIÓN
function verificarColor(e) {
    const botonSeleccionado = e.target;

    if (botonSeleccionado.style.backgroundColor === colorCorrecto) {
        // modalAcierto.classList.toggle('hide');
        contadorAciertos++;
        contadorAciertosTexto.textContent = contadorAciertos;

        if (contadorAciertos === 3) {
            modalGanar.classList.toggle("hide");
            // modalFallo.remove()
            // modalAcierto.remove()
            return;
        }
    } else {
        // modalFallo.classList.toggle('hide');
        contadorFallos++;
        contadorFallosTexto.textContent = contadorFallos;

        if (contadorFallos === 3) {
            modalPerder.classList.toggle("hide");
            // modalFallo.remove()
            // modalAcierto.remove()
            return;
        }
    }

    // Generar nuevos colores
    nuevosColores();
}

// INICIAR JUEGO
function iniciarJuego() {
    contadorAciertos = 0;
    contadorFallos = 0;
    contadorAciertosTexto.textContent = '0';
    contadorFallosTexto.textContent = '0';

    nuevosColores();
}

// BOTÓN DE INICIO
const modalInicio = document.getElementById('modalInicio');
const botonInicio = document.getElementById('iniciar');

botonInicio.addEventListener('click', () => {
    modalInicio.classList.toggle('hide');
    iniciarJuego();
});
