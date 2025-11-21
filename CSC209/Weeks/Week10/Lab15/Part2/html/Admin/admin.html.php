<html>
    <head>
        <?php include("../../php/reader.php"); ?>
    </head>
    <body>
        <h1>Welcome to the Admin page.</h1>
        <button type="button" onclick='loadDoc("../json/users.json")''>Refresh</button>
        
        <p id="demo"></p>

        <script>
            function loadDoc(str) {
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                    document.getElementById("demo").innerHTML =
                    this.responseText;
                }
                xhttp.open("GET", "../../php/readerAJAX.php?filename="+str);
                xhttp.send();
            }
        </script>
    </body>
</html>