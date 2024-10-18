//Crea una función que elimine las letras consecutivas repetidas en una cadena.

let cadena = prompt("Escribe una cadena:");

function eliminarLetrasRepetidas(cadena) {
  let nuevoCadena = "";
  for (let i = 0; i < cadena.length; i++) {
    if (i === 0 || cadena[i] !== cadena[i - 1]) {
      nuevoCadena += cadena[i];
    }
  }
  return nuevoCadena;
}

console.log(eliminarLetrasRepetidas(cadena));
