/* 29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre 
en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una 
condición `if` y una variable contador. */

// Variables
let palabra = prompt("Ingresa una palabra:");

let contadorVocales = 0;

palabra = palabra.toLowerCase();

// Result
for (let i = 0; i < palabra.length; i++) {
    letra = palabra[i].charCodeAt();
    if ( letra == 97 || letra == 101 || letra == 105 || letra == 111 || letra == 117 ) {
        contadorVocales++;
    }
}
console.log(`La palabra ${palabra} tiene ${contadorVocales} vocales.`);