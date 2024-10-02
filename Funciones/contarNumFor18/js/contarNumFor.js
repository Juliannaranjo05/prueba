/**
 *  Funcion que cuenta los numeros y decir numeros pares e impares
 * Autor: Julian Naranjo
 * Martes 11 abril 2024
 */
 
    function contar(limite){
        for( contador=1;contador<=limite;contador++){
            if(contador%2 == 0){
                console.log("El numero "  + contador +  " es par");
            } else {
                console.log("El numero " + contador + " es impar")
            }
        }
    }
    const contarExp = function(limite){
        for( contador=1;contador<=limite;contador++){
            if(contador%2 == 0){
                console.log("El numero "  + contador +  " es par");
            } else {
                console.log("El numero " + contador + " es impar")
            }
        }
    }