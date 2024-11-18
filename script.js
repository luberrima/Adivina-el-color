'use strict';

// GENERAR NUM ALEATORIO
function numeroAleatorio (min, max) {
    return Math.floor((Math.random() * (max - min +1)) + min);
}
console.log(numeroAleatorio(0, 255));

// GENERAR COLOR ALEATORIO

function colorAleatorio() {
    let r = numeroAleatorio(0, 255);
    let g = numeroAleatorio(0, 255);
    let b = numeroAleatorio(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(colorAleatorio());
const codigoRGB = document.getElementById('codigoRGB');
codigoRGB.textContent = colorAleatorio();

function randomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(colorAleatorio());
    }
    return arr;
}
// console.log(randomColors());


//generar color correcto
function nuevoTurno(){
    const colorCorrecto = colorAleatorio();
    codigoRGB.textContent = colorCorrecto.toUpperCase(); 
}

//GENERAR VARIACIONES
//ASOCIAR COLORES A BOTONES
const botones = document.getElementsByClassName("btn")
console.log(botones);


//CONTADOR

