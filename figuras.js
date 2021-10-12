// Código del cuadrado
console.group("Cuadrado")

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return  lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return Math.pow(lado,2)
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

// Código del triángulo
console.group("Triangulo");

//const ladoTriangulo1 = 5;
//const ladoTriangulo2 = 4;
//const ladoTriangulo3 = 3;
/*
console.log(
    "Los lados del triángulo (1,2,3) miden: (" 
    + ladoTriangulo1 + ", " 
    + ladoTriangulo2 + ", " 
    + ladoTriangulo3 + ") " + "cm"
);
*/
function perimetroTriangulo(a,b,c) {
    return a+b+c;
} 
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(b,h){
    return (b*h)/2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del círculo
console.group("Circulo")

//const radioCirculo = 5.5;
//console.log("El radio del círculo mide: " + radioCirculo + "cm");
//const diametroCirculo = 2 * radioCirculo;
//console.log("El diámetro del círculo mide: " + diametroCirculo + "cm");

function perimetroCirculo(radio) {
    return Math.PI * 2 * radio;
}
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

function areaCirculo(radio) {
    return Math.PI * (radio * radio);
}
//console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();