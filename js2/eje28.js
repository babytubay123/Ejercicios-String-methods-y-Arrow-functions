/*Escribe una función que convierta la primera letra de cada palabra de una cadena a
mayúscula.*/

const convertirPrimeraLetraMayuscula = (cadena) => {
  return cadena
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1));
};

console.log(convertirPrimeraLetraMayuscula("hola mundo"));
