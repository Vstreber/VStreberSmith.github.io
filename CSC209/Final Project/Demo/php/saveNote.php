<?php

    /** Grabbing variables sent from XHTTP */
    $filename = $_REQUEST["filename"];
    $content = $_REQUEST["content"];
    $title = $_REQUEST["title"];

    /** Getting current notes array */
    $file = fopen($filename,"r");
    $read = fread($file, filesize($filename));

    $array = json_decode($read);
    $array = (array)$array;
    fclose($file);

    foreach ($array as $note) {
        if (strcmp($note->title, $title) == 0) {
            $note->content = $content;
            echo $note->content;
        }
    }

    $file = fopen($filename, "w") or die("Unable to open file!");

    fwrite($file, json_encode($array));
    fclose($file);
?>