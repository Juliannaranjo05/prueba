<?php
$nomina = [];
$salarioMin = 1300000;
$muestra = [];
$numeroRegistro = count($nomina);
$iteracion;
$salario;

$nomina = [
    ['id' => '132', 'nombre' => 'Maria', 'apellidos' => 'Josefa Clemente', 'cargo' => 'alcaldesa', 'valorDia' => 700000000000, 'diasTrabajados' => 17, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0],
    ['id' => '135', 'nombre' => 'Mario', 'apellidos' => 'Quesada', 'cargo' => 'volador', 'valorDia' => 300, 'diasTrabajados' => 4, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0],
    ['id' => '145', 'nombre' => 'Matias', 'apellidos' => 'Tejada', 'cargo' => 'vendedor', 'valorDia' => 7000, 'diasTrabajados' => 72, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0],
    ['id' => '242', 'nombre' => 'Desiree', 'apellidos' => 'Ferreiro', 'cargo' => 'operario', 'valorDia' => 100000, 'diasTrabajados' => 30, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0],
    ['id' => '247', 'nombre' => 'Santos', 'apellidos' => 'Espejo', 'cargo' => 'directivo', 'valorDia' => 800, 'diasTrabajados' => 12, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0],
    ['id' => '167', 'nombre' => 'Maria', 'apellidos' => 'Lucia Herraiz', 'cargo' => 'gerente', 'valorDia' => 50000, 'diasTrabajados' => 16, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0],
    ['id' => '352', 'nombre' => 'Iñaki', 'apellidos' => 'Bolaños', 'cargo' => 'empleado', 'valorDia' => 40000, 'diasTrabajados' => 25, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0],
    ['id' => '283', 'nombre' => 'Esteban', 'apellidos' => 'Aguilera', 'cargo' => 'empleado', 'valorDia' => 400, 'diasTrabajados' => 17, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0],
    ['id' => '112', 'nombre' => 'Cayetana', 'apellidos' => 'Pineda', 'cargo' => 'empleado', 'valorDia' => 40000, 'diasTrabajados' => 17, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0],
    ['id' => '179', 'nombre' => 'Erik', 'apellidos' => 'Iglesias', 'cargo' => 'jefe', 'valorDia' => 100000, 'diasTrabajados' => 17, 'salario' => 0, 'subTrans' => 0, 'retencion' => 0, 'salud' => 0, 'pension' => 0, 'deducible' => 0]
];

foreach ($nomina as &$empleado) {
    $empleado['salario'] = $empleado['valorDia'] * $empleado['diasTrabajados'];
    echo "El salario de {$empleado['nombre']} es {$empleado['salario']}\n";

    if ($empleado['salario'] < $salarioMin * 2) {
        $empleado['subTrans'] = 120000;
        echo "El subsidio de transporte de {$empleado['nombre']} es {$empleado['subTrans']}\n";
    } else {
        $empleado['subTrans'] = 0;
        echo "{$empleado['nombre']} no tiene subsidio de transporte = {$empleado['subTrans']}\n";
    }

    if ($empleado['salario'] > $salarioMin * 6) {
        $empleado['retencion'] = 0.02;
        echo "{$empleado['nombre']} tiene una retencion de {$empleado['retencion']}\n";
    } else {
        $empleado['retencion'] = 0;
        echo "{$empleado['nombre']} no tiene retencion {$empleado['retencion']}\n";
    }

    if ($empleado['salario'] > $salarioMin * 8) {
        $empleado['retencion'] = 0.04;
        echo "{$empleado['nombre']} tiene una retencion de {$empleado['retencion']}\n";
    } else {
        $empleado['retencion'] = 0;
        echo "{$empleado['nombre']} no tiene retencion {$empleado['retencion']}\n";
    }

    if ($empleado['salario'] > $salarioMin * 12) {
        $empleado['retencion'] = 0.08;
        echo "{$empleado['nombre']} tiene una retencion de {$empleado['retencion']}\n";
    } else {
        $empleado['retencion'] = 0;
        echo "{$empleado['nombre']} no tiene retencion {$empleado['retencion']}\n";
    }

    $empleado['salud'] = $empleado['salario'] * 0.12;
    echo "{$empleado['nombre']} su salud es igual a {$empleado['salud']}\n";

    $empleado['pension'] = $empleado['salario'] * 0.16;
    echo "{$empleado['nombre']} su pension es igual a {$empleado['pension']}\n";

    $empleado['arl'] = $empleado['salario'] * 0.052;
    echo "{$empleado['nombre']} su arl es igual a {$empleado['arl']}\n";

    $empleado['deducible'] = $empleado['pension'] + $empleado['salud'];
    $empleado['pagoTotal'] = ($empleado['salario'] + $empleado['subTrans']) - $empleado['deducible'];
    echo "{$empleado['nombre']} {$empleado['apellidos']} su pago total es de $ {$empleado['pagoTotal']}\n";
    echo "\n";
}

print_r($nomina);
?>
