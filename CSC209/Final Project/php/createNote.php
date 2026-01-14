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

    /** If the title sent already exists, ends the creation process and notifies user. */
    foreach ($array as $note) {
        if (strcmp($note->title, $title) == 0) {
            echo "<script>alert('Please choose a unique title.');</script>";
            exit;
        }
    }

    /** Otherwise, pushes a new note to notes.json. */
    $filler = 'write anything!';
    array_push($array, array("title"=>$title, "content"=>$filler));
    shuffle($array);

    $file = fopen($filename, "w") or die("Unable to open file!");

    fwrite($file, json_encode($array));
    fclose($file);

?>