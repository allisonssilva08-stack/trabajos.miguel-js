function convertirAKelvin(celsius){
    return celsius + 273.15;
}

function convertirAFahrenheit(celsius){
    return celsius * 9 / 5 + 32;
}

function calcularPromedio(suma, cantidad){
    return suma / cantidad;
}

function gestionarTemperaturas(){
    let dias = Number(promt("¿Cuantos dias?:"));
    let sumaCelsius = 0;

for(let i = 1; i<= dias; i++){
    let celsius = Number(prompt("Temperatura dia" + i + "(°C):"));
    sumaCelsius = sumaCelsius + celsius;

    let Kelvin = convertirAKelvin(celsius);
    let Fahrenheit = convertirAFahrenheit(celsius);

console.log("Dia" + i + ":" + celsius +  "°C =" + Kelvin + "K" + fahrenheit + "°F");
}

let promedio = calcularPromedio(sumaCelsius, dias);
console.log("Promedio:" + promedio + "°C");
}

gestionarTemperaturas();