<?php
    session_start();
?>
<html>
    <head>
        <script src="../js/functions.js"></script>
        <?php include('../php/reader.php'); ?>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link id="theme" rel="stylesheet" type="text/css" href="../css/textBox.css" />
        
    </head>

    <body>
        <h1>WELCOME!</h1>
        
        <script> 
            timeLoggedIn("start");
        </script>
        
        <?php
            $myfile = fopen("../json/users.json", "r") or die("Unable to open file!");

            $read = fread($myfile, filesize("../json/users.json"));
            $array = json_decode($read);
            $array = (array)$array;
            fclose($myfile);

            $myfile = fopen("../json/users.json", "w") or die("Unable to open file!");

            $currentTimes = $array[$_SESSION["index"] - 1]->loggedtimes;
            $currentTimes -= 1;
            $array[$_SESSION["index"] - 1]->loggedtimes = $currentTimes;

            fwrite($myfile, json_encode($array));
            fclose($myfile);
        ?>

        <form action="logoutPage.html.php" method="POST">
            <input type="hidden" name="folder" value= <?php $_SESSION["username"] ?>>
            <input type="hidden" name="time" id="timeElapsed" value="placeholder">
            <input type="submit" onclick='timeLoggedIn("end")' value="Log Out">
        </form>

        <div class="main-content">
            <div class="text-editor-header">
                <button type="button" class="btn" data-element="bold">
                    <i class="fa fa-bold" > </i>
                </button>
                <button type="button" class="btn" data-element="italic">
                    <i class="fa fa-italic" > </i>
                </button>
                <button type="button" class="btn" data-element="underline">
                    <i class="fa fa-underline" > </i>
                </button>
                <button type="button" class="btn" data-element="insertUnorderedList">
                    <i class="fa fa-list-ul" > </i>
                </button>
                <button type="button" class="btn" data-element="insertOrderedList">
                    <i class="fa fa-list-ol" > </i>
                </button>
                <button type="button" class="btn" data-element="createLink">
                    <i class="fa fa-link" > </i>
                </button>
                <button type="button" class="btn" data-element="justifyLeft">
                    <i class="fa fa-align-left" > </i>
                </button>
                <button type="button" class="btn" data-element="justifyCenter">
                    <i class="fa fa-align-center" > </i>
                </button>
                <button type="button" class="btn" data-element="justifyRight">
                    <i class="fa fa-align-right" > </i>
                </button>
                <button type="button" class="btn" data-element="insertImage">
                    <i class="fa fa-image" > </i>
                </button>
            </div>
            <div class="content" contenteditable="true"></div>
        </div>


        <script src="../js/app.js"></script>
        <script src="https://use.fontawesome.com/a31a3f8384.js"></script>

    </body>
</html>