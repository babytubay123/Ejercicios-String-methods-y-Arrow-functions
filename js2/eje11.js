/*Crea una función que tome una cadena y la devuelva invertida.*/

function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

let frase = "Hola mundo, como estás?";

console.log(invertirCadena(frase));
