'use strict';

// MODALES
const modalGanar = document.getElementById('modalGanar')
const modalPerder = document.getElementById('modalPerder')
const audioGanar = new Audio("sonidos/baptisterio-spice-made-with-Voicemod.mp3");
const audioPerder = new Audio("sonidos/super-mario-death-sound-sound-effect.mp3");
audioGanar.volume = 0.1;
audioPerder.volume = 0.5;

// COLOR
const codigoRGB = document.getElementById('codigoRGB');

// BOTONES
const botones = document.getElementsByClassName("btn")

// BOTÓN DE INICIO
const modalInicio = document.getElementById('modalInicio')

//MODOS
const botonModoFacil = document.getElementById("btnModoFacil")
const botonModoDificil = document.getElementById("btnModoDificil")
const botonModoFacilGanar = document.getElementById("btnModoFacilGanar")
const botonModoDificilGanar = document.getElementById("btnModoDificilGanar")
const botonModoFacilPerder = document.getElementById("btnModoFacilPerder")
const botonModoDificilPerder = document.getElementById("btnModoDificilPerder")

let modoFacil
let modoDificil

// modos inicio
botonModoFacil.addEventListener("click", () => {
    modalInicio.classList.toggle('hide')
    modoFacil = true
    iniciarJuego();
})

botonModoDificil.addEventListener("click", () => {
    modalInicio.classList.toggle('hide')
    modoDificil = true
    iniciarJuego();
})

// modos ganar
botonModoFacilGanar.addEventListener("click", () => {
    modalGanar.classList.toggle('hide')
    modoDificil = false
    modoFacil = true
    audioGanar.pause();
    audioGanar.currentTime = 0;
    iniciarJuego();
})

botonModoDificilGanar.addEventListener("click", () => {
    modalGanar.classList.toggle('hide')
    modoFacil = false
    modoDificil = true
    audioGanar.pause();
    audioGanar.currentTime = 0;
    iniciarJuego();
})

// modos perder
botonModoFacilPerder.addEventListener("click", () => {
    modalPerder.classList.toggle('hide')
    modoDificil = false
    modoFacil = true
    audioPerder.pause();
    audioPerder.currentTime = 0;
    iniciarJuego();
})

botonModoDificilPerder.addEventListener("click", () => {
    modalPerder.classList.toggle('hide')
    modoFacil = false
    modoDificil = true
    audioPerder.pause();
    audioPerder.currentTime = 0;
    iniciarJuego();
})

// CONTADORES
let contadorAciertosTexto = document.getElementById('aciertos')
let contadorFallosTexto = document.getElementById('fallos')
let contadorAciertos = 0
let contadorFallos = 0

// COLOR CORRECTO (GLOBAL)
let colorCorrecto;

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

    // modos
    if (modoFacil) {
        codigoRGB.style.backgroundColor = colorCorrecto
    }
    if (modoDificil) {
        codigoRGB.style.backgroundColor = "#fff"
    }

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
            audioGanar.play()
            return;
        }
    } else {

        contadorFallos++;
        contadorFallosTexto.textContent = contadorFallos;

        if (contadorFallos === 3) {
            modalPerder.classList.toggle("hide");
            audioPerder.play()
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