function convertirDolaresAPesos(dolares) {
  return dolares * 3550;
}

function procesarListado() {
  let totalPersonas = 0;
  let totalPesos = 0;

  
  let dolares = Number(prompt("Dólares (0 para terminar):"));

  while (dolares !== 0) {
    let pesos = convertirDolaresAPesos(dolares);
    totalPesos = totalPesos + pesos;
    totalPersonas = totalPersonas + 1;

    console.log("Equivale a: " + pesos + " pesos");
    
    dolares = Number(prompt("Dólares (0 para terminar):"));
  }

  console.log("Personas atendidas: " + totalPersonas);
  console.log("Total en pesos: " + totalPesos);
}

procesarListado();
