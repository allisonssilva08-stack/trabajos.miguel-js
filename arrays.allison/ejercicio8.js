function contarMayoresQue(numeros, limite) {
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      contador++;
    }
  }
  return contador;
}

function mostrarDiasSobre(dias, ventas, limite) {
  console.log("Días por encima del promedio:");
  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i] > limite) {
      console.log(dias[i] + ": $" + ventas[i]);
    }
  }
}


let promedioSemanal = Math.round(calcularPromedio(misVentas));
console.log("Promedio diario: $" + promedioSemanal);

mostrarDiasSobre(dias, misVentas, promedioSemanal);
let totalDiasSobre = contarMayoresQue(misVentas, promedioSemanal);
console.log("Total: " + totalDiasSobre + " días");
