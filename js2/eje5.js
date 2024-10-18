/*Escribe una función que reemplace una palabra específica en una cadena con otra
palabra usando replace().
Ejemplo: "Hola mundo", "mundo", "amigo" → "Hola amigo*/

let cadena = "Hola mundo";
function remplzar() {
  let palabra1 = prompt("Escribe la palabra que desea reemplazar:");
  let palabra2 = prompt("Escribe la palabra nueva:");
  return cadena.replace(palabra1, palabra2);
}
console.log(cadena);
console.log(remplzar());
