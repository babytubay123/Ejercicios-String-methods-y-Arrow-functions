// Crea una función que verifique si una palabra específica está contenida dentro de una cadena usando includes().

let cadena = "Hola manzana payaso tu yo no se ja jaja JAJAJA no es un bebé";

while (true) {
  let palabra = prompt("Escribe una palabra: ");
  let verificar = (palabra, cadena) => cadena.includes(palabra);
  if (verificar(palabra, cadena)) {
    console.log("La palabra existe en la cadena.");
    break;
  } else {
    console.log("La palabra no existe en la cadena.");
  }
}
