/**
 *  Funcion de calculacion de la edad de 3 personas
 * Autor: Julian Naranjo
 * Martes 03 abril 2024
 */

    function calcularEdad(PanoNac) {
        let anoAct = 2024;
        let anoNac = PanoNac;
        let edad = anoAct - anoNac;

        if (edad<18) {
            return edad;
        } else {
            return edad;
        }
    }
    function promedio(Psuma, PnumPersonas){
        let Antsuma = Psuma;
        let numPersonas = PnumPersonas;
        let promedio = Antsuma / numPersonas;
        console.log(promedio);
    }
    const calcularEdadExp = function(PanoNac) {
        let anoAct = 2024;
        let anoNac = PanoNac;
        let edad = anoAct - anoNac;

        if (edad<18) {
            return edad;
        } else {
            return edad;
        }
    }
    const promedioExp = function(Psuma, PnumPersonas){
        let Antsuma = Psuma;
        let numPersonas = PnumPersonas;
        let promedio = Antsuma / numPersonas;
        return promedio
    }