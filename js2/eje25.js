/*Crea una función que elimine todos los caracteres especiales (como @, #, !) de una
cadena.*/

function eliminarCaracteresEspeciales(cadena) {
  let caracteresEspeciales = /[@#!]/g;
  return cadena.replace(caracteresEspeciales, "");
}

let frase = "Hola@, mundo! ¿Cómo estás?";

console.log(eliminarCaracteresEspeciales(frase));
