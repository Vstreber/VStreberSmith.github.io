<?php

    /** Grabbing variables sent from XHTTP */
    $prevTab = $_REQUEST["prevTab"];
    $prevContent = $_REQUEST["prevContent"];
    $title = $_REQUEST["currentTab"];
    $filename = $_REQUEST["filename"];

    /** Reading user's notes.json into an array. */
    $file = fopen($filename,"r");
    $read = fread($file, filesize($filename));

    $array = json_decode($read);
    $array = (array)$array;
    fclose($file);


    /** Switches displayed content to active tab, while also saving last content clicked off of to file.*/
    foreach ($array as $note) {
        if (strcmp($note->title, $title) == 0) {
            echo $note->content;
        }
        if (($prevTab != null) and ($prevContent != null)) {
            if (strcmp($note->title, $prevTab) == 0) {
                $note->content = $prevContent;
            }
        }
    }

    $file = fopen($filename, "w") or die("Unable to open file!");

    fwrite($file, json_encode($array));
    fclose($file);

?>