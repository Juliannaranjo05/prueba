/**
 *  Funcion de operacion aritmetica
 * Autor: Julian Naranjo
 * Lunes 01 abril 2024
 */

    let numeroUno;
    let numeroDos;

    const suma = function(PnumeroUno, PnumeroDos) {
        let sumar;
        numeroUno = PnumeroUno;
        numeroDos = PnumeroDos;

        sumar = numeroUno + numeroDos;
        return sumar;
    }
    const resta = function(PnumeroUno, PnumeroDos) {
        let restar;
        numeroUno = PnumeroUno;
        numeroDos = PnumeroDos;

        restar = numeroUno + numeroDos;
        return restar;
    }
    const multiplicacion = function(PnumeroUno, PnumeroDos) {
        let multiplicar;
        numeroUno = PnumeroUno;
        numeroDos = PnumeroDos;

        multiplicar = numeroUno + numeroDos;
        return multiplicar;
    }
    const operacion = function(Poperador, PnumeroUno , PnumeroDos ){
        let operador = Poperador;
        let operacionResult;
        numeroUno = PnumeroUno;
        numeroDos = PnumeroDos;
            if operador == "suma"{
            suma(numeroUno, numeroDos);
    }
}