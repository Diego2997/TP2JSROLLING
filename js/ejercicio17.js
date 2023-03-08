// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese un texto");
let posicion = 0;
let vocal = false;

let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
for (i = 0; i < texto.length; i++) {
  for (j = 0; j < vocales.length; j++) {
    if (vocales[j] == texto.charAt(i).toLowerCase()) {
      posicion = i;
      document.write("La posicion de la primera vocal es " + (posicion + 1));
      vocal = true;
      break;
    }
  }
  if (vocal) {
    break;
  }
}
