function obtenerValorAbsoluto(numero) {
  if (numero < 0) {
    return numero * -1; 
  }
  return numero;
}

function generarLetrero(diferencia) {
  if (diferencia > 0) {
    return "SUBIÓ";
  } else if (diferencia < 0) {
    return "BAJÓ";
  } else {
    return "S MANTUVO";
  }
}

function leerPromedioBasculas(cantidadBasculas) {
  let sumaPesos = 0;
  for (let b = 1; b <= cantidadBasculas; b++) {
    let peso = Number(prompt("Báscula " + b + ":"));
    sumaPesos = sumaPesos + peso;
  }
  return sumaPesos / cantidadBasculas;
}

function gestionarClub() {
  for (let miembro = 1; miembro <= 5; miembro++) {
    console.log("Miembro " + miembro);
    let pesoAnterior = Number(prompt("Peso anterior:"));
    let promedioActual = leerPromedioBasculas(10); 
    
    let diferencia = promedioActual - pesoAnterior;
    let letrero = generarLetrero(diferencia);
    let kilosDiferencia = obtenerValorAbsoluto(diferencia);

    if (letrero === "SE MANTUVO") {
      console.log(letrero);
    } else {
      console.log(letrero + " " + klosDiferencia + " kg");
    }
  }
}

gestionarClub();
