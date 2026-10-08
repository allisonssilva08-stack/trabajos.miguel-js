function invertir(lista) {
  let listaInvertida = [];
 
  for (let i = lista.length - 1; i >= 0; i--) {
    listaInvertida.push(lista[i]);
  }
  return listaInvertida;
}


let cantPalabras = Number(prompt("¿Cuántas palabras?"));
let palabrasOriginales = [];
for (let i = 0; i < cantPalabras; i++) {
  palabrasOriginales.push(prompt("Palabra " + (i + 1) + ":"));
}

let palabrasInvertidas = invertir(palabrasOriginales);

console.log("Original: " + unirConComas(palabrasOriginales));
console.log("Invertido: " + unirConComas(palabrasInvertidas));
