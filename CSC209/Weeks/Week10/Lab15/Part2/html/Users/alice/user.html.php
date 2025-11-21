<?php
    session_start();
?>
<html>
    <head>
        <script src="../../../js/functions.js"></script>
        <?php include('../../../php/reader.php'); ?>
    </head>

    <body>
        <h1>WELCOME!</h1>
        
        <script> 
            timeLoggedIn("start");
        </script>
        
        <?php
            $myfile = fopen("../../../json/users.json", "r") or die("Unable to open file!");

            $read = fread($myfile, filesize("../../../json/users.json"));
            $array = json_decode($read);
            fclose($myfile);


            $myfile = fopen("../../../json/users.json", "w") or die("Unable to open file!");

            $currentTimes = $array[$_SESSION["index"] - 1]->loggedtimes;
            $currentTimes -= 1;
            $array[$_SESSION["index"] - 1]->loggedtimes = $currentTimes;

            fwrite($myfile, json_encode($array));
            fclose($myfile);
        ?>

        <form action="../../logoutPage.html.php" method="POST">
            <input type="hidden" name="folder" value= <?php $_SESSION["username"] ?>>
            <input type="hidden" name="time" id="timeElapsed" value="placeholder">
            <input type="submit" onclick='timeLoggedIn("end")' value="Log Out">
        </form>


    </body>
</html>