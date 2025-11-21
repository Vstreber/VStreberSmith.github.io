<html>

<body>

<p>This page figures out its whereabouts</p>

<?php
    $path = realpath("whereami.html.php");
    $path = dirname($path);
    $basename = basename($path);
    
    $labNrString = substr($basename ,3 );

    echo $path . "<br>";
    echo $basename . "<br>";
    echo $labNrString . "<br>";

    if (is_numeric($labNrString)){
        $labNr = (int)$labNrString;
    }
    
    echo '<h3>My lab number is '.$labNr.'</h3> <br>';

?>

</body>

</html>
