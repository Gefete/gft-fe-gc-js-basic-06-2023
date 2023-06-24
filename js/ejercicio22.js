/* 22. Escribe un programa que solicite al usuario ingresar una palabra y muestre en la consola 
cada letra de la palabra en una línea diferente utilizando un bucle `for`. */

// Variable
let palabra = prompt("Escriba una palabra y la descomponeremos letra por letra");

// Result
for (let i = 0; i < palabra.length; i++) {
    console.log(palabra.charAt(i));
}