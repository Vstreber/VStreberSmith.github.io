<?php

    $filename = $_REQUEST["filename"];

    if (file_exists($filename) and (filesize($filename) > 0)) {

        $file = fopen($filename,"r");
        $read = fread($file, filesize($filename));
        fclose($file);

        $array = json_decode($read);
        $array = (array)$array;

        if (count($array) == 0) {
            $file = fopen($filename, "w") or die("Unable to open file!");

            fwrite($file, '[{"title":"New Note","content":"write anything!"}]');
            fclose($file);

            echo '<div class="tab">';
                echo '<button class="createnote" onclick="createNote(path)" type="submit">+</button>';
                echo '<button class="tablinks" onclick="openTab(event, \'New Note\')" contenteditable="true">New Note</button>';
            echo '</div>';
        }else{
            echo '<div class="tab">';
                echo '<button class="createnote" onclick="createNote(path)" type="submit">+</button>';
                foreach ($array as $entry) {
                    $entry = (array)$entry;
                    echo '<button class="tablinks" onclick="openTab(event, \''.$entry["title"].'\', path)">'.$entry["title"].'</button>';
                }
            echo '</div>';  
        }

    } else {

        $file = fopen($filename, "w") or die("Unable to open file!");

        fwrite($file, '[{"title":"New Note","content":"write anything!"}]');
        fclose($file);

        echo '<div class="tab">';
            echo '<button class="createnote" onclick="createNote(path)" type="submit">+</button>';
            echo '<button class="tablinks" onclick="openTab(event, \'New Note\')" contenteditable="true">New Note</button>';
        echo '</div>';
    }
    
?>