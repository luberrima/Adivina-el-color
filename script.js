'use strict';

// GENERAR NUM ALEATORIO
function numeroAleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
console.log(numeroAleatorio(0, 255));


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


// COLOR CORRECTO
const colorCorrecto = colorAleatorio()


// HACER QUE EL COLOR CORRECTO APAREZCA EN EL HTML
const codigoRGB = document.getElementById('codigoRGB');
codigoRGB.textContent = colorCorrecto.toUpperCase();


//GENERAR VARIACIONES
const colorSimilar1 = `rgb(${red + 10}, ${green}, ${blue})`
const colorSimilar2 = `rgb(${red}, ${green + 10}, ${blue})`
const colorSimilar3 = `rgb(${red}, ${green}, ${blue + 10})`



// ARRAY COLORES
const colores = [colorCorrecto]
colores.push(colorSimilar1);
colores.push(colorSimilar2);
colores.push(colorSimilar3);

console.log(colores)

// DESORDENAR COLORES EN EL ARRAY
colores = colores.sort(() => Math.random() - 0.5);


//COGER BOTONES DEL HTML
const botones = document.getElementsByClassName("btn")


// ASOCIAR COLORES A BOTONES
// falta gestión de errores (creo)
let contadorAciertos = 0
let contadorFallos = 0

for (let i = 0; i < botones.length; i++) {
    const boton = botones[i]
    boton.style.backgroundColor = colores[i]

    boton.addEventListener("click", () => {
        if (boton.style.backgroundColor === colorCorrecto) {

            //toggle modal correcto
            contadorAciertos++
        } else {
            //toggle modal incorrecto
            contadorFallos++
        }
    })
}

if (contadorAciertos === 3) {
    //se gana
}

if (contadorFallos === 3) {
    //se pierde
}


// ACTUALIZACION 18 NOV 19:00
// Falta por hacer:
//     _gestión errores funcion de seleccion de botones
//     _gestión de eventos de boton siguiente de los modales
//     _Contadores de aciertos y fallos y respectivas funciones



// ASOCIAR COLORES A BOTONES
//aqui añadir el aumento de contador (si es correcto, contador acierto ++; si es incorrecto contador fallos ++)
// botones.addEventListener("click", () => {
//     for (let i = 0; i < numeroBotones; i++) {
//         //faltan cosas
//     }
// })

//CONTADOR


// NUEVA RONDA (esto no se sabe si funciona)
// const siguiente = document.getElementsByClassName("btnAceptar")
// for (let i = 0; i < 2; i++) {
//     siguiente.addEventListener("click", () => {
//         function nuevoTurno() {
//             colorCorrecto = colorAleatorio();
//             codigoRGB.textContent = colorCorrecto.toUpperCase();
//         }
//     })
//     nuevoTurno()
// }






///////////
// IDEAS
// math random para los botones (de 1 a 4) y un for para comparar con el color correcto



// function randomColors(num) {
//     const arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(colorAleatorio());
//     }
//     return arr;
// }
// console.log(randomColors());
