function atenderCliente(numeroCliente) {
  let totalCliente = 0;
  let precio = Number(prompt("Precio (0 para cerrar la cuenta):"));
  
  while (precio !== 0) {
    totalCliente = totalCliente + precio;
    precio = Number(prompt("Precio (0 para cerrar la cuenta):"));
  }
  
  console.log("Total cliente " + numeroCliente + ": " + totalCliente);
  return totalCliente;
}

function hayOtroCliente() {
  let respuesta = prompt("¿Hay otro cliente? (S/N):");
  return respuesta === "S" || respuesta === "s";
}

function gestionarCaja() {
  let clientesAtendido = 0;
  let totalCobrado = 0;
  let compraMsAlta = 0;
  let clienteMasAlto = 0;
  let continuar = true;


  while (continuar) {
    clientesAtendidos = clientesAtendidos + 1;
    console.log("Cliente " + clientesAtendidos);
    
    let totalClienteActual = atenderCliente(clientesAtendidos);
    totalCobrado = totalCobrado + totalClienteActual;

    if (totalClienteActual > compraMasAlta) {
      compraMasAlta = totalClienteActual;
      clienteMasAlto = clientesAtendidos;
    }

    continuar = hayOtroCliente();
  }

  console.log("Clientes atendidos: " + clientesAtendidos);
  console.log("Total cobrado: " + totalCobrado);
  console.log("Compra más alta: cliente " + clienteMasAlto + " con " + compraMasAlta);
}

gestionarCaja();
