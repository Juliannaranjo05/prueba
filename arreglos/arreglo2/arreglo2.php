<?php
$tienda = [];
$numeroRegistro;
$listaBusqueda = [];
$nuevoProducto;

//*Arreglo//*
$tienda = [
    ['producto' => 'arroz', 'tipoProducto' => 'grano', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '7500'],
    ['producto' => 'lechona', 'tipoProducto' => 'grano', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '7500'],
    ['producto' => 'arroz', 'tipoProducto' => 'grano', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '7500'],
    ['producto' => 'huevos', 'tipoProducto' => 'grano', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '7500'],
    ['producto' => 'res', 'tipoProducto' => 'carne', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '7500']
];

//*Modificacion//*
$tienda[2]['producto'] = 'Pechuga';

//*Agregar//*
$nuevoProducto = ['producto' => 'leche', 'tipoProducto' => 'grano', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '7500'];
$tienda[] = $nuevoProducto;

$numeroRegistro = count($tienda);

//*Buscar//*
for ($iteracion = 0; $iteracion < $numeroRegistro; $iteracion++) {
    if ($tienda[$iteracion]['producto'] == 'Pechuga') {
        $listaBusqueda[] = $tienda[$iteracion];
    } else {
        echo ' ';
    }
}

print_r($listaBusqueda);
echo "\n";
print_r($tienda);
?>
