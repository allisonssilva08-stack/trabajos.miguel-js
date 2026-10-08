function rotarDerecha(lista, k) {
  let n = lista.length;
  let listaRotada = [];
  
 
  for (let i = 0; i < n; i++) {
    listaRotada.push(undefined);
  }

  for (let i = 0; i < n; i++) {
    let nuevaPosicion = (i + k) % n;
    listaRotada[nuevaPosicion] = lista[i];
  }
  return listaRotada;
}


let cantPersonas = Number(prompt("¿Cuántas personas?"));
let filaOriginal = [];
for (let i = 0; i < cantPersonas; i++) {
  filaOriginal.push(prompt("Persona " + (i + 1) + ":"));
}
let k = Number(prompt("¿Cuántas posiciones rotar?"));

let filaRotada = rotarDerecha(filaOriginal, k);

console.log("Fila original: " + unirConComas(filaOriginal));
console.log("Fila rotada: " + unirConComas(filaRotada));
