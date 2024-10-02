/**
 *  Funcion de calcular la edad de una persona y si es mayor o menor de edad
 * Autor: Julian Naranjo
 * Martes 04 abril 2024
 */

    function persona(PanoAct, PanoNac) {
        let anoAct = PanoAct;
        let anoNac = PanoNac;
    
        let persona = anoAct - anoNac

        if (persona<18) {
            return "la persona es menor de edad con " + persona + " años";
        } else {
            return "la persona es mayor de edad con " + persona + " años";
        }
    }
    const personaExp = function(PanoAct, PanoNac) {
        let anoAct = PanoAct;
        let anoNac = PanoNac;
    
        let persona = anoAct - anoNac

        if (persona<18) {
            return "la persona es menor de edad con " + persona + " años";
        } else {
            return "la persona es mayor de edad con " + persona + " años";
        }
    }