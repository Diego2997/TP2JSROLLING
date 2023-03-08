//8- Crea script para generar pirámide siguiente con los números del
// 1 al número que indique el usuario (no mayor de 50)

let numero = Number(prompt("Ingrese un numero del 1 al 50"));
if (numero > 0 && numero <= 50) {
  for (let i = 0; i <= numero; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(j);
    }
    document.write("<br>");
  }
} else {
  alert("No introdujo un numero valido");
}
