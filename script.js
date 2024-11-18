'use strict';
function numeroAleatorio (min, max) {
    return Math(Math.random() * (max - min +1)) + min;
}

//funcion para color rgb
function colorAleatorio() {
    const r = numeroAleatorio (0, 255);
    const g = numeroAleatorio (0, 255);
    const b = numeroAleatorio (0, 255);
    return `rgb (${r}, ${g}, ${b})`;
}

const contenedorRGB = document.getElementById('contenedorRGB');
contenedorRGB.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;