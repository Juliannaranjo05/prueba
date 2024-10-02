/**
 *  Funcion que calcula el pago total de una persona
 * Autor: Julian Naranjo
 * Martes 10 abril 2024
 */

    function pagoTotal(PdiasTrab, Pvalordia){
        let salarioVar = PdiasTrab * Pvalordia;
        let retencion = salarioVar * 0.04;
        let salarioMin = 1300000;
        let subsidioTrans = 162000;
        let saludVar = salarioVar * 0.12;
        let pensionVar = salarioVar * 0.16;
        let arlVar = salarioVar * 0.052;
        let descuentoVar = saludVar + pensionVar + arlVar;
        let sueldoVar = salarioVar - descuentoVar;
        
        if (salarioVar>salarioMin*4) {
            let sueldoVar = salarioVar - (descuentoVar + retencion);
            return "La persona gana mas de 4 salarios minimos, por lo cual se le hace una retencion del 0.04 de su salario, entonces su sueldo final es igual a " + sueldoVar
        } else if(salarioVar>salarioMin*2){
            sueldoVar = salarioVar - (descuentoVar + subsidioTrans);
            return "La persona gana mas de 2 salarios minimos, por lo cual se le suma el subcidio de transporte igual a $162.000, entonces su sueldo final es igual a " + sueldoVar
        } else {
            return "Su sueldo final es " + sueldoVar
        }
    }
    const pagototalExp = function(PdiasTrab, Pvalordia){
        let salarioVar = PdiasTrab * Pvalordia; 
        let retencion = salarioVar * 0.04; 
        let salarioMin = 1300000; 
        let subsidioTrans = 162000;
        let saludVar = salarioVar * 0.12; 
        let pensionVar = salarioVar * 0.16; 
        let arlVar = salarioVar * 0.052; 
        let descuentoVar = saludVar + pensionVar + arlVar; 
        let sueldoVar = salarioVar - descuentoVar; 

        if (salarioVar>salarioMin*4) {
            let sueldoVar = salarioVar - (descuentoVar + retencion);
            return "La persona gana mas de 4 salarios minimos, por lo cual se le hace una retencion del 0.04 de su salario, entonces su sueldo final es igual a " + sueldoVar
        } else if(salarioVar>salarioMin*2){
            sueldoVar = salarioVar - (descuentoVar + subsidioTrans);
            return "La persona gana mas de 2 salarios minimos, por lo cual se le suma el subcidio de transporte igual a $162.000, entonces su sueldo final es igual a " + sueldoVar
        } else {
            return "Su sueldo final es " + sueldoVar
        }
    }
    