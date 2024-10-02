/**
 *  Funcion de si el numero es mayor, menor o igual
 * Autor: Julian Naranjo
 * Martes 03 abril 2024
 */

    function numeroMayor(Pnum1, Pnum2){

        if (Pnum1 == Pnum2) {
            return "Los numeros son iguales";
        } else if (Pnum1>Pnum2){
            return "El numero 1 es mayor " + Pnum1;
        } else {
            return "El numero 2 es mayor = " + Pnum2;
        }
    }
    const numeroMayorExp = function(Pnum1, Pnum2){

        if (Pnum1 == Pnum2) {
            return "Los numeros son iguales";
        } else if (Pnum1>Pnum2){
            return "El numero 1 es mayor " + Pnum1;
        } else {
            return "El numero 2 es mayor = " + Pnum2;
        }
    }