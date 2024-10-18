//Crea una función que devuelva el último carácter de una cadena sin usar length.
function ultimoCaracter(cadena) {
  for (let i = cadena.indexOf(cadena[0]); i >= 0; i--) {
    if (cadena.charAt(i) !== "") {
      return cadena.charAt(i);
    }
  }
  return null;
}
console.log(ultimoCaracter("Hola, mundo!"));
