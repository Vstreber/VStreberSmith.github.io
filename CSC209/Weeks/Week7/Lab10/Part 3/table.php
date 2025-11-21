<?php

    $NRWEEKS = 3;

    $LISTDATES = array("Sep 1","Sep 8","Sep 15");

    $LISTTOPICS = array("Installation","Html","Css");

    $LISTDESCRIPTIONS=["We install software","We make our first Html","We style pages with Css","Get started on Javascript ","","","","","","","","",""];
?>

<html>
    <head>
    </head>

    <body>

        <?php
            echo("<table>");
                echo("<tr>");
                    echo("<th>Week</th>");
                    echo("<th>Date</th>");
                    echo("<th>Topic</th>");
                    echo("<th>Description</th>");
                echo("</tr>");

            for ($i=1; $i<= $NRWEEKS; $i++){
                echo("<tr>");
                    echo("<td>$i");
                    echo("<td>$LISTDATES[$i]</td>");
                    echo("<td>$LISTTOPICS[$i]</td>");
                    echo("<td>$LISTDESCRIPTIONS[$i]</td>");
                echo("</tr>");
            }
            echo("</table>");
        ?>

    </body>
</html>