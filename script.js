'use strict';
//ACTUALIZACION 20 NOV
// Falta por hacer:
// Deploy
//favicon
//terminar responsive
//footer
//modo fiesta

//luego al final:
//por email entregar la ruta del proyecto URL del report

// MODALES
const modalGanar = document.getElementById('modalGanar')
const modalPerder = document.getElementById('modalPerder')
const btnNextGanar = document.getElementById("btnNextGanar")
const btnNextPerder = document.getElementById("btnNextPerder")
const cerrarModalAcierto = document.getElementById("cerrarAcierto")
const cerrarModalFallo = document.getElementById("cerrarFallo")

// COLOR
const codigoRGB = document.getElementById('codigoRGB');

// BOTONES
const botones = document.getElementsByClassName("btn")

// CONTADORES
let contadorAciertosTexto = document.getElementById('aciertos')
let contadorFallosTexto = document.getElementById('fallos')
let contadorAciertos = 0
let contadorFallos = 0

// COLOR CORRECTO (GLOBAL)
let colorCorrecto;

// EVENTOS BOTON SIGUIENTE
btnNextGanar.addEventListener('click', () => {
    modalGanar.classList.toggle('hide')
    iniciarJuego();
});

btnNextPerder.addEventListener('click', () => {
    modalPerder.classList.toggle('hide')
    iniciarJuego();
});

// GENERAR NUM ALEATORIO
function numeroAleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// GENERAR COLOR ALEATORIO
let red
let green
let blue

function colorAleatorio() {
    red = numeroAleatorio(0, 255);
    green = numeroAleatorio(0, 255);
    blue = numeroAleatorio(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}


// FUNCIÓN GENERAR NUEVOS COLORES
function nuevosColores() {
    // color correcto
    colorCorrecto = colorAleatorio();

    // variaciones
    const colorSimilar1 = `rgb(${Math.min(255, red + 20)}, ${green}, ${blue})`;
    const colorSimilar2 = `rgb(${red}, ${Math.min(255, green + 20)}, ${blue})`;
    const colorSimilar3 = `rgb(${red}, ${green}, ${Math.min(255, blue + 20)})`;

    // mezclar colores
    const colores = [colorCorrecto, colorSimilar1, colorSimilar2, colorSimilar3].sort(() => Math.random() - 0.5);
    console.log(colores)

    // texto html
    codigoRGB.textContent = colorCorrecto;

    // asignar colores a los botones
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = colores[i];
        botones[i].addEventListener('click', verificarColor);
    }
}

// FUNCIÓN VERIFICAR COLOR CORRECTO
function verificarColor(boton) {
    const botonSeleccionado = boton.target;

    if (botonSeleccionado.style.backgroundColor === colorCorrecto) {

        contadorAciertos++;
        contadorAciertosTexto.textContent = contadorAciertos;

        if (contadorAciertos === 3) {
            modalGanar.classList.toggle("hide");
            return;
        }
    } else {

        contadorFallos++;
        contadorFallosTexto.textContent = contadorFallos;

        if (contadorFallos === 3) {
            modalPerder.classList.toggle("hide");

            return;
        }
    }

    // resetear colores
    nuevosColores();
}

// FUNCIÓN INICIAR JUEGO
function iniciarJuego() {
    contadorAciertos = 0;
    contadorFallos = 0;
    contadorAciertosTexto.textContent = '0';
    contadorFallosTexto.textContent = '0';

    nuevosColores();
}


// BOTÓN DE INICIO
const modalInicio = document.getElementById('modalInicio')
const botonInicio = document.getElementById('iniciar')

botonInicio.addEventListener('click', () => {
    modalInicio.classList.toggle('hide')
    iniciarJuego();
})