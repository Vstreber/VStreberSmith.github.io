<!DOCTYPE html>
<html>
<body>

<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");

while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}

while(!feof($myfile)) {
  echo fgetc($myfile);
}

fclose($myfile);
?>

</body>
</html>