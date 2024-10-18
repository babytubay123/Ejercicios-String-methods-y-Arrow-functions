//Crea una función que convierta la primera letra de una cadena en mayúscula.
let cadena = prompt("Escribe un texto:");
const convertirPrimeraLetraMayuscula = (cadena) => {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1);
};

console.log(convertirPrimeraLetraMayuscula(cadena));
