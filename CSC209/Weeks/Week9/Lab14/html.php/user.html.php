<html>
    <body>
        <?php 
            include('../php/reader.php');
            if (strcmp(verify($_POST["username"], $_POST["password"], '../json/users.json'),"true") == 0) {
                echo "<h1>Success! Welcome!</h1>";
                showUserInfo('../json/users.json',findIndex('../json/users.json', $_POST["username"]));


            } else {
                echo "<h1>Login Failed</h1>";
                echo "<p>Your username and/or password didn't match any account in database.</p>";
                echo '<a href="loginPage.html.php" class="button">Go Back</a>';
            }
        ?>
    </body>
</html>