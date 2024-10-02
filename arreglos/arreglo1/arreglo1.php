<?php
$arreglo = array();
$arreglo = array(1, 2, 3, 4, 5);

$num1 = $arreglo[0];
$num2 = $arreglo[2];
$num3 = $arreglo[4];
$cantidadDatos = count($arreglo);

for ($iterar = 0; $iterar < $cantidadDatos; $iterar++) {
    echo $arreglo[$iterar] . "\n";
}

echo $num1 . ", " . $num2 . ", " . $num3 . "\n";

foreach ($arreglo as $elemento) {
    echo $elemento . "\n";
}
?>
