//Escribe una función que devuelva una parte de una cadena usando substring().

let pedir = prompt("Escribe una palabra");
function devolver() {
  let inicio = parseInt(prompt("De qué posición deseas empezar?"));
  let final = parseInt(prompt("De qué posición deseas terminar?"));
  return pedir.substring(inicio, final);
}

console.log(devolver());
