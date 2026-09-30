function calcularHorasExtra(horas){
    if (horas > 40){
        return horas - 40;
    }
    return 0;
}

function calcularSalarioSemanal(horas){
    let horasExtra = calcukarHorasExtra(horas);

    if (horasExtra > 0){
        let salarioBase = 40 * 12000;
        let salarioExtra = horasExtra * 1500;
        return salarioBase + salarioExtra;
}else{
    return horas * 12000;
}
    }

function procesarNomina(){
    let cantidadObreros = Number(promt("¿cuantos obreros?:"));
    let totalNomina = 0;

     for (let i = 1; i <= cantidadObreros; i++){
        let horasTrabajadas = Number(promt("Horas obrero" + i + ":"));
        let salarioObrero = calcularSalaroSemanal(horasTrabajadas);

        totalNomina = totalNomina + salarioObrero;
        console.log("Obreo" + i + ":" + salarioObrero);
     }
console.log("Total nomina:" + totalNomina);
}

procesarNomina();
