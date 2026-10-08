function buscarPosicionMayor(numeros) {
  let indiceMayor = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[indiceMayor]) {
      indiceMayor = i;
    }
  }
  return indiceMayor;
}

function buscarPosicionMenor(numeros) {
  let indiceMenor = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < numeros[indiceMenor]) {
      indiceMenor = i;
    }
  }
  return indiceMenor;
}


let posMayor = buscarPosicionMayor(misVentas);
let posMenor = buscarPosicionMenor(misVentas);
let diferencia = misVentas[posMayor] - misVentas[posMenor];

console.log("Mejor día: " + dias[posMayor] + " ($" + misVentas[posMayor] + ")");
console.log("Peor día: " + dias[posMenor] + " ($" + misVentas[posMenor] + ")");
console.log("Diferencia: $" + diferencia);
