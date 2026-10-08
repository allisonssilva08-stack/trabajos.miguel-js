function esPar(numero) {
  return numero % 2 === 0;
}

function filtrarPares(numeros) {
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (esPar(numeros[i])) {
      pares.push(numeros[i]);
    }
  }
  return pares;
}

function filtrarImpares(numeros) {
  let impares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (!esPar(numeros[i])) {
      impares.push(numeros[i]);
    }
  }
  return impares;
}


let listaNumeros = [];
for (let i = 1; i <= 8; i++) {
  listaNumeros.push(parseInt(prompt("Número " + i + ":")));
}

let losPares = filtrarPares(listaNumeros);
let losImpares = filtrarImpares(listaNumeros);

let txtPares = losPares.length === 0 ? "(ninguno)" : unirConComas(losPares);
let txtImpares = losImpares.length === 0 ? "(ninguno)" : unirConComas(losImpares);

console.log("Pares (" + losPares.length + "): " + txtPares);
console.log("Impares (" + losImpares.length + "): " + txtImpares);
