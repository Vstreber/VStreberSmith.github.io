<?php
    $filename = $_REQUEST["filename"];
    $file = fopen($filename,"r");
    $read = fread($file, filesize($filename));
    fclose($file);

    $array = json_decode($read);


    $array = (array)$array;
    echo '<p> Table sorted by username: </p>';
    
    $usernames  = array_column($array, 'username');
    array_multisort($usernames, SORT_ASC, $array);

    echo("<table>");
        echo("<tr>");
            $i = 1;
            foreach ($array[0] as $x => $y) {
                echo("<th id='".$i."'>".$x."</th>");

                $i = $i + 1;
            }
        echo("<th> delete user </th>");
        echo("<th> edit user </th>");
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

        echo('<td>
                <button type="button" id="delete" onclick="callDelete(\''.$array[$i]->username.'\');">Delete</button>
        </td>');

        echo('<td>
                <button type="button" id="edit" onclick="callEdit(\''.$array[$i]->username.'\');">Edit</button>
        </td>');

        echo("</tr>");

    }

    echo("</table>");
?>

