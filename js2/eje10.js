/*Escribe una función que cuente cuántas veces aparece una letra específica en una
cadena.*/

let cadena = prompt("Ingresa una cadena:");

let letra = prompt("Ingresa una letra:");
function contarLetras(cadena, letra) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === letra) {
      contador++;
    }
  }
  return contador;
}

console.log(
  `La letra "${letra}" aparece ${contarLetras(cadena, letra)} veces.`
);
