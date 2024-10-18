/*Escribe una función que cuente la frecuencia de cada carácter en una cadena y
devuelva un objeto con los resultados.*/

let cadena = prompt("Escribe una cadena:");

function contarFrecuencias(cadena) {
  let frecuencias = {};

  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];

    if (frecuencias[caracter]) {
      frecuencias[caracter]++;
    } else {
      frecuencias[caracter] = 1;
    }
  }

  return frecuencias;
}

console.log(contarFrecuencias(cadena));
