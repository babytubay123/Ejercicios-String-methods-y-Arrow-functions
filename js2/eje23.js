/*Crea una función que trunque una cadena a un número específico de caracteres,
agregando ... al final si es más larga.*/
function truncar_cadena(cadena, longitud) {
  if (cadena.length > longitud) {
    return cadena.slice(0, longitud - 3) + "...";
  } else {
    return cadena;
  }
}

console.log(truncar_cadena("Hola, mundo!", 10));
