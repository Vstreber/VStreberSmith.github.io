<?php

include("reader.php");

$username = $_POST['uname'];
$password = $_POST['psw'];

$filename = "../json/users.json";

$file = fopen($filename,"r");
$read = fread($file, filesize($filename));

$array = json_decode($read);
$array = (array)$array;
fclose($file);

if (in_array($username, array_column($array, 'username'))){
    echo '<h2>User already exists - cannot make new account</h2>';
    echo '<form action="../html/loginPage.html.php">
    <input type="submit" value="Back to Login" />
    </form>';
} else {

    $newEntry = array("username"=>$username, "password"=>$password, "loggedtimes"=>0, "minuteslogged"=>[]);

    array_push($array,$newEntry);
    shuffle($array);
    //Altering and returning new array
    $file = fopen($filename, "w") or die("Unable to open file!");

    fwrite($file, json_encode($array));
    fclose($file);

    mkdir("../html/Users/".$username);
    mkdir("../html/Users/".$username."/Images");
    
    echo "<h2>User successfully registered! </h2>";
    echo '<form action="../html/loginPage.html.php">
    <input type="submit" value="Back to Login" />
    </form>';

}
?>