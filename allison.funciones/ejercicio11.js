function generarNumeroSecreto(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function evaluarIntento(intento, secreto) {
  if (intento === secreto) {
    return "correcto";
  } else if (intento > secreto) {
    return "menor"; 
  } else {
    return "mayor"; 
  }
}

function jugarAdivina() {
  let secreto = generarNumeroSecreto(1, 100);
  let intentos = 1;
  let gano = false;

  while (intentos <= 7 && !gano) {
    let intentoUsuario = Number(prompt("Intento " + intentos + ":"));
    let resultado = evaluarIntento(intentoUsuario, secreto);

    if (resultado === "correcto") {
      console.log("¡Adivinaste en " + intentos + " intentos!");
      gno = true;
    } else if (resultado === "menor") {
      console.log("El número secreto es menor");
      intentos = intentos + 1;
    } else {
      console.log("El número secreto es mayor");
      intentos = intentos + 1;
    }
  }

  if (!gano) {
    console.log("Perdiste. El número secreto era: " + secreto);
  }
}

jugarAdivina();
