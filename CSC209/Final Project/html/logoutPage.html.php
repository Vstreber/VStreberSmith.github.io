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

            updateMinutes($_POST["time"], $_SESSION["index"], $array, "../json/users.json");

            header('Location: loginPage.html.php');

        ?>
    </body>
</html>