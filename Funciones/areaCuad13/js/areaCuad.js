/**
 *  Funcion sobre calcular el area de 3 cuadrados y saber cual es la mayor
 * Autor: Julian Naranjo
 * Martes 03 abril 2024
 */

    function cuadrado(Plado, Plado1, Plado2, Plado3, Plado4, Plado5){
        let areaCuad = Plado * Plado1;
        let areaCuad2 = Plado2 * Plado3;
        let areaCuad3 = Plado4 * Plado5;

        if (areaCuad == areaCuad2 & areaCuad2 == areaCuad3 & areaCuad3 == areaCuad){
            console.log("Las areas son iguales con " + areaCuad);
        } else if (areaCuad > areaCuad2 & areaCuad > areaCuad3) {
            return "El area mas grande es la 1 con " + areaCuad;
        } else if (areaCuad2 > areaCuad3) {
            return "el area mas grande es la 2 con " + areaCuad2;
        } else {
            return "El area mas grande es la 3 con " + areaCuad3;
        }
    }
    const cuadradoExp = function(Plado, Plado1, Plado2, Plado3, Plado4, Plado5){
        let areaCuad = Plado * Plado1;
        let areaCuad2 = Plado2 * Plado3;
        let areaCuad3 = Plado4 * Plado5;

        if (areaCuad == areaCuad2 & areaCuad2 == areaCuad3 & areaCuad3 == areaCuad){
            console.log("Las areas son iguales con " + areaCuad);
        } else if (areaCuad > areaCuad2 & areaCuad > areaCuad3) {
            return "El area mas grande es la 1 con " + areaCuad;
        } else if (areaCuad2 > areaCuad3) {
            return "el area mas grande es la 2 con " + areaCuad2;
        } else {
            return "El area mas grande es la 3 con " + areaCuad3;
        }
    }