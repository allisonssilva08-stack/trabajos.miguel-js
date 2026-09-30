function calcularInteres(saldo, porcentaje){
    return saldo * (porcentaje / 100);
}

function mostrarInversion(capital, meses) {
    let saldoActual = capital;

for (let mes = 1; mes <= meses; mes++) {
    let interes  = calcularInteres(saldoActual, 2);
    saldoActual = saldoActual + interes;
    console.log("Mes" + mes + ":" + saldoActual);
}

let gananciaTotal = saldoActual - capital;
console.log("Ganancia total:" + gananciaTotal);
}

let capInicial = Number(prompt("Capital inicial:"));
let numMeses = Number(promt("Numero de meses:"));
motrarInversion(capInicial,numMeses);