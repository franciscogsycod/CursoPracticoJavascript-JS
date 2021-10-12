//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = (100 - descuento);
    return (precio*porcentajePrecioConDescuento)/100;
}

function calculaPrecioConDescuento() {
    const price = document.getElementById("inputPrice");
    const valuePrice = price.value;
    const discount = document.getElementById("inputDiscount");
    const valueDiscount = discount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const showResult = document.getElementById("priceWithDiscount");
    showResult.innerText = `El precio con descuento es de ${precioConDescuento}`;
}

//console.log(`El precio original es ${precioOriginal}`);
//console.log(`El descuento es del ${descuento}%`)
//console.log(`El precio con descuento es ${precioCONDescuento}`)
