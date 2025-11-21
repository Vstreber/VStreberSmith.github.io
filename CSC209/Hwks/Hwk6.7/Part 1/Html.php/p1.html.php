<!DOCTYPE html>
<html>
    <head>
        <link id="theme" rel="stylesheet" type="text/css" href="../css/p1.css" />
        
    </head>
    <body id="body">

        <?php
            $images = glob("../Images/*.jpg");
            $i = 1;

            foreach($images as $image) {
                echo '<p id="p'.$i.'">Check to toggle just this image!<input type="checkbox" id="'.$i.'" onclick="toggle('.$i.')"></p>';
                echo '<img id="img'.$i.'" src="'.$image.'" />';
                $i ++;
            }
        ?>

        <script>

            function toggle(num) {
                checkbox = document.getElementById(num);
                image = document.getElementById("img" + num);
                children = document.getElementById("body").children;
                paragraph = document.getElementById("p" + num);

                if (checkbox.checked == true) {
                    for (var child of children) {
                        if ((child.id != image.id) && (child.id != checkbox.id) && (child.id != paragraph.id)) {
                            child.style.visibility = "hidden";
                        }
                    }
                } else {
                    for (var child of children) {
                        child.style.visibility = "visible";
                    }                
                }
            }
        </script>
    </body>
</html>