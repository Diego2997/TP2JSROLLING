// Realiza un script que pida una cadena de texto y la devuelva al revés
// . Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt("Ingrese una cadena");
document.write(`La cadena al reves es ${cadena.split("").reverse().join("")}`);
