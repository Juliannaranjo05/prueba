/**
 *  Funcion de el pago total de una persona
 * Autor: Julian Naranjo
 * Martes 02 abril 2024
 */
        function sueldo(PdiasTrab, Pvalordia){
            let sueldo = PdiasTrab * Pvalordia;
            let salud = sueldo * 0.12;
            let pension = sueldo * 0.16;
            let arl = sueldo * 0.052;
            let descuento = salud + pension + arl;
            let pagototal = sueldo - descuento;

            return {
                salud : salud,
                pension : pension,
                arl : arl,
                pagototal : pagototal
            }
        }
        const sueldoExp = function(PdiasTrab, Pvalordia){
            let sueldo = PdiasTrab * Pvalordia;
            let salud = sueldo * 0.12;
            let pension = sueldo * 0.16;
            let arl = sueldo * 0.052;
            let descuento = salud + pension + arl;
            let pagototal = sueldo - descuento;

            return {
                salud : salud,
                pension : pension,
                arl : arl,
                pagototal : pagototal
            }
        }
    