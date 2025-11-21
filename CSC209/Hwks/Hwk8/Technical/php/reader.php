<?php

    function jsonToArray($filename) {
        $file = fopen($filename,"r");
        $read = fread($file, filesize($filename));

        $array = json_decode($read);
        fclose($file);
        return $array;
    }

    function verify($username, $password, $filename) {
        $file = fopen($filename,"r");
        $read = fread($file, filesize($filename));

        $array = json_decode($read);
        fclose($file);
        for($i = 0; $i < count($array); $i++) {
            if ((strcmp($array[$i]->username, $username) == 0) and (strcmp($array[$i]->password, $password) == 0) and (strcmp($array[$i]->username, "admin") == 0)) {
                updateLogTimes($filename, $i, $array);
                return "admin";
            } else if ((strcmp($array[$i]->username, $username) == 0) and (strcmp($array[$i]->password, $password) == 0)) {
                updateLogTimes($filename, $i, $array);
                return "user";
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
        fclose($file);
        for($i = 0; $i < count($array); $i++) {
            if (strcmp($array[$i]->username, $username) == 0) {
                return $i;
            }
        }
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

    function extractFolderNumber($filename) {
        $path = realpath($filename);
        $path = dirname($path);
        $basename = basename($path);
        
        $userNrString = substr($basename, 4);

        if (is_numeric($userNrString)){
            $userNr = (int)$userNrString;
        }
        echo $userNr;
    }

    function updateMinutes($newMins, $fileNum, $array, $filename) {
        $mins = bcdiv((float)$newMins, 1, 2);
        $fileNum = (int)$fileNum;
        $index = $fileNum - 1;


        $minutesLogged = $array[$index]->minuteslogged;
        array_push($minutesLogged, $mins);

        $array[$index]->minuteslogged = $minutesLogged;

        $myfile = fopen($filename, "w") or die("Unable to open file!");
        fwrite($myfile, json_encode($array));
        fclose($myfile);
    }
?>