<html>
    <body>
        <?php 
            include('../php/reader.php');
            if (strcmp(verify($_POST["username"], $_POST["password"], '../json/users.json'),"admin") == 0) {
                header("Location: Admin/admin.html.php");
                die();
            } else if (strcmp(verify($_POST["username"], $_POST["password"], '../json/users.json'),"user") == 0) {
                $foldernum = findIndex('../json/users.json', $_POST["username"]) + 1;
                header("Location: Users/User".$foldernum."/user.html.php");
                die();
            } else {
                echo "<h1>Login Failed</h1>";
                echo "<p>Your username and/or password didn't match any account in database.</p>";
                echo '<a href="loginPage.html.php" class="button">Try Again</a>';
            }
        ?>
    </body>
</html>