<?php

function jsonToArray($filename) {
    $file = fopen($filename,"r");
    $read = fread($file, filesize($filename));

    $array = json_decode($read);

    return $array;
}

var_dump(jsonToArray("users.json"));

?>