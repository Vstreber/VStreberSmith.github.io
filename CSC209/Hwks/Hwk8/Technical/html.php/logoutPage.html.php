<html>

    <body>
        <h1>Goodbye!</h1>
        <?php 
            include('../php/reader.php');
            echo "<p> folder number: " . $_POST["folder"] . "</p>";
            echo "<p> time elapsed: ". $_POST["time"] . "</p>";

            $file = fopen("../json/users.json","r");
            $read = fread($file, filesize("../json/users.json"));

            $array = json_decode($read);

            updateMinutes($_POST["time"], $_POST["folder"], $array, "../json/users.json");
        ?>
    </body>
</html>