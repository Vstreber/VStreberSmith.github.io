<?php

    function jsonToArray($filename) {
        $file = fopen($filename,"r");
        $read = fread($file, filesize($filename));

        $array = json_decode($read);

        return $array;
    }

    function verify($username, $password, $filename) {
        $file = fopen($filename,"r");
        $read = fread($file, filesize($filename));

        $array = json_decode($read);

        for($i = 0; $i < count($array); $i++) {
        
            if ((strcmp($array[$i]->username, $username) == 0) and (strcmp($array[$i]->password, $password) == 0)) {
                updateLogTimes($filename, $i, $array);
                return "true";
            }
        }
        return "false";
    }

    function updateLogTimes($filename, $index, $array) {
        $myfile = fopen($filename, "w") or die("Unable to open file!");

        $currentTimes = $array[$index]->loggedtimes;
        $currentTimes += 1;
        $array[$index]->loggedtimes = $currentTimes;

        fwrite($myfile, json_encode($array));
        fclose($myfile);
    }

    function findIndex($filename, $username) {
        $file = fopen($filename,"r");
        $read = fread($file, filesize($filename));

        $array = json_decode($read);
        
        for($i = 0; $i < count($array); $i++) {
            if (strcmp($array[$i]->username, $username) == 0) {
                return $i;
            }
        }
        fclose($myfile);
    }

    function showUserInfo($filename, $index) {
        $file = fopen($filename,"r");
        $read = fread($file, filesize($filename));

        $array = json_decode($read);

        echo "<p> Your username is: ". $array[$index]->username . "</p>";
        echo "<p> Your password is: ". $array[$index]->password . "</p>";
        echo "<p> You've logged in: ". $array[$index]->loggedtimes . " times.</p>";

        fclose($file);
    }
?>