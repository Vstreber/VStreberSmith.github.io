<?php
    session_start();
?>
<html>
    <head>
        <script src="../../../js/functions.js"></script>
        <?php include('../../../php/reader.php'); ?>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link id="theme" rel="stylesheet" type="text/css" href="../../../css/slideShow.css" />
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

        <form action="../../../php/upload.php" method="post" enctype="multipart/form-data">
            Select image to upload (jpg only please!):
            <input type="file" name="fileToUpload" id="fileToUpload">
            <input type="submit" value="Upload Image" name="submit">
        </form>

        <?php
        $images = glob("Images/*.jpg");
        $i = 1;
        $inner = '';
        $len = count($images);

        foreach($images as $image) {
            $imgname = substr($image,7);
            
            $numberDiv = '<div class="numbertext">'.$i.'/'.$len.'</div>';
            $image = '<img src="'.$image.'" alt="'.$imgname.'">';

            $slideDiv = '<div class="mySlides" style="display:none">'.$numberDiv.$image.'</div>';
            
            $captionContainer = '<div class="caption-container">'.$imgname.'<p id="caption"></p></div>';

            $inner = $inner . $slideDiv . $captionContainer;

            $i ++;
        }

        $container = '<div class="container">'.$inner.'</div>';
        echo $container;
        
        ?>

    <a class="prev" onclick="plusSlides(-1)"><</a>
    <a class="next" onclick="plusSlides(1)">></a>

    <div class="row">
      <?php

        $images = glob("Images/*.jpg");
        $i = 1;
        $inner = '';
        $len = count($images);

        foreach($images as $image) {
            $demoImages = '<img class="demo cursor" src="'.$image.'" style="width:100%" onclick="currentSlide('.$i.')">';
            echo '<div class="column">'.$demoImages.'</div>';
            $i ++;
        }

      ?>
    </div>

    <script type="text/javascript" src="../../../js/slideShow.js">
    </script>

    </body>
</html>