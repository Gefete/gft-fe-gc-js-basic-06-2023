/* 21. Realiza un programa que solicite al usuario ingresar un número 
y muestre en la consola la multiplicación de todos los números enteros 
positivos menores o iguales a ese número utilizando un bucle `do...while`. 
*/

// Variable
let num = prompt("ingrese un número y se mostrara en la consola la multiplicación de todos los números enteros");
let acumulador = 1;
let resultado = 1;

// result
do {
    resultado *= acumulador;
    console.log(`${acumulador}`);
    if (acumulador == (num))
        console.log(`=`);
        else
            console.log(`x`);

    acumulador++;

} while (acumulador <= num);

console.log(`El resultado de la multiplicación es "${resultado}"`);