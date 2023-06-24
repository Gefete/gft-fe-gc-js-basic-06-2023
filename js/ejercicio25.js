/* 25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada 
palabra de la frase en una línea diferente utilizando un bucle `for`. */

// Variable
let frase = prompt("ingresar una frase y muestre en la consola cada palabra de la frase en una línea diferente");
let palabra = frase.split(" ");

// result
for (let i = 0; i < palabra.length; i++)
    console.log(palabra[i]);