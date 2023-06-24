/* 33. Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la 
consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable 
acumuladora. */

// Variables
let palabra = prompt("Ponga una palabra y se la devolveremos invertida");
let acumulador;
let palabrareves = "";

if(palabra.length > 0){
    acumulador = palabra.length-1;
    // Result
    while (acumulador >= 0) {
        palabrareves += palabra.charAt(acumulador);
        acumulador--;
    }
    console.log(palabrareves);
}else{
    console.log("Valor no computable")
}