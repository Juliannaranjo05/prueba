<?php
    include('Numero.php');
    include('operaciones.php');
    $num1 = new Numero(10);
    $num2 = new Numero(30);

    $operaciones = new Operaciones($num1, $num2);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
       <strong><p>El resultado es:</p></strong> <?php echo $operaciones->suma()  ?>
    

</body>
</html>