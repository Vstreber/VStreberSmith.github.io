<?php

include("reader.php");

$currentUsername = $_POST['currentUsername'];
$newUsername = $_POST['newUsername'];
$newPassword = $_POST['newPassword'];

$filename = "../json/users.json";

if (strcmp($currentUsername,"admin") == 0){

    echo "Cannot edit administrator!";

} else {

    $index = findIndex($filename,$currentUsername);

    //Getting current array
    $file = fopen($filename,"r");
    $read = fread($file, filesize($filename));

    $array = json_decode($read);
    $array = (array)$array;
    fclose($file);

    $array[$index]->username = $newUsername;
    $array[$index]->password = $newPassword;
    
    //Altering and returning new array
    $file = fopen($filename, "w") or die("Unable to open file!");

    fwrite($file, json_encode($array));
    fclose($file);

    //Renaming user directory
    rename("../html/Users/".$currentUsername, "../html/Users/".$newUsername);

    echo "Successfully edited user: ".$currentUsername;

}


?>