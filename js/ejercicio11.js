/* 11. Crea un programa que solicite al usuario ingresar un número y determine si es divisible 
entre 3. */

// Variable
let divisible = +prompt("Introduzca un valor y le indicaremos si es divisible entre 3")
let result = null;

// Condicional
if(divisible % 3 == 0){
    result = "es divisible entre 3";
}else if(divisible % 3 > 0){
    result = "no divisible entre 3";
}else{
    result = "no es computable";
}

// Result
console.log(result);
alert(result);