<?php
    include('operaciones.php');
    $operacion = new Operaciones;
    $operacion2 = new Operaciones;
    $operacion3 = new Operaciones;
    $operacion4 = new Operaciones;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo $operacion-> operaciones(numeroUno:3,numeroDos:10);
    echo $operacion2-> operaciones2(numeroUno:3,numeroDos:10); 
    echo $operacion3-> operaciones3(numeroUno:3,numeroDos:10);
    echo $operacion4-> operaciones4(numeroUno:10,numeroDos:10);
    ?>
    
</body>
</html>