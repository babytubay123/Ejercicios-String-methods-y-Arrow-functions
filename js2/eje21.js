/*Crea una función que reemplace todas las ocurrencias de una palabra en una
cadena usando replaceAll().*/

let cadena = "Hola mundo";
console.log(cadena);
let palabra1 = prompt("¿Qué palabra quieres reemplazar?");
let palabra2 = prompt("¿Por cuál palabra la quieres reemplazar?");
function remplazarPalabra(cadena, palabra1, palabra2) {
  return cadena.replaceAll(palabra1, palabra2);
}

console.log(remplazarPalabra(cadena, palabra1, palabra2));
