/* 31. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la 
consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una 
condición `if` y una función auxiliar para verificar si un número es primo. */

// Function
const primos = (numero) =>{
  // Variables
  let contadorDivisores = 0;
  
  //bucle recorre todos los numeros hasta llegar al marcado y los divide para obtener si son divisibles (resto=0)
  for (let i = 1; i <= numero ; i++) {
      if (numero % i == 0) {
          contadorDivisores++
      }
  }

  //comprueba si solo son divisibles entre el mismo numero marcado y el 1
  if (contadorDivisores == 2) {
      console.log(`${numero}`)
  } 
}

// Variables
let num = prompt("introduzca un numero y le diremos todos los numeros primos del 1 al indicado");

//Result 
for (let i = 0; i <= num; i++) {
  primos(i);
}

