<?php
    include('saludoGet.php');
    $saluda = new Saludo;
    $saluda->setSaludar("Holaaaa Samuel");
    
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
    echo $saluda->getSaludar();
    
    ?>
</body>
</html>