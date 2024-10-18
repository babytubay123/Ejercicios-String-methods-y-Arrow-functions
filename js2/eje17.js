/*Crea una función que cuente cuántas palabras hay en una cadena usando split() y
length.*/

let cadena = prompt("Ingresa una cadena:");

function contarpalabras(cadena) {
  let palabras = cadena.split(" ");
  return palabras.length;
}
console.log(contarpalabras(cadena));
