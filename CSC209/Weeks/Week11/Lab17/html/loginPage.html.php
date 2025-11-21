<html>
    <head>
        <link rel="stylesheet" href="../css/hwk8.css">
    </head>
    <body>

        <form action="verify.html.php" method="POST">
            Username: <input type="text" id="login" name="username"><br>
            Password: <input type="text" id="login" name="password"><br>
            <input type="submit" >
        </form>


        <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Register</button>
        <div style="display:none" id="id01" class="modal">

            <form class="modal-content animate" action="../php/registerUser.php" method="post">

                <h1>Register a new user!</h1>
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                        
                    <button type="submit">Register</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                </div>

                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                </div>
            </form>
        </div>

        <script>
            // Get the modal
            var modal = document.getElementById('id01');

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        </script>

    </body>
</html>