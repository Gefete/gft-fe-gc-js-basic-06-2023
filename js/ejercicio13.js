/* 13. Realiza un programa que solicite al usuario ingresar dos números y determine si son iguales 
o diferentes. */

// Variable
alert("ingresa dos números y determine si son iguales o diferentes.")
let num1 = +prompt("Ingrese el numero 1");
let num2 = +prompt("Ingrese el numero 2");
let result = null;

// Condicional
if(num1 === num2){
    result = "són iguales";
// !isNaN() lo utilizo para comprobar que són números
}else if(num1 != num2 && !isNaN(num1) && !isNaN(num2)){
    result = "són diferentes";
}else{
    result = "no computable";
}

// Result
console.log(result);
alert(result);