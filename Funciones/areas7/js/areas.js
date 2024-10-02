/**
 *  Funcion de las areas de el cuadrado, rectangulo y triangulo
 * Autor: Julian Naranjo
 * Martes 02 abril 2024
 */

    

    function areas(baseCuad, alturaCuad, baseRect, alturaRect, baseTri, alturaTri, radioCir, catetoOpuesto, catetoAdyacente){
        let pi = 3.1416
        let cuadrado = baseCuad * alturaCuad;
        let rectangulo = baseRect * alturaRect;
        let triangulo = (baseTri * alturaTri)/2;
        let circulo = (radioCir*radioCir) * pi
        let trianguloRect = (catetoAdyacente * catetoOpuesto)/2;

        console.log("La area del rectangulo es " + rectangulo);
        console.log("La area del triangulo rectangulo es " + trianguloRect);
        console.log("La area del triangulo es " + triangulo);
        console.log("La area del circulo es " + circulo);
    }
    const areasExp = function(baseCuad, alturaCuad, baseRect, alturaRect, baseTri, alturaTri){
        let cuadrado = baseCuad * alturaCuad;
        let rectangulo = baseRect * alturaRect;
        let triangulo = (baseTri * alturaTri)/2;
        let trianguloRect =

        console.log("La area del cuadrado es " + cuadrado);
        console.log("La area del rectangulo es " + rectangulo);
        console.log("La area del triangulo es " + triangulo);
    }