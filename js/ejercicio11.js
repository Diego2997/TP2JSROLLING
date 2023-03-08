// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let edad1 = Number(prompt("Ingresa la primera edad"));
let edad2 = Number(prompt("Ingresa la segunda edad"));
let edad3 = Number(prompt("Ingresa la tercera edad"));

document.write(`El mayor es ${Math.max(edad1, edad2, edad3)}`);
