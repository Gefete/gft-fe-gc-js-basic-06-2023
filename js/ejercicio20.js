/* 20. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos 
los números pares desde ese número hasta 0 utilizando un bucle `while`.
 */

// Variable
let num = prompt("ingresa un número y mostrara en la consola todos los números pares desde ese número hasta 0");

// Result
while (num >= 0) {
    if (num % 2 == 0) {
        console.log(num);    
    }
    num--;
}