function multiplicar(multiplicando, multiplicador) {
    return multiplicando*multiplicador;
}

function mostrarTabla(numero){
    for(let i= 1; i<= 10; i++){
        let producto=multiplicar(numero, i);
    
console.log(numero + "x" + i +"=" + producto);
    }
}

let numeroUsuario = Number(promt("Numero:"));

mostrarTabla(numeroUsuario);