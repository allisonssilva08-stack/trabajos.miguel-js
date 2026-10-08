function leerNotaValida(numero) {
    let nota;

    do {
        nota = Number(promt("Nota" + numero + ":"));

 
        if (nota < 0 || nota > 5){
            console.log("Nota invalida, debe estar entre 0 y 5");
        }

    } while (nota < 0 || nota > 5);

    return nota;


function calcularPromedio(numeros) {
    let suma = 0;

    for(let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
  
  
    return suma / numeros.length;
}



function unirConComas(lista) {
    let texto = "";

  for  (let i = 0; i < lista.length; i++) {
        texto = texto + lista[i];

        if(i < lista.length - 1)  {
            texto = texto + ",";
        }
    }

    return texto;
}

let notas = [];

for(let i = 0; i < 5; i++) {
    let nota = leerNotaValida(i + 1);
    notas.push(nota);
}

let promedio = calcularPromedio(notas);

console.log("Notas:" + unirConComas8notas);
console.log("Promedio:" + promedio.toFixed(1));

if (promedio >= 3.0) {
    console.log("El grupo aproboo");
        
    } else {
    console.log("El grupo no aprobo");
}