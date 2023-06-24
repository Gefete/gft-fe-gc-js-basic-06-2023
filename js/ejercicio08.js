/* 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor 
de ellos. */

// Variables
let valor1 = +prompt("Introduzca valor 1");
let valor2 = +prompt("Introduzca valor 2");
let valor3 = +prompt("Introduzca valor 3");
let maxValue = valor1;

// Condicional
if(maxValue < valor2){
    maxValue = valor2;
}

if(maxValue < valor3){
    maxValue = valor3;
}

// Result
console.log("el valor más alto és: "+ maxValue);
alert("el valor más alto és: "+ maxValue);