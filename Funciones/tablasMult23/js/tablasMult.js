/**
 *  Funcion de las tablas de multiplicar del 1 hasta el 5, hasta el 5
 * Autor: Julian Naranjo
 * Martes 14 abril 2024
 */

        function tablasMult(Pmultiplicando, Pmultiplicador, Plimite, PlimiteMultiplicador){
            let cantidadPar = 0;
            let cantidadImpar = 0;
            while (Pmultiplicando<Plimite) {
                Pmultiplicador = 0;
                Pmultiplicando++;
                while (Pmultiplicador < PlimiteMultiplicador) {
                    Pmultiplicador = Pmultiplicador + 1;
                    producto = Pmultiplicando * Pmultiplicador;
                    console.log(Pmultiplicando + " x " + Pmultiplicador + " = " + producto);
                    if (producto%2 == 0) {
                        console.log(producto + " buzz");
                        cantidadPar++;
                    } else {
                        console.log(producto + " bass");
                        cantidadImpar++;
                    }
                }
        }
        return "La cantidad total de numeros pares es " + cantidadPar + " y la de numeros impares es " + cantidadImpar
        }
        
    