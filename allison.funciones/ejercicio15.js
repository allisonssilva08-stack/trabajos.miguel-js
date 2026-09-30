function contarDivisores(numero) {
  let divisores = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores = divisores + 1;
    }
  }
  return divisores;
}

function esPrimo(numero) {
  return contarDivisores(numero) === 2;
}

function mostrarPrimos() {
  let limite = Number(prompt("Límite N:"));
  let cantidadPrimos = 0;

  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
      console.log(i);
      cantidadPrimos = cantidadPrimos + 1;
    }
  }

  console.log("Cantidad de primos: " + cantidadPrimos);
}

mostrarPrimos();
