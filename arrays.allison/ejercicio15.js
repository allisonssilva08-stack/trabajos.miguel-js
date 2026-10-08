function obtenerEnvioGratis(distancias) {
  return distancias.filter((distancia) => distancia <= 3);
}

function contarConEnvio(distancias) {
  let pedidosConEnvio = distancias.filter((distancia) => distancia > 3 && distancia <= 10);
  return pedidosConEnvio.length;
}

function buscarPrimeroFuera(distancias) {
  return distancias.find((distancia) => distancia > 10);
}


let cantPedidos = Number(prompt("¿Cuántos pedidos?"));
let distanciasPedidos = [];
for (let i = 0; i < cantPedidos; i++) {
  distanciasPedidos.push(Number(prompt("Distancia " + (i + 1) + ":")));
}

let gratis = obtenerEnvioGratis(distanciasPedidos);
let cantidadPagan = contarConEnvio(distanciasPedidos);
let primeroFuera = buscarPrimeroFuera(distanciasPedidos);

console.log("Envío gratis (" + gratis.length + "): " + gratis.join(", "));
console.log("Pagan envío: " + cantidadPagan);

if (primeroFuera !== undefined) {
  console.log("Primer pedido fuera de cobertura: " + primeroFuera + " km");
} else {
  console.log("Todos los pedidos están en cobertura");
}
