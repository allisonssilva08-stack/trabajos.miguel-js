function esNotaValida(nota) {
  return nota >= 0 && nota <= 5;
}

function estaAprobado(nota) {
  return nota >= 3.0;
}

function procesarCalificaciones() {
  let notasValidas = 0;
  let sumaNotas = 0;
  let notaMasBaja = Infinity; 
  let aprobados = 0;


  let nota = Number(prompt("Nota (-1 para terminar):"));

  while (nota !== -1) {
    if (esNotaValida(nota)) {
      notasValidas = notasValidas + 1;
      sumaNotas = sumaNotas + nota;
      
      if (nota < notaMasBaja) {
        notaMasBaja = nota;
      }
      
      if (estaAprobado(nota)) {
        aprobados = aprobados + 1;
      }
    } else {
      console.log("Nota inválida, debe estar entre 0 y 5");
    }

    // Segunda lectura antes de cerrar el ciclo
    nota = Number(prompt("Nota (-1 para terminar):"));
  }

  if (notasValidas > 0) {
    let promedio = sumaNotas / notasValidas;
    console.log("Notas válidas: " + notasValidas);
    console.log("Promedio: " + promedio);
    console.log("Nota más baja: " + notaMasBaja);
    console.log("Aprobados: " + aprobados);
  } else {
    console.log("No se registraron notas válidas.");
  }
}

procesarCalificaciones();
