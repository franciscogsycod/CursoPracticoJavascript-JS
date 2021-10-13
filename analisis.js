// Helpers/Utils

const salariosColombia = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosColombiaSorted = salariosColombia.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

function esPar(elemento) {
    return elemento % 2 === 0;
}

// Calculadora de mediana

function calcularMedianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const elementoMitad1 = lista[mitad];
        const elementoMitad2 = lista[mitad - 1];
        const elementoMitad = (elementoMitad1 + elementoMitad2) / 2;
        return elementoMitad;
    } else {
        const elementoMitad = lista[mitad];
        return elementoMitad;
    }
}

// Mediana General

const medianaGeneralColombia = calcularMedianaSalarios(salariosColombiaSorted)

// Mediana del TOP10%

const spliceInicio = (salariosColombiaSorted.length * 90) / 100;
const spliceCuenta = salariosColombiaSorted - spliceInicio;

const salariosColombia10PorCiento = salariosColombiaSorted.splice(
    spliceInicio,
    spliceCuenta
);

const medianaTop10PorCientoColombia = calcularMedianaSalarios(salariosColombia10PorCiento)

console.log(
    medianaGeneralColombia,
    medianaTop10PorCientoColombia
);