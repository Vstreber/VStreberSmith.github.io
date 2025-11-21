<html>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link id="theme" rel="stylesheet" type="text/css" href="../css/slideShow.css" />

  <body>
    <br></br>
    <h1 style="text-align:center">Slideshow! Banshee and Nature</h1>
    <h2 style="text-align:center">&#8829;^&#8226;&#10826;&#8226;^&#8828;</h2>

    <?php
      $foldernames = glob("../Images/*", GLOB_ONLYDIR);
      echo '<div class="dropdown">';
      echo '<label for="folders">Choose a folder of images!:</label> <select name="folders" id="folder" onchange="switchSlides()">';

      foreach($foldernames as $folder) {
        $folder = substr($folder, 10);
        echo '<p>'.$folder.'</p>';
        echo '<option value='.$folder.'>'.$folder.'</option>';
      }

      echo '</select>';
      echo '</div>';
      echo '<br></br>';
    ?>

    <div class="scalloped-box">
      <div class="scalloped-box2">
        <br></br>
        <?php

          foreach($foldernames as $folder) {
            $folder = substr($folder, 10);
            $images = glob("../Images/".$folder."/*.jpg");
            $i = 1;
            $inner = '';
            $len = count($images);
            
            foreach($images as $image) {
                $imgname = explode($folder.'/', $images[$i - 1])[1];
                
                $numberDiv = '<div class="numbertext">'.$i.'/'.$len.'</div>';
                $image = '<img src="'.$image.'" alt="'.$imgname.'">';

                $slideDiv = '<div class="mySlides" style="display:none" id="'.$folder.'">'.$numberDiv.$image.'</div>';
                
                $captionContainer = '<div class="caption-container" id="'.$folder.'">'.$imgname.'<p id="caption"></p></div>';

                $inner = $inner . $slideDiv . $captionContainer;

                $i ++;
            }
            $container = '<div id="'.$folder.'" class="container">'.$inner.'</div>';
            echo $container;
          }
          
        ?>

        <a class="prev" onclick="plusSlides(-1)"><</a>
        <a class="next" onclick="plusSlides(1)">></a>

        <div class="row">
          <?php
            foreach($foldernames as $folder) {
              $folder = substr($folder, 10);
              $images = glob("../Images/".$folder."/*.jpg");
              $i = 1;
              $inner = '';
              $len = count($images);

              foreach($images as $image) {
                  $demoImages = '<img class="demo cursor" src="'.$image.'" style="width:100%" onclick="currentSlide('.$i.')" alt="'.$DESCRIPTIONS[$i].'">';
                  echo '<div class="column" id="'.$folder.'">'.$demoImages.'</div>';
                  $i ++;
              }
            }

          ?>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="../js/slideShow.js">
    </script>

  </body>
</html>
