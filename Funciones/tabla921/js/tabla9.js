/**
 *  Funcion de la tabla de multiplicar del 9 hasta 5
 * Autor: Julian Naranjo
 * Martes 13 abril 2024
 */

        function tabla9(Pmultiplicando, Pmultiplicar){
            while(Pmultiplicando<5){
                Pmultiplicando++;
                let producto = Pmultiplicar *  Pmultiplicando;
                if(producto%2 == 0){
                    console.log(+ Pmultiplicar + " x " + Pmultiplicando + " = " + producto + ", el numero es par ");
                } else {
                    console.log(+ Pmultiplicar + " x " + Pmultiplicando + " = " + producto + ", el numero es impar ");
                }
            }
        }
        const tabla9Exp = function(Pmultiplicando, Pmultiplicar){
            while(Pmultiplicando<5){
                Pmultiplicando++;
                let producto = Pmultiplicar *  Pmultiplicando;
                if(producto%2 == 0){
                    console.log(+ Pmultiplicar + " x " + Pmultiplicando + " = " + producto + ", el numero es par ");
                } else {
                    console.log(+ Pmultiplicar + " x " + Pmultiplicando + " = " + producto + ", el numero es impar ");
                }
            }
        }