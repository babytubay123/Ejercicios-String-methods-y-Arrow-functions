/*Escribe una función que elimine todas las vocales de una cadena.*/

let cadena = prompt("Escribe algo:");
let vocales = ["a", "e", "i", "o", "u"];

function eliminarVocales(cadena) {
  let nuevaCadena = "";
  for (let i = 0; i < cadena.length; i++) {
    if (!vocales.includes(cadena[i].toLowerCase())) {
      nuevaCadena += cadena[i];
    }
  }
  return nuevaCadena;
}

console.log(eliminarVocales(cadena));
