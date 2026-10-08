function leerNumeros(cantidad) {
    let numeros = [];

    for (let i = 0; i < cantidad; i++) {
        let numero = Number(prompt("Numero" + (i + 1) + ":"));
        numeros.push(numero);
    }

    return numeros;
}

function obtenerUltimo(numeros) {
    return numeros[numeros.length - 1];
}

function mostrarMedio(numeros) {
    let cantidad = numeros.length;

    if (cantidad % 2 !==0) {
        let indiceMedio = Math.floor(cantidad / 2);
        console.log("Del medio:" + numeros[indiceMedio]);
    } else {
        let indiceMedio1 = cantidad / 2 - 1;
        let indiceMedio2 = cantidad / 2;

        console.log(
            "Del medio:" +
            numeros[indiceMedio] +
            " y " + 
            numeros[indiceMedio2] 
        );
    }

}

let cantidad;

do {
    cantidad = Number(promt("'Cuantos numeros?"));

    if (cantidad < 1) {
        console.log("La cantidad debe ser al menos 1");
    }
} while (cantidad < 1);

let numeros = leerNumeros(cantidad);

console.log("Primero:" + numero[0]);
console.log("Ultimo:" + obtenerUltimo(numeros));


mostrarMedio(numeros);
