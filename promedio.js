// ********* Media Aritmética

function calcularMediaAritmetica(lista){
    //let sumaLista = 0;
    //for (let i=0; i < lista.length; i++){
    //    sumaLista = sumaLista + lista[i];
    //}

    const listaOrdenada = lista.sort(function(a, b){return a - b});
    console.log(listaOrdenada);

    const sumaLista = listaOrdenada.reduce(
        function(valorAcumulado = 0, elementoActual){
            return valorAcumulado+elementoActual;
        }
    );

    mediaAritmetica = sumaLista/listaOrdenada.length;
    return mediaAritmetica;
}

// ********* Mediana

function calcularMediana(lista){
    
    const listaOrdenada = lista.sort(function(a, b){return a - b});
    console.log(listaOrdenada);

    mitadLista = parseInt(listaOrdenada.length/2);
    function paridad(elemento){
        if(elemento % 2 === 0){
            return true;    // ES PAR
        }else {
            return false;   // ES IMPAR
        }
    }
    
    let Mediana;

    if(paridad(listaOrdenada.length)){
        elemento1 = listaOrdenada[mitadLista];
        elemento2 = listaOrdenada[mitadLista - 1];
        Mediana = (elemento1+elemento2)/2;
    }else{
        Mediana = listaOrdenada[mitadLista];
    }
    return Mediana;
}