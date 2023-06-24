/* 15. Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un 
año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible 
entre 400). */

// Variable
let year = +prompt("Introduzca un año y le indicaremos si es bisiesto");
let result = null;

// Condicional
if(year % 4 == 0 && (year % 400 == 0 || year % 100 > 0 )){
        result = "Es año bisiesto";
}else{
    result = "no es bisiesto";
}

// Result
console.log(result);
alert(result);