/* 12. Escribe un programa que solicite al usuario ingresar su calificación en un examen y muestre 
en la consola si ha aprobado (calificación mayor o igual a 70) o no.
 */

// Variables
let nota = +prompt("ingrese su calificación del examen");
let result = null;

// Condicionales
if(nota >= 70){
    result = "Aprobado"
}else if(nota < 70){
    result = "Suspendido"
}else{
    result = "no computable"
}

// Result
console.log(result);
alert(result);