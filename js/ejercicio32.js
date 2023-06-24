/* 32. Escribe un programa que solicite al usuario ingresar un número y luego calcule el factorial 
de ese número utilizando un bucle `for`, una condición `if` y una variable acumuladora. */

// Variables
let num = +prompt("Ingrese un numero y le devolvemos el factorial");
let acumulador = 1;

// Result
if (num < 0) {
    console.log("valor no computable");
} else if (num == 0) {
    console.log("El factorial es 1.");
} else {
    for (let i = 1; i <= num; i++) {
        acumulador *=  i;
    }
    console.log(`El factorial es ${acumulador}`);
}