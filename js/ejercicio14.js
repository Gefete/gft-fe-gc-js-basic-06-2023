/* 14. Crea un programa que solicite al usuario ingresar un número del 1 al 12 y muestre en la 
consola el nombre del mes correspondiente (por ejemplo, 1 corresponde a "Enero", 2 
corresponde a "Febrero", etc.). */

// Variables
let numMes = +prompt("Ponga un numero que represente un mes y le devolveremos el nombre");
let result= null;

// Condicional
switch (numMes) {
    case 1:
        result =  "Enero";
        break;
    case 2:
        result =  "Febrero";
        break;
    case 3:
        result =  "Marzo";
        break;
    case 4:
        result =  "Abril";
        break;
    case 5:
        result =  "Mayo";
        break;
    case 6:
        result =  "Junio";
        break;
    case 7:
        result =  "Julio";
        break;
    case 8:
        result =  "Agosto";
        break;
    case 9:
        result =  "Septiembre";
        break;
    case 10:
        result =  "Octubre";
        break;
    case 11:
        result =  "Noviembre";
        break;
    case 12:
        result =  "Diciembre";
        break;
    default:
        result= "no computable"
        break;
}

// Result
console.log(result);
alert(result);