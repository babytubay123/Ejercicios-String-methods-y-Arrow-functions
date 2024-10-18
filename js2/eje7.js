/* Crea una función que elimine los espacios en blanco de los extremos de una cadena
usando trim().*/

let cadena = prompt("Escribe algo bonito: ");
console.log(cadena);

function eliminarEspacios() {
  return cadena.trim();
}
console.log(eliminarEspacios(cadena));
