<html>
    <head>
        <link rel="stylesheet" href="../css/main.css">
        <link rel="stylesheet" href="../css/bg.css">
    </head>
    <body>


        <canvas id="canvas1"></canvas>
        <script src="../js/bg.js"></script>


        <br></br>
        <p><em><b>Welcome to</b></em></p>
        <h1 style="width:30%;transform:translateX(+117%);font-size:50px"><em>StickNote!</em></h1>

        <br></br>
        <br></br>
        <form action="verify.html.php" method="POST">
            Username: <br></br>
            <input type="text" class="login" id="login" name="username"><br>
             <br></br> Password: <br></br>
            <input type="text" class="login" id="login" name="password"><br>
            <input type="submit" >
        </form>


        <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Register</button>
        <div style="display:none" id="id01" class="modal">

            <form class="modal-content animate" action="../php/registerUser.php" method="post">

                <h1>Register a new user!</h1>
                <div class="container">
                    <label for="uname"><b>Username<br></br></b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>
                    <br></br>
                    <label for="psw"><b>Password<br></br></b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                    <br></br>
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