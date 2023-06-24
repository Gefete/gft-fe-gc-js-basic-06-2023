/* 28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la 
consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un 
contador de divisores.
 */

// Variables
let num = prompt("ingrese un número y luego se le mostrara en la consola si ese número es primo");
let contadorDivisores = 0;

for (let i = 1; i <= num ; i++) {
    if (num % i == 0) {
        contadorDivisores++
    }
}
if (contadorDivisores > 2) {
    console.log(`${num} 'No' es primo`)
}else if (contadorDivisores == 2) {
    console.log(`${num} Es PRIMO`)
} 