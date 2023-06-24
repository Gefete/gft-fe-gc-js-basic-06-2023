/* 26. Escribe un programa que solicite al usuario ingresar un número y luego muestre en la 
consola todos los números pares desde 0 hasta ese número utilizando un bucle `for` y una 
condición `if` */

// Variable
let numPar = prompt("ingresar un número y luego mostrar en la consola todos los números pares desde 0 hasta ese número");

// Result
for (let i = 0; i <= numPar; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log(`${numPar} <- numero introducido`);