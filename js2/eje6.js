/*rea una función que repita una cadena un número específico de veces usando
repeat().*/

let cadena = prompt("Ingresa una palabra o un texto");
let numeroVeces = parseInt(
  prompt("Cuantas veces deseas que se repita la cadena? ")
);

let repetirCadena = (cadena, numeroVeces) => cadena.repeat(numeroVeces);

console.log(cadena);
console.log(repetirCadena(cadena, numeroVeces));
