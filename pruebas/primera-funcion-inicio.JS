// FUNCION INICIAR

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