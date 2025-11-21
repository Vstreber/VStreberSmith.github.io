<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/admin.css">
    </head>
    <body>
        <?php
            include 'reader.php';

            $array = jsonToArray("users.json");

            echo("<table>");
                echo("<tr>");
                    foreach ($array[0] as $x => $y) {
                        echo("<th>".$x."</th>");
                    }
                echo("</tr>");
                    
            for ($i = 0; $i < count($array); $i++) {
                echo("<tr>");
                foreach ($array[$i] as $x){
                        echo("<td>$x");
                }
                echo("</tr>");
            }

            echo("</table>");
        ?>
    </body>
</html>

