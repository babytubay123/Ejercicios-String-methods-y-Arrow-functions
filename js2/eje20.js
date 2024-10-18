/*Escribe una función que verifique si una cadena termina con una palabra específica
usando endsWith().*/
let cadena = prompt("Escribe una cadena:");
let palabra = prompt("Escribe una palabra:");

function coincidencia(cadena, palabra) {
  return cadena.endsWith(palabra);
}

console.log(coincidencia(cadena, palabra));
