let nomina = [];
let nominaPagos = [];
let Totalpago = [];
let repetir;
let salarioMin = 1600000;


nomina = [
    {id:'132', nombre:'Maria', apellidos:'Josefa Clemente', cargo:'alcaldesa', valorDia:'70', diasTrabajados:'17'},
    {id:'135', nombre:'Mario', apellidos:'Quesada', cargo:'volador', valorDia:'300', diasTrabajados:'4'},
    {id:'145', nombre:'Matias', apellidos:'Tejada', cargo:'vendedor', valorDia:'7000', diasTrabajados:'72'},
    {id:'242', nombre:'Desiree', apellidos:'Ferreiro', cargo:'operario', valorDia:'10000000', diasTrabajados:'30'},
    {id:'247', nombre:'Santos', apellidos:'Espejo', cargo:'directivo', valorDia:'800000', diasTrabajados:'20'},
    {id:'167', nombre:'Maria', apellidos:'Lucia Herraiz', cargo:'gerente', valorDia:'9600200', diasTrabajados:'1'},
    {id:'352', nombre:'Iñaki', apellidos:'Bolaños', cargo:'empleado', valorDia:'40000', diasTrabajados:'25'},
    {id:'283', nombre:'Esteban', apellidos:'Aguilera', cargo:'empleado', valorDia:'400', diasTrabajados:'17'},
    {id:'112', nombre:'Cayetana', apellidos:'Pineda', cargo:'empleado', valorDia:'40000', diasTrabajados:'17'},
    {id:'179', nombre:'Erik', apellidos:'Iglesias', cargo:'jefe', valorDia:'100000', diasTrabajados:'17'}
]
nominaPagos = [
    {id:'', nombre:'', apellidos:'', cargo:'', salario:'0', subTrans:'0', arl:'0', retencion:'0', salud:'0', pension:'0', deducible:'0'},
    {id:'', nombre:'', apellidos:'', cargo:'', salario:'0', subTrans:'0', arl:'0', retencion:'0', salud:'0',pension:'0', deducible:'0'},
    {id:'', nombre:'', apellidos:'', cargo:'', salario:'0',subTrans:'0', arl:'0', retencion:'0', salud:'0', pension:'0', deducible:'0'},
    {id:'', nombre:'', apellidos:'', cargo:'',salario:'0',subTrans:'0', arl:'0', retencion:'0', salud:'0',pension:'0',deducible:'0'},
    {id:'', nombre:'', apellidos:'', cargo:'', salario:'0',subTrans:'0', arl:'0', retencion:'0',salud:'0', pension:'0',deducible:'0'},
    {id:'', nombre:'', apellidos:'', cargo:'', salario:'0',subTrans:'0', arl:'0', retencion:'0', salud:'0', pension:'0', deducible:'0'},
    {id:'', nombre:'', apellidos:'', cargo:'', salario:'0',subTrans:'0', arl:'0', retencion:'0',salud:'0', pension:'0', deducible:'0'},
    {id:'', nombre:'', apellidos:'', cargo:'', salario:'0',subTrans:'0', arl:'0', retencion:'0', salud:'0', pension:'0',deducible:'0'},
    {id:'', nombre:'', apellidos:'', cargo:'', salario:'0',subTrans:'0', arl:'0', retencion:'0', salud:'0',pension:'0',deducible:'0'},
    {id:'', nombre:'', apellidos:'', cargo:'',salario:'0',subTrans:'0', arl:'0', retencion:'0', salud:'0',pension:'0', deducible:'0'}
]
Totalpago = [
    {arl:'0', retencion:'0', salud:'0', pension:'0', Pagototal:'0'},
    {arl:'0', retencion:'0', salud:'0',pension:'0', Pagototal:'0'},
    {arl:'0', retencion:'0', salud:'0', pension:'0', Pagototal:'0'},
    {arl:'0', retencion:'0', salud:'0',pension:'0', Pagototal:'0'},
    {arl:'0', retencion:'0',salud:'0', pension:'0', Pagototal:'0'},
    {arl:'0', retencion:'0', salud:'0', pension:'0', Pagototal:'0'},
    {arl:'0', retencion:'0',salud:'0', pension:'0', Pagototal:'0'},
    {arl:'0', retencion:'0', salud:'0', pension:'0', Pagototal:'0'},
    {arl:'0', retencion:'0', salud:'0',pension:'0', Pagototal:'0'},
    {arl:'0', retencion:'0', salud:'0',pension:'0', Pagototal:'0'}
]


    function iteracion(){
        for(repetir = 0 ; repetir < nominaPagos.length ; repetir++){
            nominaPagos[repetir].id = nomina[repetir].id;
            nominaPagos[repetir].nombre = nomina[repetir].nombre;
            nominaPagos[repetir].apellidos = nomina[repetir].apellidos;
            nominaPagos[repetir].cargo = nomina[repetir].cargo;
        }
    }
    //function salario(empleado){
       // for(empleado=0; empleado < nominaPagos.length; empleado++){
            //let valordia = nomina[empleado].valorDia;
            //let totalSalario = valordia * nomina[empleado].diasTrabajados;
            //nominaPagos[empleado].salario = totalSalario;
        //}
    //}
    function Salario(valorDia, diasTrabajados){
        const salarioTotal = valorDia * diasTrabajados;
        return salarioTotal;
    }
    function salud(valorDia, diasTrabajados){
        const pagoSalud = Salario(valorDia ,diasTrabajados)*0.12
        return pagoSalud;
    }
    function pension(valorDia, diasTrabajados){
        const pagoPension = Salario(valorDia, diasTrabajados)*0.16
        return pagoPension;
    }
    function arl(valorDia, diasTrabajados){
        const pagoArl = Salario(valorDia, diasTrabajados)*0.052;
        return pagoArl;
    }
    function deducible(valorDia, diasTrabajados){
        const pagoDeducible = pension(valorDia, diasTrabajados) + salud(valorDia, diasTrabajados);
        return pagoDeducible;
    }
    function subTrans(repetir){
        for(repetir=0; repetir < nominaPagos.length; repetir++){
        if (nominaPagos[repetir].Salario < salarioMin*2){
            nominaPagos[repetir].subTrans = 120000;
        } else {
            nominaPagos[repetir].subTrans = 0;
        }
        }
    }
    function retencion(repetir){
        for(repetir=0; repetir < nominaPagos.length; repetir++){
        if (nominaPagos[repetir].Salario > salarioMin*12){
            nominaPagos[repetir].retencion = 0.08;
        } else {
            if (nominaPagos[repetir].Salario > salarioMin*8){
                nominaPagos[repetir].retencion = 0.04;
            } else {
                if (nominaPagos[repetir].Salario > salarioMin*6){
                    nominaPagos[repetir].retencion = 0.02;
                } else {
                    nominaPagos[repetir].retencion = 0;
                }
            }
        }
        }
    }
    function Totalpagar(repetir){
        for(repetir=0; repetir < nominaPagos.length ; repetir++){
            salarioTotal = Salario(nomina[repetir].valorDia, nomina[repetir].diasTrabajados);
            pagoPension = pension(nomina[repetir].valorDia, nomina[repetir].diasTrabajados);
            pagoSalud = salud(nomina[repetir].valorDia, nomina[repetir].diasTrabajados);
            pagoArl = arl(nomina[repetir].valorDia, nomina[repetir].diasTrabajados);
            pagoDeducible = deducible(nomina[repetir].valorDia, nomina[repetir].diasTrabajados);
            nominaPagos[repetir].salario = salarioTotal;
            nominaPagos[repetir].salud = pagoSalud;
            nominaPagos[repetir].pension = pagoPension;
            nominaPagos[repetir].arl = pagoArl;
            nominaPagos[repetir].deducible = pagoDeducible;
        
            Totalpago[repetir].arl = nominaPagos[repetir].arl;
            Totalpago[repetir].retencion = nominaPagos[repetir].retencion;
            Totalpago[repetir].salud = nominaPagos[repetir].salud;
            Totalpago[repetir].pension = nominaPagos[repetir].pension;
            Totalpago[repetir].Pagototal = nominaPagos[repetir].salario - nominaPagos[repetir].deducible;
        }
    }


console.log(iteracion());
console.log(subTrans());
console.log(retencion());
console.log(Totalpagar());
console.log(nomina);
console.log(nominaPagos);
console.log(Totalpago);