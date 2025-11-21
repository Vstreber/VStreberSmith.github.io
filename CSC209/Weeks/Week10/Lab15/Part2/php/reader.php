<?php
    session_start();
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
            } 
            
            if ((strcmp($array[$i]->username, $username) == 0) and (strcmp($array[$i]->password, $password) == 0)) {
                updateLogTimes($filename, $i, $array);
                return "user";
                break;
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

    function updateMinutes($newMins, $fileNum, $array, $filename) {
        $mins = (int)$newMins;
        echo $mins.'<br></br>';

        $fileNum = (int)$fileNum;
        $index = $fileNum - 1;

        $minutesLogged = $array[$index]->minuteslogged;
        array_push($minutesLogged, $mins);

        var_dump($minutesLogged);
        echo '<br></br>';
        var_dump($array);
   
        $array[$index]->minuteslogged = $minutesLogged;
        echo '<br></br>';
        var_dump($array);

        $myfile = fopen($filename, "w") or die("Unable to open file!");
        fwrite($myfile, json_encode($array));
        fclose($myfile);
    }
?>