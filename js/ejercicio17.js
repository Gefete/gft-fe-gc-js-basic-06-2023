/* 17. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos 
los números pares desde 2 hasta ese número utilizando un bucle `while`. */

// Variable
let numMax = prompt("Introduzca un número y le devolveremos todos los impares hasta llegar a él")
let par = 2;

// Result
while (par<=numMax) {
    console.log(par);
    par +=2;
}
console.log(numMax+" <- numero introducido");