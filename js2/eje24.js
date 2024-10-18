/*Escribe una función que verifique si una cadena contiene solo números.*/

function esSoloNumeros(cadena) {
  return /^[0-9]+$/.test(cadena);
}

console.log(esSoloNumeros("12345"));
