//Crea una función que reciba dos cadenas y las concatene usando concat() o +.

function concatenarCadenas(cadena1, cadena2) {
  return cadena1.concat(cadena2);
}

let cadena1 = prompt("Escribe una palabra");

let cadena2 = prompt("Escribe otra palabra");

console.log(concatenarCadenas(cadena1 + " " + cadena2));
