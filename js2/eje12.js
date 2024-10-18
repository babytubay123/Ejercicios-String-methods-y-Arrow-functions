/*Escribe una función que determine si una palabra es un palíndromo (se lee igual al
revés).*/

function esPalindromo(palabra) {
  let sinEspacios = palabra.toLowerCase().replace(/\s/g, "");

  return sinEspacios === sinEspacios.split("").reverse().join("");
}

console.log(esPalindromo("Ana"));
console.log(esPalindromo(" radar"));
console.log(esPalindromo("Hola"));
console.log(esPalindromo("A ma"));
