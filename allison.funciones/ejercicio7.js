function tieneDescuento(Kilos){
    return Kilos > 10;
}

function calcularTotalCliente(Kilos, precioKilo){
    let totalBruto= Kilos * precioKilo;

    if (tieneDescuentos(Kilos)){
        return totalBruto * 0.85;
    }
    return totalBruto;
}

function procesqarVentasTienda(){
    let precioPorKilo = Number(promt("Precio por kilo"));
    let totaRecaudado = 0;
    let ClientesConDescuento = 0;

    for(let i = 1; i <= 15; i++){
        let KilosCliente = Number(promt("Kilos cliente" + i + ":"));
        let TotalPagar = calcularTotalClientes(KilosCliente, precioPorKilo);}
       
        totalRecaudado = totalRecaudado + totalPagar;
    }
        if (tieneDescuento(KilosCliente)){
            clientesConDescuento = clientesConDeescuento + 1;
            console.log("Cliente" + i + "paga:" + totalPagar + "(con descuento)");
        }else{
            console.log("Cliente" + i + "paga:" + totalPagar);
        }
        
    console.log("Total recaudado:" + totalRecaudado);
    console.log("Clientes con descuento:" + clientesConDescuento);
    }

    procesarVentasTienda();
