function calcularConIva(precio) {
  return Math.round(precio * 1.19);
}

function aplicarIvaConMap(precios) {
  return precios.map((precio) => calcularConIva(precio));
}

function aplicarIvaConFor(precios) {
  let preciosConIva = [];
  for (let i = 0; i < precios.length; i++) {
    preciosConIva.push(calcularConIva(precios[i]));
  }
  return preciosConIva;
}

let cantPrecios = Number(prompt("¿Cuántos productos?"));
let preciosSinIva = [];
for (let i = 0; i < cantPrecios; i++) {
  preciosSinIva.push(Number(prompt("Precio " + (i + 1) + ":")));
}

let preciosConIvaMap = aplicarIvaConMap(preciosSinIva);
let totalConIva = preciosConIvaMap.reduce((a, b) => a + b, 0); // Suma corta de apoyo funcional

console.log("Sin IVA: " + preciosSinIva.join(", "));
console.log("Con IVA: " + preciosConIvaMap.join(", "));
console.log("Total con IVA: $" + totalConIva);
