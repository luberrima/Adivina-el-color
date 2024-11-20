'use strict';
//ACTUALIZACION 19NOV
// Falta por hacer:
//      _¿gestión de errores?
//      ACTUALIZAR COLORES CUANDO SE ACIERTA O SE FALLA (PUNTO 6 PDF)
//      OCULTAR MODALES DE ACIERTO Y FALLO CUANDO SE GANA O SE PIERDE
//      LOS PUTOS CONTADORES

// const modalAcierto = document.getElementById('modalAcierto')
// const modalFallo = document.getElementById('modalFallo')
const modalGanar = document.getElementById('modalGanar')
const modalPerder = document.getElementById('modalPerder')
const btnNextGanar = document.getElementById("btnNextGanar")
const btnNextPerder = document.getElementById("btnNextPerder")
const cerrarModalAcierto = document.getElementById("cerrarAcierto")
const cerrarModalFallo = document.getElementById("cerrarFallo")


// COLOR
const codigoRGB = document.getElementById('codigoRGB');

//COGER BOTONES DEL HTML
const botones = document.getElementsByClassName("btn")


// ASOCIAR COLORES A BOTONES
// falta gestión de errores (creo)
let contadorAciertosTexto = document.getElementById('aciertos')
let contadorFallosTexto = document.getElementById('fallos')
let contadorAciertos = 0
let contadorFallos = 0


// COLOR CORRECTO (GLOBAL)
let colorCorrecto;


// MODALES
// cerrarModalAcierto.addEventListener('click', () => {
//         modalAcierto.classList.toggle('hide')
//     } );

// cerrarModalFallo.addEventListener('click', () => {
//         modalFallo.classList.toggle('hide')
//     } ); 


btnNextGanar.addEventListener('click', () => {
    modalGanar.classList.toggle('hide')
    iniciarJuego();
} ); 

btnNextPerder.addEventListener('click', () => {
    modalPerder.classList.toggle('hide')
    iniciarJuego();
} ); 


// GENERAR NUM ALEATORIO
function numeroAleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
// console.log(numeroAleatorio(0, 255));


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


