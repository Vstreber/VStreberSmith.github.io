<html>
    <head>
        <?php include("../../php/reader.php"); ?>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="../../css/main.css">
        <link rel="stylesheet" href="../../css/bg.css">
    </head>

    <body>
        
   <a href="../loginPage.html.php">Log Out</a>

    <h1>Welcome to the Admin page.</h1>

        <button type="button" onclick="loadDoc('../json/users.json')">Refresh</button>
        
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

            loadDoc('../json/users.json');

            function callDelete(user) {
                let username = user;
                
                $.ajax({
                    type: "POST",
                    url: "../../php/deleteUser.php",
                    data: { 
                        username: username
                    },
                    success: function(data) {
                        alert(data);
                    }
                });

                loadDoc('../json/users.json');
            }

            function callEdit(user) {
                let currentUsername = user;
                
                let newUsername = prompt("Please enter a new username.");
                let newPassword = prompt("Please enter a new password.");
                
                $.ajax({
                    type: "POST",
                    url: "../../php/editUser.php",
                    data: { 
                        currentUsername: currentUsername,
                        newUsername: newUsername,
                        newPassword: newPassword
                    },
                    success: function(data) {
                        alert(data);
                    }
                });

                loadDoc('../json/users.json');
            }

        </script>

    </body>
</html>