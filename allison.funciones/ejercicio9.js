function esHombre(genero) {
  return genero === "H" || genero === "h";
}

function calcularPromedio(suma, cantidad) {
  return suma / cantidad;
}

function procesarEdadesGrupo() {
  let totalPersonas = Number(prompt("¿Cuántas personas?:"));
  
  let sumaHombres = 0, cuentaHombres = 0;
  let sumaMujeres = 0, cuentaMujeres = 0;

  for (let i = 1; i <= totalPersonas; i++) {
    let genero = prompt("Género persona " + i + " (H/M):");
    let edad = Number(prompt("Edad persona " + i + ":"));

    if (esHombre(genero)) {
      sumaHombres = sumaHombres + edad;
      cuentaHombres = cuentaHombres + 1;
    } else {
      sumaMujeres = sumaMujeres + edad;
      cuntaMujeres = cuentaMujeres + 1;
    }
  }

  console.log("Hombres: " + cuentaHombres);
  if (cuentaHombres > 0) {
    console.log("Promedio de edad Hombres: " + calcularPromedio(sumaHombres, cuentaHombres));
  } else {
    console.log("No se calcularon promedios de hombres porque no hubo registros.");
  }

  console.log("Mujeres: " + cuentaMujeres);
  if (cuentaMujeres > 0) {
    console.log("Promedio de edad Mujeres: " + calcularPromedio(sumaMujeres, cuentaMujeres));
  } else {
    console.log("No se calcularon promedios de mujeres porque no hubo registros.");
  }

  let sumaTotal = sumaHombres + sumaMujeres;
  console.log("Promedio del grupo: " + calcularPromedio(sumaTotal, totalPersonas));
}

procesarEdadeGrupo();
