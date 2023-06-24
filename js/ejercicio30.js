/* 30. Crea un programa que solicite al usuario ingresar un número y luego determine si es un 
número perfecto (la suma de sus divisores propios es igual al número) utilizando un bucle 
`while`, una condición `if` y una variable acumuladora.
 */

// Variables
let num = prompt("ingresar un número y luego determine si es un número perfecto");
let acumulador = 0;
let suma = 0;

// Result
while(acumulador < num){
    
    if (num % acumulador == 0) {
        suma += acumulador;
        console.log(suma);
    }
    acumulador++;
}

if (suma == num) {
    console.log(`${num} es un numero perfecto`);
}else{
    console.log(`${num} no es un numero perfecto`);
}
