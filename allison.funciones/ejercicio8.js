function obtenerMenor(a, b){
    if (a < b) return a;
    return b;
}

function obtenerMayor(a, b){
    if (a > b) return a;
    return b;
}

function calcularPromedio(suma, cantidad){
    return suma / cantidad;   
}

function verificarAutos(){
    let sumaPuntos = 0;
    let menorContaminacion = Infinity;
    let mayorContaminacion = Infinity;

    for(let i = 1; i <= 25; i++){
        let puntos = Number(promt("Puntos auto" + i + ":" ));

        sumaPuntos = sumaPuntos + puntos;

        if(i===1){
            menorContaminacion = puntos;
            mayorContaminacion = puntos;   
        }else{
            menorContaminacion = obtenerMnor(menorContaminacion, puntos);}
            mayorContaminacion = obtenerMayor(mayorContaminacion, puntos);
        }
    }

let promedio = calcularPromedio(sumaPuntos, 25);

console.log("Promedio:" + promedio);
console.log("Menor contaminacion:" + menorContaminacion);
console.log("Mayor contaminacion:" + mayorContaminacion);
}

verificarAutos();

