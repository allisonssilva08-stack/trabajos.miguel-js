function existeEnLista(Lista, valor){
    let valorMin = valor.toLowerCase();
    for (let i = 0; i < Lista.length; i++){
        if (lista[i].toLowerCase() === valorMin){
            return true;
        }
    }
    return false;
}



let invitados = ["ana", "carlos", "luisa", "pedro", "sofia"];
let entraron = 0;
let rechazados = 0;


let nombreIngresado = prompt("Nombre:");
while (nombreIngresado.toLowerCase() !== "fin"){
    if (existeEnLista(invitados, nombreIngresado)){
        console.log(nombreIngresado + " puede entrar");
        entraron++;
    }else{
        console.log(nombreIngresado + " no está en la lista");
        rechazados++;
    }
    nombreIngresado = promt("Nombre:");
}


console.log("Entraron" + entraron);
console.log("Rechazados:" + rechazados);