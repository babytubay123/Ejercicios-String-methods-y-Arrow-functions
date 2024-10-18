/*Crea una función que verifique si una cadena comienza con una palabra específica
usando startsWith().*/

let cadena = prompt("Escribe una cadena:");
let palabra = prompt("Escribe una palabra:");

function coincidencia(cadena, palabra) {
  return cadena.startsWith(palabra);
}

console.log(coincidencia(cadena, palabra));