// GENERAR NUEVOS COLORES
function nuevosColores() {
    // Generar color correcto
    colorCorrecto = colorAleatorio();

    // Generar variaciones similares
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
const modalInicio = document.getElementById('modalInicio')
const botonInicio = document.getElementById('iniciar')

botonInicio.addEventListener('click', () => {
    modalInicio.classList.toggle('hide')
    iniciarJuego();
})
    


// NUESTRA FUNCION INICIAR

// function iniciarJuego() {
//     //GENERAR VARIACIONES
//     let colorCorrecto = colorAleatorio()
//     let colorSimilar1 = `rgb(${red + 20}, ${green}, ${blue})`
//     let colorSimilar2 = `rgb(${red}, ${green + 20}, ${blue})`
//     let colorSimilar3 = `rgb(${red}, ${green}, ${blue + 20})`
//     contadorAciertos = 0;
//     contadorFallos = 0;
//     contadorAciertosTexto.textContent = '0';
//     contadorFallosTexto.textContent = '0';

//     colorAleatorio();
    
    
//     // COLOR CORRECTO
//     let colores = [colorCorrecto]
    
//     // HACER QUE EL COLOR CORRECTO APAREZCA EN EL HTML
//     codigoRGB.textContent = colorCorrecto;
    
//     // ARRAY COLORES
//     colores.push(colorSimilar1);
//     colores.push(colorSimilar2);
//     colores.push(colorSimilar3);
    
//     // console.log(colores)
    
//     // DESORDENAR COLORES EN EL ARRAY
//     colores = colores.sort(() => Math.random() - 0.5);
    
    

    
    
//     function incrementarContadorAciertos() {
//         contadorAciertos++;
//     }
//     function incrementarContadorFallos() {
//         contadorFallos++;
//     }
    
//     for (let i = 0; i < botones.length; i++) {
//         const boton = botones[i]
//         boton.style.backgroundColor = colores[i]
        
//         boton.addEventListener("click", () => {
//         if (boton.style.backgroundColor === colorCorrecto) {
//             modalAcierto.classList.toggle('hide')
//             // NO SE RESETEAN LOS COLORES UNA VEZ ACIERTAS  
//             incrementarContadorAciertos();
//             contadorAciertosTexto.textContent = contadorAciertos
//         } else {
//             modalFallo.classList.toggle('hide')
            
//             incrementarContadorFallos();
//             contadorFallosTexto.textContent = contadorFallos
            
//         }
//         if (contadorAciertos === 3) {
//             // Se gana
//             //modal de ganar
//             modalGanar.classList.toggle("hide");
//             btnNextGanar.addEventListener("click", () => {
//                 iniciarJuego();
//                 // reset();
//                 })
//         }
        
//         if (contadorFallos === 3) {
//             // Se pierde
//             //modal de perder
//             modalPerder.classList.toggle("hide");
//             btnNextPerder.addEventListener("click", () => {
//                 iniciarJuego();
//                 // reset();
//             })
//         }
//     })
// };

// }



// funcion para resetear el juego
// function reset() {
//         contadorAciertos = 0;
//         contadorFallos = 0;
//         aciertos.textContent = '0';
//         fallos.textContent = '0';
    
//     // colorAleatorio()
// }




// function reset() {
//     contadorAciertos = 0;
//     contadorFallos = 0;
//     //generar colores nuevos
//     colorCorrecto = colorAleatorio();

//     //cambiar colorDisplay para que coincida con colorElegido
//     codigoRGB.textContent = colorCorrecto;

//     //cambiar los colores de los cuadrados
//     for (let i = 0; i < botones.length; i++) {
//         const boton = botones[i]
//         boton.style.backgroundColor = colores[i]
    
//         boton.addEventListener("click", () => {
//             if (boton.style.backgroundColor === colorCorrecto) {
    
//                 //toggle modal correcto
//                 // contadorAciertos++;
//                 incrementarContadorAciertos();
//                 contadorAciertosTexto.textContent = contadorAciertos
//             } else {
//                 //toggle modal incorrecto
//                 // contadorFallos++;
//                 incrementarContadorFallos();
//                 contadorFallosTexto.textContent = contadorFallos
//             }
//             if (contadorAciertos === 3) {
//                 // Se gana
//                 const ganar = document.createElement('div');
//                 ganar.innerHTML = '<p>¡Enhorabuena! Has ganado.</p>';
//                 document.body.appendChild(ganar);
//                 console.log('ganar');
    
//                 // setTimeout(() => {
//                 //     contadorAciertos = 0;
//                 //     contadorFallos = 0;
//                 //     contadorAciertosTexto.textContent = contadorAciertos;
//                 //     contadorFallosTexto.textContent = contadorFallos;
//                 //     reset();
//                 // }, 10000);
//                 reset();
//             }
    
//             if (contadorFallos === 3) {
//                 // Se pierde
//                 const perder = document.createElement('div');
//                 perder.innerHTML = '<p>¡Lo siento! Has perdido.</p>';
//                 document.body.appendChild(perder);
//                 console.log('perder');
    
//                 // setTimeout(() => {
//                 //     contadorAciertos = 0;
//                 //     contadorFallos = 0;
//                 //     contadorAciertosTexto.textContent = contadorAciertos;
//                 //     contadorFallosTexto.textContent = contadorFallos;
//                 //     reset();
//                 // }, 10000);
//                 reset();
//             }
//         })
//     }
// };










// if (contadorAciertos === 3) {
//     //se gana
//     const ganar = document.createElement('div');
//     const textoGanar = ganar.appendChild('p')
//     textoGanar.textContent = '¡Enhorabuena! Has ganado.'
//     console.log('ganar');

    

//     setTimeout(() => {
//         contadorAciertos = 0;
//         contadorFallos = 0;
//     }, 10000);
// }

// if (contadorFallos === 3) {
//     //se pierde
//     const perder = document.createElement('div');
//     const textoPerder = perder.appendChild('p')
//     textoPerder.textContent = '¡Lo siento! Has perdido.'
//     console.log('perder');

    

//     setTimeout(() => {
//         contadorAciertos = 0;
//         contadorFallos = 0;
//     }, 10000);
// }












// ACTUALIZACION 18 NOV 19:00
// Falta por hacer:
//     _gestión errores funcion de seleccion de botones
//     _gestión de eventos de boton siguiente de los modales
//     _Contadores de aciertos y fallos y respectivas funciones
//      _Funcion para resetear el juego mirarla bien ya que no funciona



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