// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con
//  un «alert» y seguir pidiendo números.
//  Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numeros = 0;
do {
  numeros += parseInt(prompt("Ingrese los numeros"));
} while (confirm("Desea seguir?"));

document.write(numeros);
