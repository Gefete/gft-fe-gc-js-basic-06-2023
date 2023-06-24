/* 27. Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de 
todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una 
condición `if`. */

// Variable
let num = +prompt("ingrese un número y luego le devolveremos el calculo, la suma de todos los números impares");
let acumulador = 0;
let increment = 0;

// result
while (increment < num) {
    increment++;
    if (increment % 2 > 0) {
        console.log(`${increment} + ${acumulador}`)
        acumulador += increment;
    }
}
console.log(`resultado de total -> ${acumulador}, el numero que habia escogido es -> ${num}`);