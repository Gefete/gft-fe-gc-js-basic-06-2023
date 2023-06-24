/* 9. Escribe un programa que solicite al usuario ingresar un número y determine si es positivo, 
negativo o cero. */

// Variables
let number = prompt("Introduce un numero para determinar si es positivo o negativo");
let result = null;

// Condicional
if(number>=0){
    result = "es positivo";
}else if(number<0){
    result = "es negativo";
}else{
    result = "no computable"
}

// Result
console.log(result);
alert(result);