/* 24. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la 
suma de todos los dígitos del número utilizando un bucle `while`.
 */

// Variable
let num = prompt("ingresar un número y muestre en la consola la suma de todos los dígitos del número");
let result = 0;

// Result
for (let i = 0; i < num.length; i++) {
    console.log(`${num.charAt(i)} + ${result}`);
    result += +num.charAt(i)
}

console.log(`El resultado total es ${result}`)