//Crea una función que convierta una cadena a formato snake_case.

function convertirSnakeCase(str) {
  return str.toLowerCase().replace(/ /g, "_");
}

console.log(convertirSnakeCase("Una cadena en CamelCase"));
