/* 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del 
1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1 
corresponde a "Lunes", 2 corresponde a "Martes", etc.). */

// variables
let diaSemana = prompt("Introduce el dia de la semana (en número)");
let result = null;

// Condicional
switch (diaSemana) {
    case "1":
        result = "Lunes";
        break;
    case "2":
        result = "Martes";
    break;
    case "3":
        result = "Miércoles";
    break;
    case "4":
        result = "Jueves";
    break;
    case "5":
        result = "Viernes";
    break;
    case "6":
        result = "Sábado";
    break;
    case "7":
        result = "Domingo";
    break;
    default:
        result = "valor no computable"
        break;
}

// Result
console.log(result);
alert(result);