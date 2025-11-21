<?php
    $filename = $_REQUEST["filename"];
    $file = fopen($filename,"r");
    $read = fread($file, filesize($filename));
    fclose($file);

    $array = json_decode($read);

    echo '<p> Table sorted by username: </p>';
    $usernames  = array_column($array, 'username');

    array_multisort($usernames, SORT_ASC, $array);

    echo("<table>");
        echo("<tr>");
            foreach ($array[0] as $x => $y) {
                echo("<th>".$x."</th>");
            }
        echo("</tr>");
            
    for ($i = 0; $i < count($array); $i++) {
        echo("<tr>");
        foreach ($array[$i] as $x){
            if (strcmp(gettype($x),"array") == 0) {
                echo("<td>");
                foreach ($x as $y){
                    echo($y." ");
                }
                echo("</td>");
            } else {
                echo("<td>".$x."</td>");
            }
        }
        echo("</tr>");
    }

    echo("</table>");


?>