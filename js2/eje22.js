//Escribe una función que convierta una frase a formato camelCase.

function fraseACamelCase(frase) {
  let palabras = frase.split(" ");
  let camelCase = palabras[0].toLowerCase();
  for (let i = 1; i < palabras.length; i++) {
    camelCase +=
      palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
  }

  return camelCase;
}

console.log(fraseACamelCase("esta es una frase de prueba"));
