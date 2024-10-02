<?php
    include('libreria/Numero.php');
    include('libreria/Operaciones.php');

    $DiasTrab = new Numero(10);
    $ValorDia = new Numero(30.000);

    $operaciones = new Operaciones($DiasTrab, $ValorDia);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php echo $operaciones->mostrarValores() ?>
    
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
       <strong><p>El valor del dia es:</p></strong> <?php echo $ValorDia() ?>
    
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
       <strong><p>Su salario total es:</p></strong> <?php echo $operaciones->sueldo() ?>
    
</body>
</html>

