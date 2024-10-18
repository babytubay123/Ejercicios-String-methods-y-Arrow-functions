/*Escribe una función que devuelva el carácter en una posición específica de una
cadena usando charAt().*/

let cadena = prompt("Escribe una cadena:");
let posicion = parseInt(prompt("Ingresa la posición del carácter:"));

function obtenerCaracter(cadena, posicion) {
  return cadena.charAt(posicion);
}

console.log(obtenerCaracter(cadena, posicion));
