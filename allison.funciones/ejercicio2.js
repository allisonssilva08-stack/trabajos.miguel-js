function calcularCubo(numero){
    return numero * numero * numero;
}

function calcularCuartaParte(numero){
    return numero / 4;
}

function procesarNumeros(){
    let sumaCubos = 0;

for (let i = 1; i<= 10; i++) {
    let num = Number(prompt("Numero" + i + ":"));

    sumaCubos = sumaCubos + cubo;

    console.log("Numero:" + num + "| Cubo:" + cubo + "| Cuarta parte:" + cuartaParte);
}

console.log("Suma de los cubos:" + sumaCubos);}

procesarNumeros();
