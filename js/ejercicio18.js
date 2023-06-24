/* 18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la 
suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.
 */

// Variable
let num = prompt("Introduzca un número y le devolveremos toda la suma de numeros naturales hasta llegar a este");
let acumulador = 0;
let result = null;

// Result
do {
    acumulador++;
    console.log(`${acumulador}`);
    /* condicional para mejorar la estetica del resultado */
    if (acumulador < num) {
        console.log(`+`);
    }
    /* ---------------------------------------------- */
    result += acumulador;
} while (acumulador < num);
console.log(` = ${result}`)