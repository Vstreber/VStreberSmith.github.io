<?php

    /** Grabbing variables sent from XHTTP */
    $filename = $_REQUEST["filename"];
    $title = $_REQUEST["title"];

    /** Reading notes.json into an array. */
    $file = fopen($filename,"r");
    $read = fread($file, filesize($filename));
    fclose($file);

    $array = json_decode($read);
    $array = (array)$array;
    
    echo $title;

    /** If the title exists, deleted corresponding note. */
    $i = 0;
    foreach ($array as $note) {
        if (strcmp($note->title, $title) == 0) {
            unset($array[$i]);
        }
        $i++;
    }

    $file = fopen($filename, "w") or die("Unable to open file!");

    fwrite($file, json_encode($array));
    fclose($file);
?>