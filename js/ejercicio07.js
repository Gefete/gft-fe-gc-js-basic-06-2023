/* 7. Escribe un programa que pida al usuario ingresar su edad y verifique si es mayor de edad 
(18 años o más).
 */

// Variable
let edad = prompt("Introduzca su edad");
let result= null;

// Condicional
if(edad >= 18){
    result = "Mayor de edad"
}else if(edad<18 && edad>0){
    result = "Menor de edad"
}else{
    result = "Valor no computable"
}

// Result
console.log(result);
alert(result);