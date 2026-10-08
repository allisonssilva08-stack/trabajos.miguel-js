function contarPorEstrellas(calificaciones) {
  let contadores = [];
  contadores.push(0); 
  contadores.push(0);
  contadores.push(0); 
  contadores.push(0); 
  contadores.push(0);
  
  for (let i = 0; i < calificaciones.length; i++) {
    let estrella = calificaciones[i];
    contadores[estrella - 1] = contadores[estrella - 1] + 1;
  }
  return contadores;
}

function repetirCaracter(caracter, veces) {
  let resultado = "";
  for (let i = 0; i < veces; i++) {
    resultado += caracter;
  }
  return resultado;
}

function buscarPosicionMayor(numeros) {
  let indiceMayor = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[indiceMayor]) {
      indiceMayor = i;
    }
  }
  return indiceMayor;
}

let calificaciones = [];
for (let i = 1; i <= 10; i++) {
  let calif = Number(prompt("Calificación " + i + ":"));
  while (calif < 1 || calif > 5 || isNaN(calif)) {
    console.log("Calificación inválida, debe estar entre 1 y 5");
    calif = Number(prompt("Calificación " + i + ":"));
  }
  calificaciones.push(calif);
}

let conteos = contarPorEstrellas(calificaciones);

for (let i = 0; i < conteos.length; i++) {
  let numEstrellas = i + 1;
  let asteriscos = repetirCaracter("*", conteos[i]);
  console.log("Estrellas " + numEstrellas + ": " + asteriscos + " (" + conteos[i] + ")");
}

let posMasFrecuente = buscarPosicionMayor(conteos); 
console.log("Más frecuente: " + (posMasFrecuente + 1) + " estrellas");
