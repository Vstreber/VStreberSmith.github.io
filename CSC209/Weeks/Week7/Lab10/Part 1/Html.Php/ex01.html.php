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
<?php echo "NRWEEKS=".$NRWEEKS."/n"; ?>

<?php
var_dump($LISTDATES);
?>

<?php
    for ($i=1; $i<= $NRWEEKS; $i++){
        echo("\n<h1>Week $i<h1>\n");
        echo("\n<h2> > Date: $LISTDATES[$i]</h2>\n");
        echo("\n<h3> > Topic: $LISTTOPICS[$i]</h3>\n");
        echo("\n<p> > $LISTDESCRIPTIONS[$i]</p>\n");
    }
?>