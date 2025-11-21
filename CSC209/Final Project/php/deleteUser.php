<?php

//https://stackoverflow.com/questions/3349753/delete-directory-with-files-in-it
function deleteDir(string $dirPath): void {
    if (! is_dir($dirPath)) {
        throw new InvalidArgumentException("$dirPath must be a directory");
    }
    if (substr($dirPath, strlen($dirPath) - 1, 1) != '/') {
        $dirPath .= '/';
    }
    $files = glob($dirPath . '*', GLOB_MARK);
    foreach ($files as $file) {
        if (is_dir($file)) {
            deleteDir($file);
        } else {
            unlink($file);
        }
    }
    rmdir($dirPath);
}

include("reader.php");

$username = $_POST['username'];
$filename = "../json/users.json";

if (strcmp($username,"admin") == 0){

    echo "Cannot delete administrator!";

} else {

    $index = findIndex($filename,$username);

    //Getting current array
    $file = fopen($filename,"r");
    $read = fread($file, filesize($filename));

    $array = json_decode($read);
    $array = (array)$array;
    fclose($file);


    //Altering and returning new array
    $file = fopen($filename, "w") or die("Unable to open file!");

    unset($array[$index]);
    shuffle($array);

    fwrite($file, json_encode($array));
    fclose($file);

    //Removing user directory
    deleteDir("../html/Users/".$username);

    echo "Successfully deleted user: ".$username;

}



?>