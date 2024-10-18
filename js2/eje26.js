/*Escribe una función que encuentre la palabra más larga en una cadena.*/

let cadena = prompt("Escribe una cadena:");
let palabras = cadena.split(" ");
let palabraMasLarga = palabras[0];

for (let i = 1; i < palabras.length; i++) {
  if (palabras[i].length > palabraMasLarga.length) {
    palabraMasLarga = palabras[i];
  }
}

console.log(palabraMasLarga);

//Math.max()

let palabraMasLarga2 = palabras.reduce((maximo, palabra) =>
  palabra.length > maximo.length ? palabra : maximo
);

console.log(palabraMasLarga2);
