/* 6. Realiza un programa que solicite al usuario ingresar un número y determine si es par o impar. */

// Variables
let num = prompt("Introduce un número y te indicaremos si es par o impar");
let result = null;

// Condicional
if(num%2==0){
    result = "es par";
}else if (num%2 > 0) {
    result = "es impar";
}else{
    result = "Valor no computable"
}

// Result
console.log(result);
alert(result);