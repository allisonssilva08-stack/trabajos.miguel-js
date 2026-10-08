function eliminarRepetidos(numeros) {
  let unicos = [];
  for (let i = 0; i < numeros.length; i++) {
    // Reutiliza existeEnLista del Ejercicio 6 pero evaluando sobre el array que se está construyendo
    if (!existeEnLista(unicos, String(numeros[i]))) {
      unicos.push(numeros[i]);
    }
  }
  return unicos;
}


let diezNumeros = [];
for (let i = 1; i <= 10; i++) {
  diezNumeros.push(Number(prompt("Número " + i + ":")));
}

let listaUnicos = eliminarRepetidos(diezNumeros);
let repetidosEliminados = diezNumeros.length - listaUnicos.length;

console.log("Sin repetidos: " + unirConComas(listaUnicos));
console.log("Se eliminaron " + repetidosEliminados + " repetidos");
