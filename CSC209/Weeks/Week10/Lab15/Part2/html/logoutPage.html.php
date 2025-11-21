<html>
    <body>
        <h1>Goodbye!</h1>
        <?php 
            session_start();
            include('../php/reader.php');
            echo "<p> time elapsed: ". $_POST["time"] . "</p>";

            $file = fopen("../json/users.json","r");
            $read = fread($file, filesize("../json/users.json"));
    
            $array = json_decode($read);
            fclose($file);

            echo $_POST["time"].'<br></br>';
            echo $_SESSION["index"];

            updateMinutes($_POST["time"], $_SESSION["index"], $array, "../json/users.json");
        ?>
    </body>
</html>