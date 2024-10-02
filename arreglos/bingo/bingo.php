<?php
$bingo = [];
$interno = [];
$iteracionX = 0;
$iteracionY = 4;

// Generar la tabla de bingo con números aleatorios
for ($iteracion1 = 0; $iteracion1 < 5; $iteracion1++) {
    $interno = [];
    for ($iteracion2 = 0; $iteracion2 < 5; $iteracion2++) {
        $interno[$iteracion2] = rand(1, 100);
    }
    $bingo[$iteracion1] = $interno;
}

// Imprimir la tabla de bingo
print_r($bingo);

echo "Los números de la diagonal de arriba hacia abajo son:\n";
for ($iteracion1 = 0; $iteracion1 < 5; $iteracion1++) {
    echo $bingo[$iteracion1][$iteracionX] . "\n";
    $iteracionX++;
}

echo "Los números de la diagonal de abajo hacia arriba son:\n";
for ($iteracion1 = 0; $iteracion1 < 5; $iteracion1++) {
    echo $bingo[$iteracion1][$iteracionY] . "\n";
    $iteracionY--;
}
?>
