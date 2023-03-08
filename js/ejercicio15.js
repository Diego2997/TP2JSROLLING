// Realiza un script que cuente el número de vocales que tiene un texto.

let vocales = prompt("Ingrese un texto").toLowerCase();
let contador = 0;
for (let i = 0; i < vocales.length; i++) {
  if (
    vocales[i] === "a" ||
    vocales[i] === "e" ||
    vocales[i] === "i" ||
    vocales[i] === "o" ||
    vocales[i] === "u"
  ) {
    contador++;
  }
}
alert(`El numero vocales de la cadena "${vocales}" es ${contador}`);
